const db = require('.');
const utils = require('../utils');

// GET
const getNow = (request, response) => {
  now = new Date();
  response.status(200).json(now);
}

// GET
const getAllTests = (request, response) => {
  db.query('SELECT * FROM tests ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(500).json(error);
      throw error
    }
    response.status(200).json(results.rows);
  })
}

// GET
const getTestById = (request, response) => {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM tests WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
}

// GET
const getTestGroupForUser = (request, response) => {
  const userId = parseInt(request.params.id);
  const customerName = request.params.name;
  console.log(customerName);

  db.query('SELECT * FROM tests', (error, results) => {
    if (error) {
      throw error
    }

    // let filteredResults = results.rows;
    // let filteredResults = results.rows.filter((elem) => elem.attributes.userId == userId && elem.attributes.customerName == customerName);
    let filteredResults = results.rows.filter((elem) => {
      console.log(elem.attributes?.customer_name);
      return elem.attributes?.customer_name == customerName;
    })

    groupInt = utils.getRndInteger(0, 1)
    groupLetter = groupInt == 1 ? "A": "B";
    testResponse = {'testGroup': groupLetter, 'tests': filteredResults}
    // TODO: actually we should have a table to save/retrieve this, so the same user will always have the same group for a given test
    response.status(200).json(testResponse);
  })
}

// POST
const registerNewTest = (request, response) => {
  const { test_name, attributes } = request.body
  now = new Date();

  db.query('INSERT INTO tests (id, test_name, attributes, created_on) VALUES (DEFAULT, $1, $2, $3)', [test_name, attributes, now], (error, results) => {
    if (error) {
      throw error
    }
    console.log(`test added: ${test_name, attributes}`);
    response.status(201).send(`test added with ID: ${results.insertId}`);
  })
}

module.exports = {
  registerNewTest,
  getTestById,
  getNow,
  getAllTests,
  getTestGroupForUser,
}