# Pré-Requisitos:
1. Ter uma cópia do repositório na máquina local de desenvolvimento na branch master.
2. Ter permissão de push no repositório remoto no dev.azure.com
2. Ter Docker instalado e em execução.
# Estrutura de Arquivos do Projeto
Nosso projeto de exemplo é um projeto React que foi gerado a partir do script create-react-app e tem a seguinte estrutura:

![image.png](/.attachments/image-7671a62f-d6d6-4fb8-bcc3-b9a0dd293bdc.png =250x)

Iremos criar os arquivos `.dockerignore` e  `Dockerfile` na raiz do projeto. 
O arquivo `.dockerignore` indica quais arquivos ou pastas não serão considerados ao executar o comando `docker build` e dessa forma não ocupar espaço desnecessário na imagem de contêiner a ser criada. Neste caso, a pasta `node_modules` e o arquivo `npm-debug.log` serão desconsiderados.

A seguir o código do arquivo:
`.dockerignore`
> ```gitignore
> node_modules
> npm-debug.log
> ```

O arquivo `Dockerfile` descreve as informações para construir a imagem de nosso contêiner. Para nosso código projeto React iremos primeiro importar uma imagem pré-existente de `node`, que será usada para fazer a compilação do projeto , ir para a pasta `/app` dentro dessa imagem e copiar todos os arquivos do nosso repositório para essa pasta. Depois serão executados os comandos de instalação de bibliotecas e dependências do arquivo `package.json` e a criação de uma pasta `build` com o resultado dessa compilação.
Finalmente, utilizando uma imagem _limpa_ do `alpine-node` iremos instalar a aplicação compilada e e será executado o comando para execução.
A seguir o código do arquivo 
`Dockerfile`
> ```Docker
> FROM mhart/alpine-node:latest AS builder
> WORKDIR /app
> COPY . .
> RUN npm install react-scripts -g --silent
> RUN yarn install
> RUN yarn run build
> 
> FROM mhart/alpine-node
> RUN yarn global add serve
> WORKDIR /app
> COPY --from=builder /app/build .
> CMD ["serve", "-p", "80", "-s", "."]
> ```

Após a criação dos arquivos, a estrutura de diretórios ficará assim:
![image.png](/.attachments/image-6447aa94-0340-4d21-8659-ef1bd13a57a4.png =250x)

Uma vez criados os arquivos, procedemos a testar localmente a construção da imagem utilizando o comando:
> `docker build -t react-app .`
Esse comando indica que iremos criar uma imagem de contêiner com nome 'react-app' utilizando o arquivo `Dockerfile` presente no diretorio local `.` 

Resultado parcial na tela após o comando:
![image.png](/.attachments/image-a6137d4d-18b6-42dd-9685-b8cb6c79123c.png)
![image.png](/.attachments/image-11120c7a-1b1c-46b2-af55-e095050764d2.png)
![image.png](/.attachments/image-4f00d39b-a719-437c-a866-a1fd1dd07889.png)

Tendo criado a imagem, podemos executar ela no docker, utilizando o comando: 
`docker run -it -p 80:80 react-app`
O parâmetro `-it` vai mostrar o resultado da execução no prompt de comando.
O parâmetro `-p 80:80` vai abrir a porta 80 da rede do ambiente docker e redirecionar para a porta 80 do contêiner.

![image.png](/.attachments/image-3219dec3-1c5d-426a-a576-35ac1534460c.png)

No prompt de comando iremos ver que o contêiner está em execução e podemos acessar, no navegador a url do projeto. `http://localhost:80`

![image.png](/.attachments/image-cd2116fa-0275-47b7-8eac-69dd25a8c5a6.png)

Para terminar a execução do contêiner, no prompt de comando podemos executar `Ctrl + C`

Finalmente, tendo testado o arquivo `Dockerfile` procedemos a adicionar os arquivos no repositório git usando os comandos `git add Dockerfile .dockerignore`, dando commit `git commit -m "Incluindo arquivos docker" ` e incluindo eles no repositório remoto, no azure devops `git push origin master`

A estrutura no repositório remoto, no azure devops deve ficar assim:

![image.png](/.attachments/image-22de1ade-8b94-450c-b5f3-b4f7e32e990e.png)
