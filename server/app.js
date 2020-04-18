const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const renderingEngine = require("./renderingEngine");
const app = express();



const corsOptions = {
    origin: 'http://localhost:3000'
  }

  
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/makeApplication',   async (req, res) =>  {
    const {componentName,applicationName,jsonData} = req.body;
    await renderingEngine(componentName,applicationName,jsonData)
    res.send(renderingEngine(componentName))
  })


module.exports = app;