Neste documento, iremos especificar os cenários de teste projetados para testar os requisitos funcionais de nosso produto. Os testes são planejados de forma a garantir que os requisitos não funcionais serão atendidos na étapa de pós-desenvolvimento, quando o produto estiver em produção.

# Segurança 

Fizemos testes com postman, sem aplicar um token de usuário/aplicando um token inválido e os requests foram negados, validando a necessidade de autenticação.

Apenas o BackEnd criado interage com o banco de dados, evitando queries inválidas ou maliciosas.

Além disso, cada FrontEnd é específico para uma empresa, e separado por role de usuário, dessa maneira compartimentalizando corretamente as informações a serem exibidas.

# Usabilidade

De acordo com a ISO 25010, analisamos os seguintes fatores:
- Capacidade de reconhecimento da adequação
- Facilidade de aprendizado
- Operabilidade
- Proteção contra erro do usuário
- Estética da interface de usuário
- Acessibilidade

Fizemos algumas pesquisas com membros das famílias acerca dos pontos levantados anteriormente

Utilizamos Frameworks e templates que seguem as melhores práticas de usabilidade do mercado.

# Disponibilidade e Escalabilidade

Utilizamos o RDS da AWS garantindo uma ótima disponibilidade, escalabilidade automática, confiabilidade, coerência, consistência e persistência.

O algoritmo suporta um volume muito grande de dados e tem um tempo de resposta quase tão bom quanto se tivesse um volume pequeno de dados. Para isso utilizamos procedures e otimizamos queries, evitando loops.