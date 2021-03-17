var express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/events');
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

router.get('/', db.getAllEvents)
router.get('/now', db.getNow)
router.get('/:id', db.getEventById)
router.post('/register', db.registerEvent)

module.exports = router;
