![Arquiteturado ProdutoVInfraestrutura.jpg](/.attachments/Arquiteturado%20ProdutoVInfraestrutura-e1e9a801-9a58-4318-a92c-8881602b22e0.jpg)

Objetivo: Identificar e especificar os recursos para a interação entre os elementos de processamento em um ambiente de aplicações distribuídas.

Teremos diferentes interações:

- Tests Resolver <-> Backend (DB) de testes (read-only?)
- Rastreador de Eventos <-> Backend (DB) de Eventos (write-only)
- Dashboard <-> Backend de estatistica (read-only)
- Painel de testes <-> Backend de testes (read and write)
- Engine de estatistica <-> Backend de Eventos e de Testes (read) backend de estatística 
- Todos os backends precisam de métodos de autenticação (LGPD)
- Cache no backend de estatistica e de testes


Tarefas
1. Para cada elemento de processamento 
2. Identifique quais elementos de processamento precisam de suporte de infraestrutura comunicação e recursos computacionais específicos
3. Especifique os elementos de comunicação e recursos computacionais
4. Preencha a tabela a seguir

|**Elemento de Processamento**|**Recursos computacionais**|**Elemento de Comunicação**|
|--|--|--|
| Autenticador | Poucos | Presente em todos os endpoints do BE |
| Cache de dados | Memória, quanto mais melhor | Para oferecermos mais velocidade ao microsserviço quando este acessar o BD |
| Engine de Estatistica | Muitos | Analise automatizada dos resultados dos testes |
|  |  |  |

5. Identifique os elemento de processamento que precisam de funções da infraestrutura, que são: gerenciamento, coordenação, repositório, segurança
6. Descreve para cada elemento de processamento as funções necessárias
7. Preencha a tabela a seguir



|**Elemento de Processamento**|**Tipo de Função**|**Descrição**|**Justificativa**| 
|--|--|--|--|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

8. Revise e Publique na WIKI

# Glossário
Recursos para interação: pode ser meios de interação e infraestrutura de comunicação

Dica: 
1) Funções de Gerenciamento: gerenciamento dos nós, objetos, clusters
2) Funções de Coordenação: notificação de eventos, grupos, ativação e reativação, replicação, migração, transação, transações ACID e checagem e recuperação.
3) Funções de Repositório: Armazenamento, Organização da Informação, relocação, tipo de repositório, trading
4) Funções de Segurança: controle de acesso, auditoria de segurança, autenticação, integridade, confidencialidade, não repúdio, gerenciamento de chaves (chaves criptográficas).
