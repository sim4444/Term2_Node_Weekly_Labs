// this is module file (producer of code)

const fs = require("fs");
const path = require("path");

function filterFiles(directoryName, fileExtension, callback) {
  const directoryPath = path.join(__dirname, directoryName)
  // checking directoryPath in console
  //console.log(directoryPath)
  fs.readdir(directoryPath, (err, list) => {
    if (err) {
      callback(new Error("Input is invalid!"), null);
    } else {
      const listFiles = list.filter(
        (item) => path.extname(item) === `.${fileExtension}`
      );
      callback(null, listFiles);
    }
  });
}

module.exports = { filterFiles };
