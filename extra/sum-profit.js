// pseudocode:
// importing Transform class from module stream
// creating transform Stream using new Transform
// using transform function that takes 3 arguments and performs logic of getting profit and summing profit for Italy
// JSON data is coming from pervious stream through pipe so converting JSON to Javascript Object using JSON.parse
// gettin access to profit property of Javascript object
// summing the profit
// calling callback for transform function
// using flush function to perform last actrion of formatting the profit
// finally pushing that data to the stream so it could be piped to next stream
// calling callback for flush function

const { Transform } = require("stream");

function sumProfit() {
  let totalProfit = 0;
  return new Transform({
    objectMode: true,
    transform(data, encoding, callback) {
      const myObj = JSON.parse(data);
      const profit = parseFloat(myObj.profit);
      totalProfit += profit;
      callback();
    },
    flush(callback) {
      const profitNum = Math.round(totalProfit);
      const formattedProfit = profitNum.toLocaleString("en-US");
      this.push(`Total Profit for Italy: $${formattedProfit}`);
      callback();
    },
  });
}

module.exports = { sumProfit };
