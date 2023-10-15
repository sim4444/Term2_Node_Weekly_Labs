const { createReadStream } = require("fs");
const zlib = require("zlib");
const csv = require("csv-parser");
const { filterByCountry } = require("./filter-by-country.js");
const { sumProfit } = require("./sum-profit.js");

const stream =createReadStream("data.csv.gz")
  .pipe(zlib.createGunzip())
  .pipe(csv())
  .on('error', (error)=> console.log(error)    )
//   .on('data', (chunk)=> console.log(chunk.toString())    )
  .pipe(filterByCountry("Italy"))
  .on('error', (error)=> console.log(error)    )
//   .on('data', (chunk)=> console.log(chunk.toString())    )
  .pipe(sumProfit())
  .on('error', (error)=> console.log(error)    )


  .pipe(process.stdout)
  .on('error', (error)=> console.log(error)    )

// const { createReadStream } = require("fs");
// const zlib = require("zlib");
// const csv = require("csvtojson");
// const { filterByCountry } = require("./filter-by-country.js");
// const { sumProfit } = require("./sum-profit.js");

// const stream = createReadStream("data.csv.gz")
//   .pipe(zlib.createGunzip())
//   .pipe(csv({ delimiter: "," }));

// stream.on('error', (error) => {
//   console.error('Error in CSV parsing:', error);
// });

// stream
//   .on('data', (data) => {
//     console.log('CSV Data:', data); // Add this line to check CSV data
//   })
//   .pipe(filterByCountry("Italy"))
//   .on('data', (data) => {
//     console.log('Filtered Data:', data); // Add this line to check filtered data
//   })
//   .pipe(sumProfit())
//   .on('data', (data) => {
//     console.log('Total Profit:', data); // Add this line to check total profit
//   })
//   .pipe(process.stdout)
//   .on('error', (error) => {
//     console.error('Error in writing to stdout:', error);
//   });
