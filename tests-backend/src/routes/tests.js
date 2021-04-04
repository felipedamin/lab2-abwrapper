var express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/tests');
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

router.get('/', db.getAllTests);
router.get('/now', db.getNow);
router.get('/:id', db.getTestById);
router.get('/:name/user/:id', db.getTestGroupForUser);
router.post('/new-test', db.registerNewTest);

module.exports = router;
