const fs = require('fs');
const process = require("process");
const path = require('path')

// assuming terminal args as 'node .\app.js . js' where file extension is 'js'

const args = process.argv.slice(2)
const directoryName = args[0]
const fileExtension = args[1]

// checking directoryName and fileExtension in console
// console.log(directoryName)
// console.log(fileExtension)

const directoryPath = path.join(__dirname, directoryName)

// checking directoryPath in console
// console.log(directoryPath)

fs.readdir(directoryPath, (err, list) =>{
    if (err) {
        console.log(err);
    } else {
        const listFiles = list.filter((item) => path.extname(item) === `.${fileExtension}`)
        listFiles.forEach(file => {
            console.log(file)
        });
    }
});
