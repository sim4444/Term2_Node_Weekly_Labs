const { createReadStream } = require("fs");
const zlib = require("zlib");
const csv = require("csvtojson");
const { filterByCountry } = require("./filter-by-country.js");
const { sumProfit } = require("./sum-profit.js");
const path = require("path")
const filepath = path.join(__dirname, "data.csv.gz")
createReadStream(filepath)
  .pipe(zlib.createGunzip())
  .pipe(csv())
  .pipe(filterByCountry("Italy"))
  .on('error', (error) => {
    console.error('Filtered Data:', error); // Add this line to check filtered data
  })
  .pipe(sumProfit())
  .on('error', (error) => {
    console.log('Total Profit:', error); // Add this line to check total profit
  })
  .pipe(process.stdout)
  .on('error', (error) => {
    console.error('Error in writing to stdout:', error);
  });

