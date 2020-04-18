const fs = require("fs");
const component = require("./component.js");
const styles = require("./styles.js");

const capitalizeWord = (word) => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toUpperCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const makeDirectory = (
  applicationName,
  componentName,
  displayComponent,
  displayStyles,
  displayIndex,
  jsonData
) => {
  console.log("Make Component Start");
  const path = `../../../${applicationName}/src/components/${componentName}`;

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
};

const makeComponent = async (componentName, applicationName, jsonData) => {
  const componentname = capitalizeWord(componentName);

  const displayIndex = `
    import  ${componentname} from "./${componentname}";
    export default ${componentname};
    `;
  const displayComponent = component(componentname);
  const displayStyles = styles();

  const message = await makeDirectory(
    applicationName,
    componentname,
    displayComponent,
    displayStyles,
    displayIndex,
    jsonData
  );
  return message;
};

module.exports = makeComponent;
