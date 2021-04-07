 Tabela Visão Informação 


|Pool| Elemento do BPMN |Classificação| Nome Informação  |Descrição  |
|--|--|--|--|--|
|Designer|Design de componente|Entrada|Dados de usabilidade|Métricas de uso dos componentes da aplicação testada|
|Designer|Design de componente|Saída|Decisão de melhora em design| Decisão de melhora do design do componente baseada nas métricas |
|Designer|Pedir para desenvolvedor implementar|Saída|Ticket para implementação|Especificação do componente ou da alteração que se deseja implementar|
|Designer|Ativar/Desativar flag|Saída|Flag|Sinal indicando se o componente deve ser colocado ou não sob teste A/B|
|Designer|Validar hipóteses|Saída|Hipóteses validadas|Documento indicando se e quais hipóteses foram validadas.|
|BI|Analisar dados e gerar report|Entrada|Resultados teste A/B|Métricas para cada versão do componente por população, região, cohort e outras possíveis variáveis|
|BI|Analisar dados e gerar report|Entrada|Variáveis externas|Dados e informações em posse da empresa que não são diretamente relacionadas ao teste A/B efetuado. Serão usadas como suporte na análise e na criação do relatório.|
|Desenvolvedor|Desenvolver componente|Saída|Ticket fechado|Ticket fechado indicando que o componente já está implementado e portanto pronto para teste.|
|Desenvolvedor|Definir no banco de dados quais users recebem qual componente|Entrada|Divisão estruturada|Definição estruturada de quais usuários receberão os componentes|
|Desenvolvedor|Definir no banco de dados quais users recebem qual componente|Saída|Mappings para usuários|Mappings definindo qual componente um usuário deve visualizar baseado em suas características.|
|PM/PO|Decidir produto final|Saída|Especificação produto final|Especificação detalhada de qual deve ser o produto final, se houver um (pode não haver, com o feedback sendo indicado no diagrama BPMN).|
|PM/PO|Reespecificação|Saída|Reespecificação do design|Reespecificação do design do componente a ser rediscutida com o designer.|
| |||||

Tabela de Informação Classificada em níveis corporativos (operacional, gerencial e estratégico)

|Operacional| Gerencial  | Estratégico  |
|--|--|--|
| Dados de usabilidade | Hipóteses validadas | 	Especificação produto final |
| Decisão de melhora em design | Resultados teste A/B | Informação F |
| Ticket para implementação | Variáveis externas| Reespecificação do design | 
| Ticket fechado | |  | |
| Mappings para usuários | |  | |
| Ativar/Desativar flag | |  | |
