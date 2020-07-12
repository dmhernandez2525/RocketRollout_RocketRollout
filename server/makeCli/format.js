const fs = require("fs");
const { exec } = require("child_process");

const format = (path) => {
  if (fs.existsSync(path)) {
    return new Promise((resolve, reject) => {
      exec(
        `prettier --write \"${path}/*.{jsx,scss,js,md}\" `,
        (error, stdout, stderr) => {
          if (error) {
            console.warn(error);
          }
          resolve(
            stdout
              ? `All Component files are Prettifyed!!! `
              : `${stderr} make sure that prettier is installed globally: npm install -g prettier`
          );
        }
      );
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("Component Dose Not Exist");
    });
  }
};

module.exports = format;
