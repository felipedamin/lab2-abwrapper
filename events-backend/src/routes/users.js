var express = require('express');
const bodyParser = require('body-parser');
const db = require('../queries');
var router = express.Router();

router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// router.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router;
