const fs = require("fs");
const { exec } = require("child_process");

const restructureApp = ({ applicationName }) => {
  const path = `../../../${applicationName}/src`;
  console.log("Restructuring App Start");

  return new Promise(async (resolve, reject) => {
    try {
      await new Promise((resolve, reject) => {
        try {
          fs.mkdirSync(path, { recursive: true });
        } catch (error) {
          resolve(error);
        }
        console.log("Component Directiory Created");
        resolve("Saved");
      });

      await new Promise((resolve, reject) => {
        fs.writeFile(
          `${path}/${componentName}.jsx`,
          `${displayComponent}`,
          (err) => {
            if (err) throw err;
            console.log("Component.jsx Created");
            resolve("Saved");
          }
        );
      });

      await new Promise((resolve, reject) => {
        fs.writeFile(
          `${path}/${componentName}.scss`,
          `${displayStyles}`,
          (err) => {
            if (err) throw err;
            console.log("Component.scss Created");
            resolve("Saved!");
          }
        );
      });

      await new Promise((resolve, reject) => {
        fs.writeFile(`${path}/index.js`, `${displayIndex}`, (err) => {
          if (err) throw err;
          console.log("index.js created");
          resolve("Saved!");
        });
      });
    } catch (error) {
      resolve(error);
    }
    resolve("Component Created");
  });
  // return new Promise((resolve, reject) => {
  //   exec(`npx create-react-app ${path}`, (error, stdout, stderr) => {
  //     if (error) {
  //       console.warn(error);
  //     }
  //     resolve(stdout ? stdout : stderr);
  //   });
  // });
};

module.exports = restructureApp;
