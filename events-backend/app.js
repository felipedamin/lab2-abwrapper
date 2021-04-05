const express = require('express')
var cors = require('cors')
var usersRouter = require('./src/routes/users');
var eventsRouter = require('./src/routes/events');
var statsRouter = require('./src/routes/stats');

const app = express()
app.use(cors())
const port = 3001

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/', function(req, res) {
  res.send('index page');
});

app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/stats', statsRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;