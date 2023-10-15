// console.log(__dirname)

// const DIRECTORY_PATH = path.join(__dirname, 'fileNames')
// const FILE_NAME_1 = "file1.txt"
// const FILE_NAME_2 = "file2.txt"
// const file_NAME_3 = "file3.csv"
// const file_NAME_4 = "file4.csv"


let process = require("process")
const func = (directory_name, filename_extension_string, callback) => {
    if(filename_extension_string !== "txt"){
        return callback(new error(`The file extension must be txt: ${err}`), null)
    }
    callback(null, data)
}
module.exports = {func}

//Module file
const fs = require("fs");
const path = require('path');


const get_content = (dir_name, file_ext, callback) => {
    const file_path = path.join(__dirname, dir_name)
    fs.readdir(file_path,(err, list) =>{
        if (err) {
            callback(new Error('Invalid input'));
        } else {
            callback(null, list.filter((item) => path.extname(item) === `.${file_ext}`))
        }
    });
    }


module.exports = {get_content}
console.log(process.argv)
console.log(path.extname(""))