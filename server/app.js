const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const renderingEngine = require("./renderingEngine");
const makeComponent = require("./makeComponent");
const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.post("/makeApplication", async (req, res) => {
  const { applicationName } = req.body;
  const mes = await renderingEngine(applicationName);
  console.log(mes);
  console.log("Make Application Done");
  res.send(mes);
});

app.post("/makeComponent", async (req, res) => {
  const { componentName, applicationName, jsonData } = req.body;
  const mes = await makeComponent(componentName, applicationName, jsonData);
  console.log(mes);
  console.log("Make Component Done");
  res.send(mes);
});

module.exports = app;
