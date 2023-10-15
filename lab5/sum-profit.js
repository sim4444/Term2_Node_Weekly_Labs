// // sum-profit.js

// const { Transform } = require("stream");

// function sumProfit() {
//   let totalProfit = 0;

//   return new Transform({
//     readableObjectMode: true,
//     writableObjectMode: true,

//     transform(record, encoding, callback) {
//       totalProfit += parseFloat(record.profit);
//       // this callback function is called when transform operation is complete
//       callback();
//     },
//     //flush function performs final processing before the stream is ending
//     flush(callback) {
//       const formattedTotalProfit = `$${totalProfit
//         .toFixed(0)
//         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
//         this.push(formattedTotalProfit);
//       // this callback function is called when flush operation is complete
//       callback();
//     },
//   });
// }

// module.exports = { sumProfit };

// pseudocode:
// importing Transform class from module stream
// creating transform Stream using new Transform
// using transform function that takes 3 arguments and performs logic
// JSON data is coming from pervious stream through pipe so converting JSON to Javascript Object using JSON.parse
// gettin access to profit property of Javascript object
// summing the profit
// using flush function to perform last actrion of formatting the profit
// finally pushing that data to the stream so it could be piped to next stream

const { Transform } = require('stream');

function sumProfit() {
  let totalProfit = 0;
  return new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
      const myObj = JSON.parse(chunk);
      const profit = parseFloat(myObj.profit) ;
      totalProfit += profit;
      callback();
    },
    flush(callback) {
        const profitNum = Math.round(totalProfit);
        const formattedProfit = profitNum.toLocaleString("en-US");
      this.push(`Total Profit for Italy: $${formattedProfit}`);
      callback();
    }
  });
}

module.exports = { sumProfit };