// Buscar tudo que esta no banco de dados de eventos e salva em uma tabela as somas, médias, total
// Ler o banco de dados de eventos e ver quantos tem de cada tipo, desses quantos são grupo a quantos são grupo b, fazer estatisticas
// Salvar em outra tabela do db
// Fornecer para a dashboard esses dados
// get events if id grater the, para evitar pegar todos os eventos sempre

const db = require('../db');

const getAllEventsByName = (request, response) => {
    const name = request.params.name;

    const allEvents = db.query('SELECT * FROM events WHERE event_name = $1 ORDER BY id ASC', [name], (error, results) => {
        if (error) {
          response.status(500).json(error);
          throw error
        }
        response.status(200).json(results.rows);
      });
}

module.exports = {
    getAllEventsByName,
}