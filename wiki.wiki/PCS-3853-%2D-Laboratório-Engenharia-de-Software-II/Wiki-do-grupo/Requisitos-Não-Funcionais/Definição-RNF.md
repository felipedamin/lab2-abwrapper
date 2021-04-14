# Requisitos Não Funcionais

## Performance
A performance do sistema é um requisito não funcional extremamente importante para a experiência do usuário. Um sistema que possa prover tempos pequenos de resposta não apenas melhora a sua usabilidade, mas também o torna mais “agradável” de ser usado. Para definir os nossos requisitos não funcionais, iremos utilizar a abordagem de caixa preta, isto é, não é necessário ter conhecimento interno do sistema. Consideramos que existe uma entrada, que gera uma saída esperada, e nesse fluxo, podemos analisar certos fatores e métricas do comportamento do sistema.

<img src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/05/Non-functional-testing.jpg">

Figura ilustrando a abordagem caixa preta.

Portanto, no quesito performance, queremos garantir as seguintes métricas, que consideramos importantes para o funcionamento de nossa plataforma:

- Tempo de resposta: Quanto tempo a página do usuário demora para carregar no navegador; quanto tempo os gráficos e os dados no dashboard demoram para serem apresentados; quando novos testes são adicionados, quanto tempo eles levarão para aparecer no dashboard.
- Fluxo máximo de informação: Quantas transações podem ser executadas simultaneamente no nosso sistema.
- Ambiente de produção: O comportamento no sistema no ambiente de produção deve ser o mesmo que no ambiente de desenvolvimento e teste.
- Tempo de processamento: Tempo de cálculo das agregações e cáculos estatísticos no backend de estatística deve ser suficiente baixo para garantir a sincronia dos dados mostrados para o usuário, de uma forma geral, melhorar sua experiência.
- Interoperabilidade: Verificar que o nosso sistema interage bem com as aplicações que ele vai testar.
- ETL: Tempo de execução das ETLs contidas no nosso banco de dados. Extração das métricas de site da aplicação testada, cálculo das aggregações e disponibilidade dos resultados.

> Jakob Nielsen back in 1993 outlined 3 main metrics for response time. While this outline may seem ancient, the metrics are still meaningful as they are generally based on the way human attention works:

> * 0.1 second – the limit after which the system reaction doesn’t seem instantaneous;
> * 1 second – when user will notice the delay, but without interrupted flow of thought;
> * 10 seconds – when user attention is completely lost.


## Segurança

Esse requisito não funcional garante que todos os dados dentro do sistema estarão protegidos contra ataques ou acessos não autorizados. Para isso, cada parte dos requisitos não funcionais de segurança pode ser traduzida em contrapartes de requisitos funcionais e concretos, isto é: telas de login, definição de tipos de usuários e de como ocorre o fluxo de informações no sistema.

## Escalabilidade

A escalabidade permeia os grandes grupos de requisitos não funionais citados anteriormente. É necessário garantir a performance da nossa aplicação quando tivermos um enorme fluxo de usuários, e portanto, de dados. Isso inclui: continuar garantindo os tempos de resposta, os tempos de cálculo, processamento etc. Além disso, deve garantir, nessas condições, que o sistema continue garantindo os requisitos não funcionais em situações extremas.
