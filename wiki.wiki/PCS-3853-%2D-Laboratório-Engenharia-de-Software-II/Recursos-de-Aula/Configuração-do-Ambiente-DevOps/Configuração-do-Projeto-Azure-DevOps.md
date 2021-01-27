# 1. Objetivo
Registrar uma imagem de contêiner no DockerHub usando o Azure Pipelines
# 2. Pré-requisitos
a) [Conta no docker hub](https://docs.docker.com/docker-id/)
b) Repositório com código-fonte na branch `master` no dev.azure.com
# 3. Diagrama do processo
::: mermaid
 graph LR; 
 A[Conexão de Serviço para o DockerHub ];
 B[Dockerfile];
 R[Repositório de código-fonte]
 A--> C{Azure Pipeline}
 B--> C
 R--> C
 C--> D[Imagem de contêiner no DockerHub]
:::
# 4. Atividades:
[Criação de conexão de serviço para o registro docker hub](/PCS-3853-%2D-Laboratório-Engenharia-de-Software-II/Recursos-de-Aula/Configuração-do-Ambiente-DevOps/Criação-de-conexão-de-serviço-para-o-registro-docker-hub)
[Criação do Arquivo Dockerfile](/PCS-3853-%2D-Laboratório-Engenharia-de-Software-II/Recursos-de-Aula/Configuração-do-Ambiente-DevOps/Criação-do-Arquivo-Dockerfile)
[Criação do arquivo azure-pipeline](/PCS-3853-%2D-Laboratório-Engenharia-de-Software-II/Recursos-de-Aula/Configuração-do-Ambiente-DevOps/Criação-do-arquivo-azure%2Dpipeline)