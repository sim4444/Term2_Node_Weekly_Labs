// const { readFile } = require("fs")
// const fs = require("fs")
// const { resolve } = require("path")
// const { promisify } = require("util")

// //MIDTERM QUES: two drawbacks of asynchoronous functions:
// //1) we dont have centralized error handling. try catch error method doesnt work in node async functions
// //2) Readability issue (nested callbacks)
// //promise is going to solve nesting issue
// //now run this below given callback nesting with fs instead of fs/promsises

// fs.readFile("file1.txt", (err, file2) =>{
//     if(err){
//         return console.log(err)
//     }
//     fs.readFile(file2, (err, file3)=>{
//         if(err){
//             return console.log(err)
//         }
//         fs.readFile(file3, (err, file4)=>{
//             if(err){
//                 return console.log(err)
//             }
//             fs.readFile(file4, (err, data)=>{
//                 if(err){
//                     return console.log(err)
//                 }
//                 console.log(data.toString())
//             })
//         })
//     })
// })

// //below example shown is better way of writing js node code without using callback functions

// //example 5

// // now we need to create own function that returns a new promise object
// //1)now we have centralized error handling with promises
// //1)now we have much more readable code with promises
// function readFileP(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// readFileP("file1.txt")
//     .then((value) => readFileP(value))
//     .then((value2) => readFileP(value2))
//     .then((value3) => readFileP(value3))
//     .then((res) => console.log(res.toString()))
//     .catch((err) => console.log(err));
// //or another way of writing above 3 lines is:
// // const p = get_content("file1.txt");
// // p.then((value) => console.log(value.toString()));
// // p.catch((err) => console.log(err));

// //example of writeFile using promises:
// function writeFileP(filename, content){
//     return new Promise((resolve, reject)=>{
//         fs.writeFile(filename, content, (err, data) => {
//             if(err){
//                 reject(`failed: ${err}`)
//             } else{
//                 resolve()
//             }
//     })
//  })
// }
// writeFileP("file1.txt")
//     .then((value) => writeFileP(value))
//     .then((value2) => writeFileP(value2))
//     .then((value3) => writeFileP(value3))
//     .then((res) => console.log(res.toString()))
//     .catch((err) => console.log(err));

// //another way of doing above using promises with fs not fs/promises is promisify()
// const util = require("util")

// const writeFileP = util.promisify(fs.writeFile) // now we dont have to write new Promise in all lines or keep calling function again I think

// //below example shown is the best way of writing js node code where we can just use fs/promises
// //now run this below given promise object example with fs/promsises instead of fs because fs/promsises will automatically keep creating new promise objects
// //without having the need to write new Promise

// fs.writeFile("somefile.txt", "hi") // now fs/promises auto promisify the function fs.writeFile
// .then(() => fs.readFile("somefile.txt")) //if u use fs/promises, functions like writeFile and readFile and appendFile will use promises automatically
// .then((content) => console.log(content))
// .catch((err) => console.log(err))

// function foo(filename){
//     fs.readFile(filename)
//     .then(value => resolve(value)) //here this resolve function is automatically returning a new promise object
//     .catch(err => reject(err))

// }
// foo("text2.txt")
//    .then(value => console.log(value))
//    .catch(err => console.log(err))

// //practice question given by Armaan: Create two functions, onResolved and onRejected. Inside each function,
// // console.log "success" and "error" respectively.

// // Create a new promise, which takes a function contained resolve and reject
// // as parameters. In the function body, timeout for 3 seconds, then call
// // resolve(). Now make another promise, which takes again a resolve and reject,
// // but this time call reject. Again, timeout for 3 seconds. Do this in chrome
// // devtools.

// // finally, call .then() and .catch() on your promise, passing your
// // onResolved and onRejected parameters respectively.

// function onResolved(){
//     console.log("success")
// }
// function onRejected(){
//     console.log("error")
// }
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve()
//     }, 3000)
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject()
//     }, 3000)
// })

// promise1.then(onResolved)
// promise1.catch(onResolved)

// //solving multiplier question from lab 2 with help of promise here:
// function multiplier(num1, num2){
//     return new Promise((resolve, reject) => {
//         if (typeof num1 !== 'number' || typeof num2 !== 'number'){
//             reject("your numbers are invalid")
//         }else{
//             result = parseInt(num1)*parseInt(num2)
//             resolve(result)
//         }
//     })
// }
// multiplier(1,2).then(value=>console.log(value))
// multiplier(1,'sim').catch(error=>console.log(error))

// ## Promises In-Class Solution

// 1. Create a text file that contains the following:

// ```
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
// ```

// Create a function called getSpacedData which takes 1 parameter, fileName. This function must do the following:

// 1) return a new Promise

// 2) reject if what the user passes to the parameter fileName is NOT of type string

// 3) read the file, and reject if there is an error.

// 4) if there is no error when reading the file, then convert the data you get from reading the file into an array, where each number in the file represents an item in the array.

// 5) Pass this array to resolve

// 6) Chain another function onto this called filterEvens which will return an array with only the even numbers.

// 7) console.log the even numbers.
const fs = require("fs");
function getSpacedData(fileName) {
  return new Promise((resolve, reject) => {
    if (typeof fileName !== "string") {
      reject("your filename is not a string");
    } else {
      fs.readFile(fileName, (err, value) => {
        if (err) {
          reject("there is an error in reading");
        } else {
            value = value.toString()
            arrayNumbers = value.split(" ")
            console.log(arrayNumbers)
            resolve(arrayNumbers);
            
        }
      });
    }
  });
}
function filterEvens(arr){
    return arr.filter(item=> item % 2 == 0 )
}


//   for (item of newArray) {
//     arrayEven = [];
//     if (item % 2 === 0) {
//       arrayEven.push(item);
//       resolve(arrayEven);
//       // arrayEven.forEach(element => {
//       //     resolve(arrayEven)
//       // });
//     }
//   }
// }
getSpacedData("sim.txt").then(filterEvens).then(value=>console.log(value))

