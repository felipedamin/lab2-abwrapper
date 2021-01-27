# Intro 
Conjunto de playbooks utilizados para configurar um cluster kubernetes.
# Arquivo de configuração:
- hosts (local onde estão definidas as urls dos hosts que serão controlados pelo ansible)
- ./vars/default (arquivo com definições dos pacotes a serem instalados nos hosts pelo ansible)

# Playbooks do ansible
- 1.install.yml
- 2.master.yml
- 3.workers.yml

# Pré-requisitos
1. Criar as instâncias na nuvem da AWS
2. Ter acesso a chave de acesso (arquivo .pem)
3. Instalar o ansible: 
- Windows - https://geekflare.com/ansible-installation-windows/
- Mac - https://hvops.com/articles/ansible-mac-osx/
- Linux - https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html
# Passos Configuração cluster Kubernetes.
1. Clonar este repositório: https://dev.azure.com/2020-pcs3853/2020-pcs3853/_git/ansible-playbooks
2. Copiar a chave de acesso  (arquivo .pem) dentro da pasta do repositório
3. Testar a conexão com cada host. 
ssh -i "[arquivo chave].pem" ubuntu@<ip público>
4. Preencher o arquivo hosts com o IP do master, worker1 e worker2
5. Executar o comando ansible-playbook -i host 1.install.yml
6. Executar o comando ansible-playbook -i host 2.master.yml
7. Executar o comando ansible-playbook -i host 3.workers.yml

# Passos criação da conexão de serviço para o cluster kubernetes.
1. Conectar-se no host master via ssh.
2. Copiar o conteúdo do arquivo /home/ubuntu/.kube/config
(pode executar o comando: cat /home/ubuntu/.kube/config e copiar o conteúdo da tela)
3. No projeto no azure, acessar: project settings -> service connections -> new service connection -> kubernetes -> Next e escolher Kubeconfig
![Captura de Tela 2020-04-01 às 13.14.19.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.14.19-2c3cb5ac-bee5-414b-9444-bfeec55b60f4.png)
4. Colar o conteúdo do arquivo no campo kubeconfig
![Captura de Tela 2020-04-01 às 13.27.11.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.27.11-56c95627-6e45-49cf-a3ef-8f22e77964bf.png)
5. Achar o valor do atributo 'server' 
![Captura de Tela 2020-04-01 às 13.28.53.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.28.53-c8dd8827-d7d6-44f0-936f-fb880312bde7.png)
E utilizar o valor do ip público do host master.
6. Marcar a opção "Accept untrusted certificates" e clicar em verificar.
![Captura de Tela 2020-04-01 às 13.32.34.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.32.34-30aedf06-4a32-4002-a2ef-e94e4aea6e3f.png)
7. Colocar um nome para a conexão. Use um identificador simples, pois ele será usado no pipeline de implantação depois. Clique em verificar e gravar.
![Captura de Tela 2020-04-01 às 13.36.08.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.36.08-ac43e8d2-5f6c-4ee3-bba8-5e82c5090703.png)

# Passos para a Execução do pipeline de deploy no cluster
1. No repositório do código-fonte, onde está o arquivo azure-pipelines.yml, criar os arquivos:
- deployment.yml
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pcs-teste-deployment
  namespace: development
spec:
  replicas: 2
  selector:
    matchLabels:
      app: pcs-teste
  template:
    metadata:
      labels:
        app: pcs-teste
    spec:
      containers:
      - name: pcs-teste
        image: miklt/react-app:latest
        imagePullPolicy: Always
        ports:
        - containerPort: 80
```
- service.yml
```yml
apiVersion: v1
kind: Service
metadata:
  name: pcs-teste-service
  namespace: development
spec:
  selector:
    app: pcs-teste
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
```
2. Editar o arquivo azure-pipelines.yml para incluir a tarefa de implantação
- azure-pipelines.yml
```yml
- task: KubernetesManifest@0
  name: 'deploy' # <== This parameter adds reference
  inputs:
    action: 'deploy'
    strategy: canary
    percentage: 25
    kubernetesServiceConnection: 'connKubernetes1' #o nome da service connection criada anteriormente.
    namespace: 'development'
    manifests: |
      deployment.yml
      service.yml
    containers: |
      miklt/react-app:$(tag)
```
3. A execução do pipeline agora inclui a implantação, portanto vai demorar um pouco mais.
![Captura de Tela 2020-04-01 às 13.57.49.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.57.49-8847ebc3-5907-4f3a-84f7-0581a6c5f583.png)
4. Para testar precisamos saber qual é a porta que o serviço de gerenciamento de carga atribuiu para o aplicativo. Para descobrir a porta, acesse o host master via ssh e execute o comando:
kubectl -n development get services
![Captura de Tela 2020-04-01 às 13.52.49.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.52.49-b5d02948-2f1f-4d35-ad0e-e209c5be8761.png)
No exemplo, a porta é 31938. Portanto, se acessarmos: http://<ip-host-master>:31938 poderemos acessar a aplicação.
![Captura de Tela 2020-04-01 às 13.56.29.png](/.attachments/Captura%20de%20Tela%202020-04-01%20às%2013.56.29-7b4f98c7-5882-453b-a0e0-dc1b4aff1322.png)
