import fs from "fs";
import format from "./format.js";
import component from "./component.mjs";
import componentPropTable from "./componentPropTable.mjs";
import componentReadme from "./componentReadme.mjs";
import componentTest from "./componentTest.mjs";
import componentStory from "./componentStory.mjs";
import styles from "./styles.mjs";
// run node cliBuild.mjs  testing2

const handleError = err => {
  if (err) throw err;
};

const capitalizeWord = word => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toUpperCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const lowerCaseWord = word => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toLowerCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const makeDirectory = async (
  directory,
  parent,
  name,
  component,
  propTable,
  readme,
  test,
  story,
  styles,
  index
) => {
  const path = `../src/${directory}/${parent}/${name}`;

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
    try {
      fs.appendFile(`${path}/${name}.jsx`, `${component}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.jsx Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(
        `${path}/${name}.utils.js`,
        `const test = 1 
         module.exports = test;
         `,
        handleError
      );
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.utils.js Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}PropTable.md`, `${propTable}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.md Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/README.md`, `${readme}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`README.md Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}.test.js`, `${test}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.test.js Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}.stories.js`, `${story}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.stories.js Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}.scss`, `${styles}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.scss Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/index.js`, `${index}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log("index.js Created");
    resolve("Saved");
  });

  let mess = await format(path);
  console.log(mess);
};

let directory = process.argv[2];
let parent = process.argv[3];
let componentName = process.argv[4];

if (
  directory !== undefined &&
  parent !== undefined &&
  componentName !== undefined
) {
  //  we doint need to do any thing bc the user passed in 3 args
  if (directory === "A" || directory === "a") {
    directory = "Animations";
  } else {
    directory = "components";
  }
} else {
  componentName = directory;
  directory = "Components";
  parent = "Component";
}

const input = capitalizeWord(componentName);
const lowerCaseInput = lowerCaseWord(componentName);
const componentProps = {
  properties: {
    id: "",
    name: "",
    userTip: "",
    disable: false,
    className: "",
    errorMes: "",
    styles: null,
    passProps: null
  },
  events: { onClick: null, onChange: null, onBlur: null }
};

const displayIndex = `
import  ${input} from "./${input}";
export default ${input};
`;
const displayComponent = component(input, lowerCaseInput);
const displayComponentPropTable = componentPropTable(input, componentProps);
const displayComponentReadme = componentReadme(input, componentProps);

const displayComponentTest = componentTest(input, lowerCaseInput);

const displayComponentStory = componentStory(
  directory,
  parent,
  capitalizeWord(componentName),
  lowerCaseWord(componentName)
);
const displayStyles = styles(lowerCaseInput);

makeDirectory(
  directory,
  parent,
  capitalizeWord(componentName),
  displayComponent,
  displayComponentPropTable,
  displayComponentReadme,
  displayComponentTest,
  displayComponentStory,
  displayStyles,
  displayIndex
);
