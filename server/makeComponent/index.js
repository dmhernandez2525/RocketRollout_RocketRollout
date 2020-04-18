
const fs = require("fs");
const component = require("./component.js");
const styles = require("./styles.js");

const capitalizeWord = (word) => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toUpperCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const handleError = (err) => {
    if (err) throw err;
    console.log("Saved!");
  };

const makeDirectory = ( applicationName, componentName, displayComponent, displayStyles, displayIndex, jsonData) => {

  const path = `../../../${applicationName}/src/components/${componentName}`;
  fs.mkdirSync(path, { recursive: true });
  fs.writeFile(`${path}/${componentName}.jsx`, `${displayComponent}`, handleError);
  fs.writeFile(`${path}/${componentName}.scss`, `${displayStyles}`, handleError);
  fs.writeFile(`${path}/index.js`, `${displayIndex}`, handleError);

};

const makeComponent =(componentName,applicationName,jsonData) =>{

    const componentname = capitalizeWord(componentName);

    const displayIndex = `
    import  ${componentname} from "./${componentname}";
    export default ${componentname};
    `;
    const displayComponent = component(componentname);
    const displayStyles = styles();

    makeDirectory(
    applicationName,
    componentname,
    displayComponent,
    displayStyles,
    displayIndex,
    jsonData
);
    return "asdf"
};

module.exports = makeComponent;