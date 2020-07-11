const fs = require("fs");
const { exec } = require("child_process");

const createApp = (applicationName) => {
  const path = `../../../${applicationName}`;
  const filePath = `../../../${applicationName}/src`;
  const displayIndex = ({ componentName }) => {
    return `
        import  ${componentName} from "./${componentName}";
        export default ${componentName};
        `;
  };
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

        // TO DO: Add Prettier package to package.json
        await new Promise((resolve, reject) => {
          exec(
            `npm install prettier`,
            { cwd: `${path}` },
            (error, stdout, stderr) => {
              if (error) {
                console.warn(error);
              }
              resolve(stdout ? stdout : stderr);
            }
          );
        });

        // TO DO: Add Prettier config
        // TO DO: Add Prettier ignore

        // TO DO: Add Prettier script to package.json
        await new Promise(async (resolve, reject) => {
          await fs.readFile(`${path}/package.json`, (error, file) => {
            console.log("error", error);
            console.log("file", file);
            const jsonFileObject = JSON.parse(file);
            jsonFileObject.scripts["pretty"] =
              'prettier --write "./**/*.{jsx,scss,js}"';

            fs.writeFile(
              `${path}/package.json`,
              JSON.stringify(jsonFileObject),
              (err) => {
                if (err) throw err;
                console.log("Added Prettier to package.json");
                resolve("Saved!");
              }
            );
          });

          console.log("Added Prettier to package.json");
          resolve("Saved!");
        });

        // TO DO: Add storybook
        // TO DO: Make sure it is installing it in the right directory
        //
        await new Promise((resolve, reject) => {
          exec(
            `npx -p @storybook/cli sb init`,
            { cwd: `${path}` },
            (error, stdout, stderr) => {
              if (error) {
                console.warn(error);
              }
              resolve(stdout ? stdout : stderr);
            }
          );
        });
        console.log("Add storybook Done");

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
            `${displayIndex("components")}`,
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
            `${displayIndex("Pages")}`,
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
          fs.writeFile(
            `${filePath}/App.jsx`,
            `${displayIndex("Pages")}`,
            (err) => {
              if (err) throw err;
              console.log("Component.jsx Created");
              resolve("Saved");
            }
          );
        });

        // To Do: Make a dynamic Scss file generator
        // Make App.scss file
        await new Promise((resolve, reject) => {
          fs.writeFile(`${filePath}/App.scss`, ``, (err) => {
            if (err) throw err;
            console.log("Component.jsx Created");
            resolve("Saved");
          });
        });

        // TO DO: Run Prettier command
        // Run Prettier command

        await new Promise((resolve, reject) => {
          exec(
            `npm run pretty`,
            { cwd: `${path}` },
            (error, stdout, stderr) => {
              if (error) {
                console.warn(error);
              }
              resolve(stdout ? stdout : stderr);
            }
          );
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
