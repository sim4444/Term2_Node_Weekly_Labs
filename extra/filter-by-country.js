// filter-by-country.js

// pseudocode:
// importing Transform class from module stream
// creating transform Stream using new Transform
// using transform function that takes 3 arguments and performs logic of getting data for Italy only
// JSON data is coming from pervious stream through pipe so converting JSON to Javascript Object using JSON.parse
// finally pushing that data to the stream so it could be piped to next stream
// calling callback for transform function

const { Transform } = require("stream");

function filterByCountry(country) {
  return new Transform({
    objectMode: true,
    transform(data, encoding, callback) {
      const myObj = JSON.parse(data);
      if (myObj.country === country) {
        this.push(JSON.stringify(myObj));
      }
      callback();
    },
  });
}

module.exports = { filterByCountry };
