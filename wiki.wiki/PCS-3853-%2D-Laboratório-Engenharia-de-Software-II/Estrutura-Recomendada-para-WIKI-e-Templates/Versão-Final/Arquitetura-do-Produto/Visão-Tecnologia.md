
**Tecnologias escolhidas:**


|**Módulo**|**Técnologia**|**Justificativa**|
|--|--|--|
| Tests Resolver | Rust (ou JS para o MVP) | Multiplataforma, confiabilidade |
| Rastreador de Eventos  | Rust (ou JS para o MVP) | Multiplataforma, confiabilidade  |
| Endpoints | NodeJS | Escalabilidade, agilidade de desenvolvimento, Simultaneidade (concurrency)|
| BD (Testes, eventos, estatisticas) | Postgress | Adaptabilidade, ACID (Atomicity, Consistency, Isolation, Durability) |
| Dashboard | ReactJS | Client-side rendering |
| Painel de testes | ReactJS | Client-side rendering |
| Engine de estatistica | Python | Agilidade de desenvolvimento |
| Pipeline de ML | Airflow, Pandas | Completude das bibliotecas, OpenSource, Escalabilidade, Monitoramento |
| Autenticação | Bibliotecas open-source do nodeJS | Soluções já testadas no mundo real. Oferecem maior agilidade no desenvolvimento e maior confiabilidade |
| Cache | Redis | Rápido |



Teremos diferentes interações:

- Tests Resolver <-> Backend (DB) de testes (read-only?)
- Rastreador de Eventos <-> Backend (DB) de Eventos (write-only)
- Dashboard <-> Backend de estatistica (read-only)
- Painel de testes <-> Backend de testes (read and write)
- Engine de estatistica <-> Backend de Eventos e de Testes (read) backend de estatística 
- Todos os backends precisam de métodos de autenticação (LGPD)
- Cache no backend de estatistica e de testes