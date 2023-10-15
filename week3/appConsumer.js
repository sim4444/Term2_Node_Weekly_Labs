const {func} = require("./app")
const path = require("path")
const fs = require("fs")
const DIRECTORY_PATH = "fileNames"
fs.mkdir(DIRECTORY_PATH, {recursive:true} , (err, data) => {
    if(err){
        return console.log(err)
    }
    console.log(data)
})
const FILE_PATH_1 = path.join(__dirname, 'fileNames', 'file1.txt')
const FILE_PATH_2 = path.join(__dirname, 'fileNames', 'file2.csv')
fs.writeFile(FILE_PATH_1, "Hi Sim", (err, data) => {
    if(err){
        return console.log(err)
    }
    console.log(data)
})
fs.writeFile(FILE_PATH_2, "1, 2, 3", (err, data) => {
    if(err){
        return console.log(err)
    }
    console.log(data)
})
fs.readdir(DIRECTORY_PATH, (err, data)=>{
    if(err){
        return console.log(err)
    }
    console.log(data)
    data.forEach(element => {
        // console.log(element.slice(-3))
        if(element.slice(-3) === "txt"){
            console.log(element)
        }
        
    });
})

const fs = require('fs');
const {argv} = require("process");
const path = require('path')


const [,,inputPath,ext] = argv

const file_path = path.join(__dirname, inputPath)

// ASSUMPTION: from user contains a .
fs.readdir(file_path,(err, list) =>{
    if (err) {
        console.log(err);
    } else {
        const listFiles = list.filter((item) => path.extname(item) === path.extname(`file.${ext}`) )
        listFiles.forEach(file => {
            console.log(file)
        });
    }
});

// const main = (path, file_extension , (err, data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(data)
//     data.forEach(element => {
//         // console.log(element.slice(-3))
//         if(element.slice(-3) === "txt"){
//             console.log(element)
//         }
        
//     });
// })
// main(DIRECTORY_PATH)

//Consumer file
// 2 args are: . js

const lab3Module = require('./lab3Module')
const args = process.argv.slice(2)
const dir_name = args[0]
// assuming the user input for the extension is 'js'
const file_ext = args[1]

lab3Module.get_content(dir_name, file_ext, (err,data)=>{
    if (err) {
        console.log(err)
    } else {
        data.forEach(item => {
            console.log(item)
        });
    }
})