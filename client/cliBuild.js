const fs = require('fs');


const handleError = (err) => {
    if (err) throw err;
    console.log('Saved!');
}


const capitalizeWord = (word) =>{
 const newWord = word.split("");
 const firstLetter= newWord[0].toUpperCase();
 newWord.splice(0,1,firstLetter)
 return newWord.join("")
}

const makeDirectory = (name,component,componentSettings,styles,index) => {
    const path = `./${name}`;
    fs.mkdirSync(path, { recursive: true });
    // if(!fs.existsSync(path)) {
    //     fs.mkdirSync(path)
    // };

    fs.appendFile( `${path}/${name}.jsx`, `${component}`, handleError);
    fs.appendFile( `${path}/${name}Settings.jsx`, `${componentSettings}`, handleError);
    fs.appendFile( `${path}/${name}.scss`, `${styles}`, handleError);
    fs.appendFile( `${path}/index.js`, `${index}`, handleError);
}

const cli = process.argv[2]
const input = capitalizeWord(cli)


const component = `
${input}
`

const componentSettings = `
${input}
`

const styles = `
${input}
`

const index = `
import  ${input}
`

// console.log(input)
// process.argv.forEach((val, index) => {
// console.log(process.argv);
  // console.log(`${index}: ${val}`);
// });


makeDirectory(input,component,componentSettings,styles,index)

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`Name of the dry component`, name => {
//     makeDirectory(name)
//     readline.close()
//   })