//main.js
const { createReadStream } = require("fs");
const csv = require("csvtojson");
const { filterByCountry } = require("./filter-by-country.js");
const { sumProfit } = require("./sum-profit.js");
const { createGunzip } = require("zlib");

createReadStream("data.csv.gz")
  .pipe(createGunzip())
  .pipe(csv())
  .pipe(filterByCountry("Italy"))
  .pipe(sumProfit())
  .pipe(process.stdout);
