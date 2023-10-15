// filter-by-country.js
const { Transform } = require("stream");

function filterByCountry(country) {
  return new Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    // tranform function performs logic and callback function is called within
    // to tell that this chunk of data is transformed and lets continue with next chunk now.
    transform(record, encoding, callback) {
      if (record.country === country) {
        this.push(record);
        // console.log(record);
      }
      // this callback function is called when transform operation is complete
      callback();
    },
  });
}

module.exports = { filterByCountry };


// filter-by-country.js
const { Transform } = require('stream');

function filterByCountry(country) {
  return new Transform({
    objectMode: true,
    transform(chunk, encoding, push) {
      const data = JSON.parse(chunk);
      if (data.country === country) {
        this.push(JSON.stringify(data));
      }
      push();
    }
  });
}

module.exports = { filterByCountry };