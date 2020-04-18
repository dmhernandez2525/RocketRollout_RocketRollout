const createApp = require("./createApp");

const renderingEngine = (componentName,applicationName,jsonData) => {
    createApp(applicationName)
    return componentName
}


module.exports = renderingEngine;