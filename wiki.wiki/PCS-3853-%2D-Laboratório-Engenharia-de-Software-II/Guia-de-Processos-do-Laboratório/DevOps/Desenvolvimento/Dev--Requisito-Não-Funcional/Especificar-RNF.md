![DevRNF.png](/.attachments/DevRNF-7aececc5-7f13-4040-a5a3-e72d27d82cdd.png)
**Objetivo:** Especifica os cenário dos RNFs
**Entrada:** Arquitetura do Serviço e Modelo de Uso de Negócio

**Roteiro**
A. Requisito de Desempenho
A1. Analise cenários do modelo de uso de negócio com relação ao desempenho e especifique a seguinte tabela para cada condição de uso

|Fonte|Estimulo  |Artefato  |Ambiente  |Resposta  | Medida de Resposta |
|--|--|--|--|--|--|
|  |  |  |  |  |  |
|  |  |  |  |  |  |

Possíveis valores da tabela
**Fonte:** Quem origina o estimula- Interno, Externo ao sistema
**Estímulo:** Chegada de um evento que pode ser Periódico, esporádico ou estocástico 
**Artefato:** Sistema, ou um ou mais componentes do sistema
**Ambiente:** Modo de operação (normal, emergência, pico, sobrecarga)
**Resposta:** Processar eventos, alterar nível de serviço
**Medida de Resposta:** Latency, deadline. throughput, jitter, miss rate
Consultar capítulo 8.1 do livro BASS, Len; CLEMENTS, Paul; KAZMAN, Rick. Software architecture in practice. Addison-Wesley Professional, 2013.

B. Requisito de Segurança
B1. Analise cenários do modelo de uso de negócio com relação à segurança e especifique a seguinte tabela para cada condição de uso
|Fonte|Estimulo  |Artefato  |Ambiente  |Resposta  | Medida de Resposta |
|--|--|--|--|--|--|
|  |  |  |  |  |  |
|  |  |  |  |  |  |

Possíveis valores da tabela
**Fonte:** Pessoa ou outro sistema que pode ter sido previamente identificadas (ou corretamente ou incorretamente} ou pode ser desconhecido. Responsável pelo ataque pode ser interno ou externo a organização.
**Estímulo:** É feita uma tentativa não autorizada de exibir dados, alterar ou excluir dados, acessar serviços do sistema, alterar o comportamento do sistema ou reduzir a disponibilidade. 
**Artefato:** Serviços do sistema, dados dentro do sistema, um componente ou recursos do sistema, dados produzidos ou consumidos pelo sistema
**Ambiente:** O sistema está online ou offline; conectado ou desconectado de uma rede; possui firewall ou aberto em uma rede; totalmente operacional, parcialmente operacional ou não operacional.
**Resposta:** 
As transações são realizadas de maneira que
- Dados ou serviços são protegidos contra acesso não autorizado.
- Dados ou serviços não estão sendo manipulados sem autorização.
- As partes de uma transação são identificadas com segurança.
- As partes da transação não podem repudiar seu envolvimento.
- Os dados, recursos e serviços do sistema estarão disponíveis para uso legítimo.
O sistema rastreia atividades dentro dele,
- Acesso ou modificação de gravação
- Tentativas de gravação para acessar dados, recursos ou serviços
- Notificar entidades apropriadas (pessoas ou sistemas) quando um ataque aparente está ocorrendo
**Medida de Resposta:** Um ou mais dos seguintes:
- Quanto de um sistema é comprometido quando um componente ou valor de dados específico é comprometido
- Quanto tempo se passou antes que um ataque fosse detectado
- Quantos ataques foram resistidos
- Quanto tempo leva para se recuperar de um ataque bem-sucedido
- Quantos dados estão vulneráveis a um ataque específico
Consultar capítulo 9.1 do livro BASS, Len; CLEMENTS, Paul; KAZMAN, Rick. Software architecture in practice. Addison-Wesley Professional, 2013.



C. Tarifação
A1. Analise cenários do modelo de uso de negócio com relação à tarifação e especifique a seguinte tabela para cada condição de uso
|Fonte|Estimulo  |Artefato  |Ambiente  |Resposta  | Medida de Resposta |
|--|--|--|--|--|--|
|  |  |  |  |  |  |
|  |  |  |  |  |  |

Possíveis valores da tabela
**Fonte:** **Originador do Estimulo - quem ou o que aciona a função**
**Estímulo:** Chegada de um evento que pode ser tarifado ou não tarifado
**Artefato:** Sistema, ou um ou mais componentes do sistema, informação processada, armazenamento, volume de processamento,  velocidade de processamento
**Ambiente:** Operação tarifada Ou Operação não tarifada
**Resposta:** Baseada em Pagamento, Baseada em Produto, Baseada em dependente-uso,baseada na independência-uso, Baseada no serviço
**Medida de Resposta:** Valor fixo, valor mensal, valor por uso de recurso 

Use o artigo sobre formas de Tarifação “A Pricing Framework for Software-as-a-Service"

