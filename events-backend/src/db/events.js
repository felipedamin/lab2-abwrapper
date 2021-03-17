const db = require('../db')

// GET
const getAllEvents = (request, response) => {
  db.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(500).json(error);
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// GET
const getNow = (request, response) => {
  now = new Date();
  response.status(200).json(now)
}

// GET
const getEventById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM events WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// POST
const registerEvent = (request, response) => {
  const { event_name, test_group, attributes } = request.body
  now = new Date();

  db.query('INSERT INTO events (event_name, test_group, attributes, time) VALUES ($1, $2, $3, $4)', [event_name, test_group, attributes, now], (error, results) => {
    if (error) {
      throw error
    }
    console.log(`event added: ${event_name, test_group, attributes}`)
    response.status(201).send(`Event added with ID: ${results.insertId}`)
  })
}

module.exports = {
  registerEvent,
  getEventById,
  getNow,
  getAllEvents,
}