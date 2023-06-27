const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 5000

const mongoDB = require('./db')
mongoDB();

// frontend
app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Orgin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers","Orgin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.json())

app.use(cors())

app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/DisplayData'));
app.use('/api', require('./routes/OrderData'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
















// steps
// 1. index.js
// 2. db.js
// 2. modlels
// 2. router