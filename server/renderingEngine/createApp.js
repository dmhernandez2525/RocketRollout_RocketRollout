const fs = require("fs")
const { exec } = require('child_process');


const createApp = (applicationName) => {
    const path = `../../../${applicationName}`
    console.log("start")
    if (!fs.existsSync(path)) {
        return new Promise((resolve, reject) => {
            exec(`npx create-react-app ${path}`, (error, stdout, stderr) => {
            if (error) {
            console.warn(error);
            }
            resolve(stdout? stdout : stderr);
            });
        });
    }else{
        return new Promise((resolve, reject) => {
            resolve("Application already exists");
        });
    }

};

module.exports = createApp;