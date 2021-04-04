// https://node-postgres.com/guides/project-structure
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  database: 'postgres',
  password: 'database-projetochave',
  host: 'projetochave-db-2.cfgi7pik5oym.us-east-1.rds.amazonaws.com',
  port: 5432,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 30000,
})

module.exports = {
  query: (text, params, callback) => {
    try {
      return pool.query(text, params, callback);
    } catch(err) {
      console.log(err);
    }
  },
}