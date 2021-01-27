# Pré-requisitos:
- Imagem de contêiner disponível no dockerhub
- Endereço IP e chave de acesso (.pem) de uma Máquina virtual EC2
- Console de linha de comando para conexão via ssh (p.ex Bitvise client SSh Shell para windows)

# Passos:
1. Executar o Procedimento de Conexão à nuvem AWS
[Procedimento de Conexão à nuvem da Amazon via AWS Educate - PCS3853.pdf](/.attachments/Procedimento%20de%20Conexão%20à%20nuvem%20da%20Amazon%20via%20AWS%20Educate%20-%20PCS3853-719a0d62-edd1-4d26-acc3-2e81be071ae6.pdf)
2. Instalar docke
https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-18-04-pt (até o passo 3)
3. Instalar o docker-compose 
https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04-pt (até o passo 2)
4. No servidor remoto, criar um arquivo `docker-compose.yml` e definir a aplicação que será executada. Por exemplo, para o repositório do contêiner `https://hub.docker.com/r/miklt/react-app` definimos o arquivo `docker-compose.yml`
```yaml
version: '3.7'
services:
  app-react:
    container_name: react-app-v7
    image: miklt/react-app:7 #aqui é preciso usar o seu repositório
    ports:
      - '80:80' # Aqui é definida a porta pela qual será acessado o serviço. O primeiro elemento é a porta exposta pelo contêiner e o segundo elemento é a porta usada pela imagem.
```
5. Depois de criar o arquivo, procedemos a executá-lo usando o comando `docker-compose up`
6. O resultado deve ser parecido com este:

![Captura de Tela 2020-03-04 às 11.27.39.png](/.attachments/Captura%20de%20Tela%202020-03-04%20às%2011.27.39-95099299-3230-47d0-bb54-9df52edaa707.png)
