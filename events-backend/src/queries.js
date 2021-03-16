// EXAMPLE FROM: https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  database: 'postgres',
  password: 'database-projetochave',
  host: 'projetochave.c4vuzhkd82sl.sa-east-1.rds.amazonaws.com',
  port: 5432,
  idleTimeoutMillis: 30000,
  //idleTimeoutMillis: 0,
  connectionTimeoutMillis: 30000,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

/**
 * EXAMPLES OF QUERIES
 */

// GET
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(500).json(error);
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// GET
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// POST
const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

// PUT
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

// DELETE
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}