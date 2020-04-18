import fs from "fs";
import component from "./component.mjs";
import componentSettings from "./componentSettings.mjs";
import styles from "./styles.mjs";
// run node cliBuild.mjs  testing2

const handleError = (err) => {
  if (err) throw err;
  console.log("Saved!");
};

const capitalizeWord = (word) => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toUpperCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const makeDirectory = (name, component, componentSettings, styles, index) => {
  const path = `./${name}`;
  fs.mkdirSync(path, { recursive: true });
  fs.appendFile(`${path}/${name}.jsx`, `${component}`, handleError);
  fs.appendFile(
    `${path}/${name}Settings.jsx`,
    `${componentSettings}`,
    handleError
  );
  fs.appendFile(`${path}/${name}.scss`, `${styles}`, handleError);
  fs.appendFile(`${path}/index.js`, `${index}`, handleError);
};

const cli = process.argv[2];
const input = capitalizeWord(cli);

const displayIndex = `
import  ${input} from "./${input}";
export default ${input};
`;
const displayComponent = component(input);
const displayComponentSettings = componentSettings(input);
const displayStyles = styles();

makeDirectory(
  input,
  displayComponent,
  displayComponentSettings,
  displayStyles,
  displayIndex
);
