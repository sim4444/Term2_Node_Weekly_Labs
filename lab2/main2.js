const process = require("process");
const fs = require("fs");
const mathHelpers = require("./mathHelpers2");

const userInput = process.argv.slice(2).join(" ");

function processInput(userInput) {
  fs.mkdir("dataPoints", { recursive: true }, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Folder Made");
    fs.writeFile("dataPoints/points.txt", userInput, (err) => {
      if (err) {
        return console.log(err);
      }
      let [x1, y1, x2, y2] = userInput.split(" ").map(Number);
      let inputDistance = mathHelpers.distance(x1, y1, x2, y2);
      fs.appendFile(
        "dataPoints/points.txt",
        `\r\nThe distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${inputDistance}`,
        (err) => {
          if (err) {
            return console.log(err);
          }
          console.log("Distance Calculated");
        }
      );
    });
  });
}
processInput(userInput);
