# Pré-requisitos:
1. Ter executado a criação do arquivo Dockerfile [Criação do Arquivo Dockerfile](/PCS-3853-%2D-Laboratório-Engenharia-de-Software-II/Recursos-de-Aula/Configuração-do-Ambiente-DevOps/Criação-do-Arquivo-Dockerfile)
2. Ter uma conta no DockerHub [https://docs.docker.com/docker-id/](https://docs.docker.com/docker-id/)
3. Ter executado a criaçaõ de conexão de serviço para o registro dockerhub [Criação de conexão de serviço para o registro docker hub](/PCS-3853-%2D-Laboratório-Engenharia-de-Software-II/Recursos-de-Aula/Configuração-do-Ambiente-DevOps/Criação-de-conexão-de-serviço-para-o-registro-docker-hub)
# Integração contínua
O seguinte gráfico extraído do livro _Introducing Azure Kubernetes Service_ (que está disponível no repositório do tidia) apresenta um exemplo de pipeline de integração contínua (CI). 
![cd.PNG](/.attachments/cd-54c6ddd4-356a-4ab6-a5c1-497501a2c900.PNG)
# Descrição do Pipeline Azure
Utilizando a ferramenta de pipelines do azure, é possível implementar essas atividades de forma automática. Eis aqui um exemplo:
Arquivo `azure-pipelines.yml`
>```yaml
> trigger:
> - master
> pool:
>     vmImage: 'Ubuntu 18.04'      
> variables:
>     imageName: 'react-app'    
>     DOCKER_BUILDKIT: 1    
> steps:
> - task: Docker@2
>   displayName: Construir a imagem do app
>   inputs:
>     repository: 'miklt/react-app'
>     command: 'buildAndPush'
>     Dockerfile: Dockerfile
>     containerRegistry: 'dockerHub'

Neste pipeline, o evento que inicia o processo é um `push` na branch `master` de nosso repositório de código.
>```yaml
> trigger:
> - master

Depois, indicamos que o `pipeline` será executado na nuvem, numa máquina virtual baseada no sistema operacional Ubuntu 18.
>```yaml
> pool:
>     vmImage: 'Ubuntu 18.04' 
Definimos que o nome da imagem será `react-app` e ativamos recursos da plataforma azure para o uso de Docker.
>```yaml
> variables:
>     imageName: 'react-app'    
>     DOCKER_BUILDKIT: 1    
A seguir definimos as atividades que serão executadas na pipeline. Basicamente a construção da imagem e a publicação no registro de imagens de contêiner dockerhub. Para poder executar essa atividade é preciso ter configurado a conexão de serviço para o docker hub a fim de ter as credenciais de acesso para publicar a imagem.
No nome da tarefa precisa começar com `Docker@` pois é proprio do pipeline azure.
O comando `'buildAndPush'` também é parte do pipeline azure para a criação da imagem e a publicação no registro.
O valor de `repository` se refere ao lugar no docker hub onde será publicada a imagem. No exemplo, será criado o repositório `react-app` dentro da conta de `miklt`. No seu projeto, utilize seu nome de usuário no docker hub.
>```yaml
> steps:
> - task: Docker@2
>   displayName: Construir a imagem do app
>   inputs:
>     repository: 'miklt/react-app'
>     command: 'buildAndPush'
>     Dockerfile: Dockerfile
>     containerRegistry: 'dockerHub'

No repositório de código fonte é preciso criar o arquivo `azure-pipeline.yml`, adicionar ele ao repositório local usando o comando `git add azure-pipeline.yml`, fazer commit `git commit -m "inclusão de pipeline" ` e atualizar o repositório remoto no azure devops `git push origin master`.

# Execução do Pipeline
Uma vez carregado no repositório remoto, é possível visualizar o pipeline na área `Pipelines` do projeto.

![image.png](/.attachments/image-a30de7f2-619d-4da9-bf7f-0b180af28413.png)
Ao clicar no nome da pipeline, podemos acessar os resultados de execuções anteriores e iniciar manualmente uma execução ou editar a pipeline.

![image.png](/.attachments/image-8d3e7acb-2ab1-4e54-97c1-f256cac478dc.png)
Clicar em "Run Pipeline" 
![image.png](/.attachments/image-54bab431-c3d5-4d1b-a996-24d5f412e425.png)

e depois em "Run"

![image.png](/.attachments/image-825e20dd-5879-4943-9c2a-3377ab821729.png)

Inicialmente aparecerá o estado da pipeline como "Queued" e depois em "Running". Ao clicar em "Job" podemos ver detalhes do que está acontecendo.

![image.png](/.attachments/image-75ac34b6-b73e-401c-abfc-5ce69f9d6249.png)

Depois de alguns minutos a execução terá terminado 

![image.png](/.attachments/image-a1005544-6c59-4bda-a920-c38e55b2e935.png)

# Resultado
Se o pipeline foi executado com sucesso, significa que temos uma imagem docker registrada e disponível no registro docker hub. Para verificar, vamos até o site docker hub e procuramos por nossos repositórios `https://hub.docker.com/repository/docker/{nome-usuario}/{nome-repositório}`. No exemplo foi usado `miklt` como nome de usuário e `react-app` como nome do repositório. Então a `url` é `https://hub.docker.com/r/miklt/react-app` 

![image.png](/.attachments/image-807bb1df-69ad-43cb-8281-2e9ba1b3be48.png)

# Executar a imagem do registro
Para efeito de teste, podemos executar a imagem a partir do registro docker hub. Para isso, em nossa máquina local, executamos o comando `docker run -it -p 80:80 miklt/react-app:6` O sufixo `:6` indica a versão de criação da imagem. Esse comando ira procurar a imagem no docker hub, baixar ela, e executar ela.

![image.png](/.attachments/image-a8cd36c4-e4ce-4a9f-b3cf-141bec16415a.png)


