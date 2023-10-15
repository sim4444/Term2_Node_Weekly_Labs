// // const { createReadStream } = require('fs');
// const fs = require('fs');
// const zlib = require('zlib');
// const { csv } = require("csvtojson");
// const { filterByCountry } = require('./filter-by-country.js');
// const { sumProfit } = require('./sum-profit.js');

// fs.createReadStream('data.csv.gz')
//   .pipe(zlib.createGunzip()) // Unzip the gzipped file
//   .pipe(csv({ output: "json" })) // Use csvtojson to parse CSV data
// //   .on("data", (chunk) => console.log(JSON.parse(chunk)))
//   .pipe(filterByCountry('Italy')) // Filter records by country 'Italy'
// //   .on("data", (chunk) => console.log(JSON.parse(chunk))) // Filter records by country 'Italy'
//   .pipe(sumProfit()) // Calculate and format total profit
//   .pipe(process.stdout); // Display the total profit
const fs = require('fs');
const zlib = require('zlib');
const  csv  = require("csv-parser");
const process = require("process")
const { filterByCountry } = require('./filter-by-country.js');
const { sumProfit } = require('./sum-profit.js');

// Specify the paths for the compressed and uncompressed files
const compressedFilePath = 'data.csv.gz'; // Specify the path to your compressed file
const uncompressedFilePath = 'data.csv'; // Specify the path for the decompressed file

// Create a readable stream for the compressed file
const compressedReadStream = fs.createReadStream(compressedFilePath);
const uncompressedReadSteam = fs.createWriteStream(uncompressedFilePath);
const TransformStream = zlib.createGunzip()
compressedReadStream
    .pipe(TransformStream)
    .pipe(uncompressedReadSteam)
// decompressedReadSteam
//   .pipe(zlib.createGunzip()) // Unzip the gzipped file
//   .pipe(fs.createWriteStream(decompressedFilePath)) // Write the decompressed data to a file
//   .on('finish', () => {
//     // Now that the decompression is complete, parse the CSV
//     fs.createReadStream(decompressedFilePath)
//       .pipe(csv()) // Use csvtojson to parse CSV data and output as JSON objects
//     //   .on('data', (data) => {
//     //     console.log('Parsed Data:', data); // Log parsed data to check if it's correct
//     //   })
//       .pipe(filterByCountry('Italy')) // Filter records by country 'Italy'
//     //   .on('data', (filteredData) => {
//     //     console.log('Filtered Data:', filteredData); // Log filtered data to check if it's correct
//     //   })
//       .pipe(sumProfit()) // Calculate and format total profit
//     //   .on('data', (profit) => {
//     //     console.log('Total Profit:', profit.toString()); // Log the total profit
//     //   })
//       .pipe(process.stdout); // Display the total profit
//   });