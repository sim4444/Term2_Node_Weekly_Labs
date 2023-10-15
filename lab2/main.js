const process = require("process");
const path = require("path");
const { distance } = require("./mathHelpers");
const fs = require("fs");
const dataPointDirectory = path.join(__dirname, "dataPoints"); //assigning location of this directory "dataPointDirectory" in the same directory as other js files I guess

function processInput(userInput) {
  fs.mkdir(dataPointDirectory, { recursive: true }, (error) => { // creating directing by using mkdir, using  { recursive: true } so that even if directory is created once, it doesnt give error if run it next time(like twice or thrice)
    if (error) {
      console.log(`Error is: ${error}`);
    } else {
      console.log("Created directory");
      writeToFile(userInput);
    }
  });
}

function writeToFile(userInput) {
  const filePath = path.join(dataPointDirectory, "points.txt");   // creating a file inside a folder or directory thats why we are using directory name as first parameter and then addding file name as second parameter

  fs.writeFile(filePath, userInput.join(","), (err) => { //writing into the file that we created . we do this by giving path(first parameter) of file, some initial content(second parameter) to begin with, and a callback function
    if (err) {
      return console.error("Error writing to file points.txt:", err);
    }
    console.log("Content saved");

    const calculatedDistance = distance(
      userInput[0],
      userInput[1],
      userInput[2],
      userInput[3]
    );

    fs.appendFile(              //appending into the file(means adding after the very last line in file means at the end) that we created . we do this by giving path(first parameter) of file, some content(second parameter) to begin with, and a callback function
      filePath,
      `\nThe distance between your two points: (${userInput[0]},${userInput[1]}), (${userInput[2]},${userInput[3]}) is ${calculatedDistance}\n`,
      (err) => {
        if (err) {
          console.error("Error appending file to points.txt:", err);
        }
      }
    );
  });
}

const input = process.argv.slice(2);
processInput(input);
