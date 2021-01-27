# Pré-requisitos:
1. Fazer parte do grupo de administradores do projeto no azure devops
2. Ter uma conta no registro de imagens de conteiner dockerhub
# Objetivo
Configurar o Ambiente Azure Devops para poder se comunicar com o registro de imagens de contêiners docker hub e permitir o carregamento da imagem do nosso projeto nesse registro através do azure pipelines.
# Procedimento
1. Ir para as configurações do projeto (símbolo de engrenagem na parte inferior esquerda da tela.
![serviceConnection1.png](/.attachments/serviceConnection1-c68551a8-d4e0-48e3-8c65-be29b0c39770.png =50x)

2. Descer nas opções e Clicar em Service Connections, no grupo de Pipelines 
![serviceConnection2.png](/.attachments/serviceConnection2-7cc3036a-4c9a-4758-8a60-b7f0743f1e18.png =250x)
3. Clicar em "Create Service Connection"
![image.png](/.attachments/image-989a9527-c1c7-44b7-905e-9b8bb6d06fdf.png =250x)
4. Escolher "Docker Registry" 
![image.png](/.attachments/image-022d548f-d66d-4a6d-a203-d879e06c103b.png =300x)
5. Escolher "Docker Hub" e preencher o nome de usuário, senha e email. No campo "service connection name" digitar dockerHub e clicar em "Verify and Save". Deixar marcado "Grant access permission to all pipelines"
![image.png](/.attachments/image-e6ca375d-f772-43e5-8dc1-42ed3a247290.png =350x)
6. Após a configuração do registro, ele aparecerá na área de "service connections" dentro das configurações do projeto
![image.png](/.attachments/image-a5639982-1855-459e-bbed-4ce59e4b5a02.png =400x)