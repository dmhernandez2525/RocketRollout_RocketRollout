const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const corsOptions = {
    origin: 'http://localhost:3000'
  }

  
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/makeApplication',  (req, res) =>  {
    console.log("hey there")
    res.send('hi')
  })


module.exports = app;