const express = require('express')
var cors = require('cors')
var testsRouter = require('./src/routes/tests');

const app = express()
app.use(cors())
const port = 3002

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/', function(req, res) {
  res.send('index page');
});

app.use('/customertests', testsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;