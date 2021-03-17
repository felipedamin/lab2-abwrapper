const express = require('express')
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var eventsRouter = require('./src/routes/events');

const app = express()
const port = 3001

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;