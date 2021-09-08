
|O que| Entrega |
|--|--|
| Qual foi o resultado da atividade (produtos gerados)? |Wrapper para o site do cliente|
| Poste aqui o resultado da sua contribuição nesta atividade |Wrapper busca os testes em um micro serviço e faz o tracking de eventos com o outro micro serviço. É necessario que ele seja de um uso extremamente fácil, para que tenha adesão de novos clientes|

O wrapper possui apenas duas funções que serão usadas pelo cliente - .init() e .track() - A init se encarrega de toda a logica de buscar os testes, salvar as informaçoes, atribuir um identificador ao usuário do website. A track() usa as informaçoes salvas pela init e recebe o nome do evento como parametro, e assim faz o tracking de maneira facil e completa.

 