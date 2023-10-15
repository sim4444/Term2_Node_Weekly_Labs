//synchronous & asynchoronous code

//synchronous:
const fs = require("fs");
let name = "sim";
fs.writeFileSync("myfile1.txt", name);

let result = 5 * 2;
let ans = result + 2;
console.log(ans);

//asynchoronous:

function sayHello() {
  console.log("Hello there!!");
}

let nameTwo = "sim";

fs.writeFile("file2.txt", nameTwo, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("written");
    fs.appendFile("file2.txt", `\nI am learning`,  (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("appended")
          fs.readFile("file2.txt",  (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data.toString())}} )  }  
            })}});

sayHello();

let resultTwo = 5 * 2;
let ansTwo = resultTwo + 2;
console.log(ansTwo);

