const fs = require("fs");
const { exec } = require("child_process");

const createApp = (applicationName) => {
  const path = `../../../${applicationName}`;
  const filePath = `../../../${applicationName}/src`;
  console.log("Make Application Start");
  if (!fs.existsSync(path)) {
    return new Promise(async (resolve, reject) => {
      try {
        // Make App
        await new Promise((resolve, reject) => {
          exec(`npx create-react-app ${path}`, (error, stdout, stderr) => {
            if (error) {
              console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
          });
        });

        // TO DO: Add Pritter packege to package.json
        await new Promise((resolve, reject) => {
          exec(
            `npm install --save-dev --save-exact prettier`,
            (error, stdout, stderr) => {
              if (error) {
                console.warn(error);
              }
              resolve(stdout ? stdout : stderr);
            }
          );
        });
        // TO DO: Add Pritter script to package.json
        //

        // TO DO: Add storybook
        // TO DO: Make sure it is installing it in the right directory
        //
        await new Promise((resolve, reject) => {
          exec(`npx -p @storybook/cli sb init`, (error, stdout, stderr) => {
            if (error) {
              console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
          });
        });

        // Make Component Folder
        await new Promise((resolve, reject) => {
          try {
            fs.mkdirSync(`${filePath}/components`, { recursive: true });
          } catch (error) {
            resolve(error);
          }
          console.log("Component Directory Created");
          resolve("Saved");
        });

        // Make Cli Folder
        await new Promise((resolve, reject) => {
          try {
            fs.mkdirSync(`${path}/cli`, { recursive: true });
          } catch (error) {
            resolve(error);
          }
          console.log("Component Directory Created");
          resolve("Saved");
        });

        // TO DO: Add All CLI Files
        //
        //

        // To Do: Make a dynamic index file generator
        // Make Component Index File
        await new Promise((resolve, reject) => {
          fs.writeFile(
            `${filePath}/components/index.js`,
            `${displayIndex}`,
            (err) => {
              if (err) throw err;
              console.log("Component index.js created");
              resolve("Saved!");
            }
          );
        });

        // Make Pages Folder
        await new Promise((resolve, reject) => {
          try {
            fs.mkdirSync(`${filePath}/pages`, { recursive: true });
          } catch (error) {
            resolve(error);
          }
          console.log("Component Directory Created");
          resolve("Saved");
        });

        // To Do: Make a dynamic index file generator
        // Make Pages Index File
        await new Promise((resolve, reject) => {
          fs.writeFile(
            `${filePath}/pages/index.js`,
            `${displayIndex}`,
            (err) => {
              if (err) throw err;
              console.log("Pages index.js created");
              resolve("Saved!");
            }
          );
        });

        // To Do: Make a dynamic App file generator
        // Rewrite App file
        await new Promise((resolve, reject) => {
          fs.writeFile(`${filePath}/App.jsx`, `${displayComponent}`, (err) => {
            if (err) throw err;
            console.log("Component.jsx Created");
            resolve("Saved");
          });
        });
        // To Do: Make a dynamic App file generator
        // Rewrite App file
        await new Promise((resolve, reject) => {
          fs.writeFile(`${filePath}/App.jsx`, `${displayComponent}`, (err) => {
            if (err) throw err;
            console.log("Component.jsx Created");
            resolve("Saved");
          });
        });

        // To Do: Make a dynamic App file generator
        // Make App.jsx file
        await new Promise((resolve, reject) => {
          fs.writeFile(`${filePath}/App.jsx`, `${displayComponent}`, (err) => {
            if (err) throw err;
            console.log("Component.jsx Created");
            resolve("Saved");
          });
        });

        // To Do: Make a dynamic Scss file generator
        // Make App.scss file
        await new Promise((resolve, reject) => {
          fs.writeFile(`${filePath}/App.scss`, `${displayComponent}`, (err) => {
            if (err) throw err;
            console.log("Component.jsx Created");
            resolve("Saved");
          });
        });

        // TO DO: Run pritterer command
        // Run pritterer command
        await new Promise((resolve, reject) => {
          exec(`npm run pretty`, (error, stdout, stderr) => {
            if (error) {
              console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
          });
        });
      } catch (error) {
        resolve(error);
      }
      resolve("App Created");
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("Application already exists");
    });
  }
};

module.exports = createApp;
