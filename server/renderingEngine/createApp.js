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

        // Delete App fillies
        await new Promise((resolve, reject) => {
          exec(
            `rm App.css App.js App.test.js`,
            { cwd: `${filePath}` },
            (error, stdout, stderr) => {
              if (error) {
                console.warn(error);
              }
              resolve(stdout ? stdout : stderr);
            }
          );
        });

        // Add Prettier package to package.json
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

        // Add Prettier config
        await new Promise((resolve, reject) => {
          fs.writeFile(
            `${path}/.prettierignore`,
            `
            # Ignore artifacts:
            build
            coverage
            
            # Ignore all HTML files:
            *.html
            `,
            (err) => {
              if (err) throw err;
              console.log("Component.jsx Created");
              resolve("Saved");
            }
          );
        });

        // Add Prettier ignore
        await new Promise((resolve, reject) => {
          fs.writeFile(
            `${path}/.prettierrc.js`,
            `
            module.exports = {
              trailingComma: "es5",
              tabWidth: 4,
              semi: false,
              singleQuote: true,
            };
            `,
            (err) => {
              if (err) throw err;
              console.log("Component.jsx Created");
              resolve("Saved");
            }
          );
        });

        // Add Prettier script to package.json
        // Add Test script to package.json
        await new Promise(async (resolve, reject) => {
          await fs.readFile(`${path}/package.json`, (error, file) => {
            console.log("error", error);
            console.log("file", file);
            const jsonFileObject = JSON.parse(file);
            jsonFileObject.scripts["pretty"] =
              'prettier --write "./**/*.{jsx,scss,js}"';
            jsonFileObject.scripts["testC"] =
              "npm test ----coverage --watchAll=false";

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

        // TO DO: Configure Story book
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

        // TO DO: Add Docker File
        // TO DO: Add Docker Compose File
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
