var express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/events');
const stats = require('../statistics/stats')
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
router.get('/:name', stats.getAllEventsByName)

module.exports = router;
