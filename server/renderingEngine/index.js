const createApp = require("./createApp");

const renderingEngine = async (applicationName) => {
    const mes = await createApp(applicationName)
    return mes
}

module.exports = renderingEngine;