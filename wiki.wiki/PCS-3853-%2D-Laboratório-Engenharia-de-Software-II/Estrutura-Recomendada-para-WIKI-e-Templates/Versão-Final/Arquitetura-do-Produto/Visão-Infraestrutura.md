![Arquiteturado ProdutoVInfraestrutura.jpg](/.attachments/Arquiteturado%20ProdutoVInfraestrutura-e1e9a801-9a58-4318-a92c-8881602b22e0.jpg)

Objetivo: Identificar e especificar os recursos para a interação entre os elementos de processamento em um ambiente de aplicações distribuídas.


Tarefas
1. Para cada elemento de processamento 
2. Identifique quais elementos de processamento precisam de suporte de infraestrutura comunicação e recursos computacionais específicos
3. Especifique os elementos de comunicação e recursos computacionais
4. Preencha a tabela a seguir

|**Elemento de Processamento**|**Recursos computacionais**|**Elemento de Comunicação**|
|--|--|--|
| Módulo Resolvedor | Servidor leve, mas com alta simultaneidade de conexões | Endpoints em nosso backend definem qual teste será exibido para o usuário |
| Rastreador de Eventos | Servidor leve, mas com alta simultaneidade de conexões | Endpoints em nosso backend salvam as informações sobre os eventos que o usuário emitiu |
| Engine de Estatistica | Muitos | Aceita inputs do dashboard, comunica-se com os outros microsserviços, gera informações estatisticas |
| Dashboard | Precisa suportar diversos acessos simultâneos | client-server, exibe informações sobre os testes/eventos |
| Gerenciador de elementos testados | Precisa suportar diversos acessos simultâneos | client-server, exibe e permite alteração das informações sobre os testes |

5. Identifique os elemento de processamento que precisam de funções da infraestrutura, que são: gerenciamento, coordenação, repositório, segurança
6. Descreve para cada elemento de processamento as funções necessárias
7. Preencha a tabela a seguir



|**Elemento de Processamento**|**Tipo de Função**|**Descrição**|**Justificativa**| 
|--|--|--|--|
| Módulo Resolvedor | repositório e segurança | Armazena e serve dados relacionados aos testes | Necessita de autenticação |
| Rastreador de Eventos | repositório e segurança | Armazena e serve dados relacionados aos eventos | Necessita de autenticação |
| Engine de Estatistica | gerenciamento | gerencia os programas de análise de dados | autoexplicativo |
| Dashboard | coordenação | exibe informaçoes e aceita inputs sobre a execução de análises | autoexplicativo |
| Gerenciador de elementos testados | coordenação | exibe informações e aceita input sobre os testes | autoexplicativo |

8. Revise e Publique na WIKI

# Glossário
Recursos para interação: pode ser meios de interação e infraestrutura de comunicação

Dica: 
1) Funções de Gerenciamento: gerenciamento dos nós, objetos, clusters
2) Funções de Coordenação: notificação de eventos, grupos, ativação e reativação, replicação, migração, transação, transações ACID e checagem e recuperação.
3) Funções de Repositório: Armazenamento, Organização da Informação, relocação, tipo de repositório, trading
4) Funções de Segurança: controle de acesso, auditoria de segurança, autenticação, integridade, confidencialidade, não repúdio, gerenciamento de chaves (chaves criptográficas).
