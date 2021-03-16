var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tests', function(req, res) {
  res.send('index page');
});

router.post('/tests', function (req, res) {
  res.send('Got a POST request')
})

router.put('/tests/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

router.delete('/tests/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
