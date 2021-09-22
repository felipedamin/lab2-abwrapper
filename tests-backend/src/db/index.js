// https://node-postgres.com/guides/project-structure
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  database: 'postgres',
  password: '',
  host: '',
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