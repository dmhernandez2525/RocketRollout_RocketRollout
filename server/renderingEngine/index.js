const createApp = require("./createApp");

const renderingEngine = async (componentName,applicationName,jsonData) => {
    const mes = await createApp(applicationName)
    return mes
}


module.exports = renderingEngine;