const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const renderingEngine = require("./renderingEngine");
const makeComponent = require("./makeComponent");
const app = express();



const corsOptions = {
    origin: 'http://localhost:3000'
  }

  
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/makeApplication',   async (req, res) =>  {
    const {applicationName} = req.body;
    const mes = await renderingEngine(applicationName)
    console.log(mes)
    console.log("done")
    res.send(mes)
  })

app.post('/makeComponent', async (req, res) =>  {
    const {componentName,jsonData} = req.body;
    const mes = await makeComponent(componentName,jsonData)
    console.log(mes)
    res.send(mes)
  })


module.exports = app;