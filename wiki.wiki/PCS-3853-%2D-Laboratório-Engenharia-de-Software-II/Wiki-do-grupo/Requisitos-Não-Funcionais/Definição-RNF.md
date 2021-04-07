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


## Segurança

## Escalabilidade
