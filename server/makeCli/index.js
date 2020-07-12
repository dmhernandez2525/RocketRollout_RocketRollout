const fs = require("fs");
const { exec } = require("child_process");

const makeCli = (applicationName) => {
  const path = `../../../${applicationName}`;
  const filePath = `../../../${applicationName}/src`;

  return new Promise(async (resolve, reject) => {
    try {
      // Add cliBuild.mjs
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/cliBuild.mjs`, (error, file) => {
          fs.writeFile(`${path}/cli/cliBuild.mjs`, file.toString(), (err) => {
            if (err) throw err;
            console.log("cliBuild.mjs Created");
            resolve("Saved");
          });
        });
      });
      // Add componentStory.mjs
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/componentStory.mjs`, (error, file) => {
          fs.writeFile(
            `${path}/cli/componentStory.mjs`,
            file.toString(),
            (err) => {
              if (err) throw err;
              console.log("componentStory.mjs Created");
              resolve("Saved");
            }
          );
        });
      });
      // Add component.mjs
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/component.mjs`, (error, file) => {
          fs.writeFile(`${path}/cli/component.mjs`, file.toString(), (err) => {
            if (err) throw err;
            console.log("component.mjs Created");
            resolve("Saved");
          });
        });
      });
      // Add componentTest.mjs
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/componentTest.mjs`, (error, file) => {
          fs.writeFile(
            `${path}/cli/componentTest.mjs`,
            file.toString(),
            (err) => {
              if (err) throw err;
              console.log("componentTest.mjs Created");
              resolve("Saved");
            }
          );
        });
      });
      // Add componentPropTable.mjs
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/componentPropTable.mjs`, (error, file) => {
          fs.writeFile(
            `${path}/cli/componentPropTable.mjs`,
            file.toString(),
            (err) => {
              if (err) throw err;
              console.log("componentPropTable.mjs Created");
              resolve("Saved");
            }
          );
        });
      });
      // Add format.js
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/format.js`, (error, file) => {
          fs.writeFile(`${path}/cli/format.js`, file.toString(), (err) => {
            if (err) throw err;
            console.log("format.js Created");
            resolve("Saved");
          });
        });
      });
      // Add componentPropTableTemplate.md
      new Promise(async (resolve, reject) => {
        await fs.readFile(
          `./makeCli/componentPropTableTemplate.md`,
          (error, file) => {
            fs.writeFile(
              `${path}/cli/componentPropTableTemplate.md`,
              file.toString(),
              (err) => {
                if (err) throw err;
                console.log("componentPropTableTemplate.md Created");
                resolve("Saved");
              }
            );
          }
        );
      });
      // Add index.js
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/index.js`, (error, file) => {
          fs.writeFile(`${path}/cli/index.js`, file.toString(), (err) => {
            if (err) throw err;
            console.log("index.js Created");
            resolve("Saved");
          });
        });
      });
      // Add componentReadme.mjs
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/componentReadme.mjs`, (error, file) => {
          fs.writeFile(
            `${path}/cli/componentReadme.mjs`,
            file.toString(),
            (err) => {
              if (err) throw err;
              console.log("componentReadme.mjs Created");
              resolve("Saved");
            }
          );
        });
      });
      // Add styles.mjs
      new Promise(async (resolve, reject) => {
        await fs.readFile(`./makeCli/styles.mjs`, (error, file) => {
          fs.writeFile(`${path}/cli/styles.mjs`, file.toString(), (err) => {
            if (err) throw err;
            console.log("styles.mjs Created");
            resolve("Saved");
          });
        });
      });
      // Add componentReadmeTemplate.md
      new Promise(async (resolve, reject) => {
        await fs.readFile(
          `./makeCli/componentReadmeTemplate.md`,
          (error, file) => {
            fs.writeFile(
              `${path}/cli/componentReadmeTemplate.md`,
              file.toString(),
              (err) => {
                if (err) throw err;
                console.log("componentReadmeTemplate.md Created");
                resolve("Saved");
              }
            );
          }
        );
      });
    } catch (error) {
      resolve(error);
    }

    resolve("App Created");
  });
};
module.exports = makeCli;
