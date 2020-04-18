const fs = require("fs")
const { exec } = require('child_process');


const createApp = async (applicationName) => {
    const path = `../../../${applicationName}`
    console.log("start")
    if (!fs.existsSync(path)) {

        await exec(`npx create-react-app ${path}` , (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        });
    }

    console.log("end")
};

module.exports = createApp;