// This is a consumer file

const lab3Module = require("./lab3Module");
const process = require("process");

// assuming terminal args as 'node .\lab3Consumer.js . js' where file extension is 'js'

const args = process.argv.slice(2)
const directoryName = args[0]
const fileExtension = args[1]

// checking directoryName and fileExtension in console
// console.log(directoryName)
// console.log(fileExtension)

// Calling the function 'filterFiles' imported from module 'lab3Module'
lab3Module.filterFiles(directoryName, fileExtension, (err,  list) => {
  if (err) {
    return console.log(err);
  }
  list.forEach((item) => {
    console.log(item);
  });
});
