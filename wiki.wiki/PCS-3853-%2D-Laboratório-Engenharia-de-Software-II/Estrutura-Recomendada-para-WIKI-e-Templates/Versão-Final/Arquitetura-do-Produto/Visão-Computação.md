Tabela de Especificação dos Elemento de Processamento

|Elemento de Processamento| funções |Info. Saída | Info. Entrada| 
|--|--|--|--|
|Módulo resolvedor| Decidir o elemento a ser testado dentre os elementos pré selecionados | Elemento a ser testado | Numero de testes de cada elemento |
|Rastreador de eventos| Monitora e registra as interações do usuário final com os elementos que fazem parte do teste | Evento, cliques, conversões | Elementos a serem monitorados | 
|Analisador de resultados machine learning| Analisa os dados iniciais e filtra resultados irrelevantes | Dados pré-processados | Dados não processados |
|Dashboard| Apresentar de forma simples e intuitiva os resultados dos testes para facilitar a tomada de decisão | Dados pré-processados | Gráficos e tabelas |
|Gerenciador de elementos testados| Altera e cria as listas de elementos a serem testados | Elementos a serem testados | Elementos criados pelos designers |


Classificação dos elementos de processamento em níveis corporativos (operacional, Gerencial e estratégico)

|Operacional| Gerencial  | Estratégico  |
|--|--|--|
| Módulo resolvedor | Gerenciador de elementos testados | Dashboard |
| Rastreador de eventos |  |  |
| Analisador de resultados machine learning |  |  | 

Arquitetura em camadas

![Diagrama de pacotes LS II.png](/.attachments/Diagrama%20de%20pacotes%20LS%20II-190d1305-89a9-4e78-9c6f-3d5d7c091fbb.png)