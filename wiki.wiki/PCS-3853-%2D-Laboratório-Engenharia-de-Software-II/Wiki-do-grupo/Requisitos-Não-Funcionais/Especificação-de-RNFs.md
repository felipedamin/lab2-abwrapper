**Aplicação: UX-Panel**
 
**UX-Panel(FE): RNF de Usabilidade**

Usabilidade é o RNF que mede se o sistema está pronto para ser utilizado pelo usuário, possuir uma interface consistente e intuitiva, são algumas das características que o sistema deve ter.

**Micro-serviço de testes(BE): RNF de Segurança**

Segurança deve garantir que o sistema não pode ser acessado por quem não possui acesso, o micro serviço deve realizar uma separação por empresas e deve apenas permitir o acesso por pessoas autorizadas.  

------------------------------
**Aplicação: Componentes da dashboard**

**Dashboard(FE): RNF de Baixa Latência**

O aplicativo deve executar rapidamente promovendo uma sensação de agilidade ao usuário.

**Dashboard(FE) e Micro-serviço de estatística(BE): Escalabilidade de features**

O aplicativo deve ser desenvolvido de uma forma flexível para ter espaço para crescer e ganhar novas features de forma organizada e escalável.

**Micro-serviço de estatística(BE): Escalabilidade de dados**

O aplicativo deve suportar analisar um volume muito grande de dados e ter um tempo de resposta quase tão bom quanto se ele estivesse analisando um volume pequeno de dados.

------------------------------
**Aplicação: AB-Wrapper**
 
**AB-Wrapper: RNF de Usabilidade**

Usabilidade é o RNF que mede se o sistema está pronto para ser utilizado pelo usuário, possuir uma interface que seja fácil e intuitiva para uso de programadores.

------------------------------
**Aplicação: Micro-serviço de Eventos**

**Micro-serviço de Eventos(BE): RNF de Segurança**

Segurança deve garantir que o sistema não pode ser acessado por quem não possui acesso, o micro serviço deve realizar uma separação por empresas e deve apenas permitir o acesso por pessoas autorizadas.  

**Micro-serviço de Eventos(BE): Disponibilidade**

O aplicativo deve suportar receber um volume muito alto de requisições e conseguir escrever no BD sem que haja perda de informação.

------------------------------
**Aplicação: Visualização de dados e Analytics**

**Dashboard(FE): RNF de Baixa Latência**
As visualizações devem estar sempre atualizadas e sincronizadas com os dados brutos de eventos. Além disso, o tempo de resposta deve ser pequeno para que a experiência do usuário seja satisfatória.

**Dashboard(FE) e Micro-serviço de estatística(BE): Escalabilidade de features**

O FE deve permitir um desenvolvimento flexível e escalável, onde haja espaço para adição de novas features de forma organizada e fácil. No BE de estatística, os processamentos de dados e agregações devem ser optmizados para permitir a disponibilidade dos dados, mas também deve ser geral o suficiente para permitir a criação de novos insights no dashboard.

**Micro-serviço de estatística(BE): Escalabilidade de dados**

O aplicativo deve suportar analisar um volume muito grande de dados e ter um tempo de resposta quase tão bom quanto se ele estivesse analisando um volume pequeno de dados.

O BE de estatística deve suportar receber uma enorme quantidade de dados brutos, processá-los num tempo hábil e garantir que os dados agregados estejam sempre disponíveis para o FE. Para garantir esse requisito funcional, foram criadas procedures optmizadas que são executadas periodicamente no bnaco de dados RDS PostgreSQL para disponibilizar agregações intermediárias.
