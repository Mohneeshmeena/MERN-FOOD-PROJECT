const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");
const mongoDB = require("./db1")
mongoDB;

app.use(cors());

app.use(express.json());

app.use('/api', require("./Routes/createuser"));

app.use('/food', require("./Routes/DisplayData"));

app.use('/api', require("./Routes/OrderData"));




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})