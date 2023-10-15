//string way
const { Readable } = require("stream");

const codingTips = [
  "Try to get a good night sleep before a midterm of final.",
  "When feeling lost, a short walk and fresh air can help a lot",
  "If you cannot solve the coding problem, try and use pseudocode first.",
  "First solve the problem naively, and reach for an optimal solution after.",
];

function tipStream(tips) {
  let index = 0;
  const readableStream = new Readable({
    encoding : "utf8",
    read() {
      if (index >= tips.length) {
        readableStream.push(null);
      } else {
        readableStream.push(tips[index]);
        index++;
      }
    },
  });

  return readableStream;
}

const ts = tipStream(codingTips);

ts.on("data", (chunk) => console.log(chunk));
ts.on("end", () => console.log("done!"));

//object way
// const { Readable } = require("stream");

// const codingTips = [
//   "Try to get a good night sleep before a midterm of final.",
//   "When feeling lost, a short walk and fresh air can help a lot",
//   "If you cannot solve the coding problem, try and use pseudocode first.",
//   "First solve the problem naively, and reach for an optimal solution after.",
// ];

function tipiStream(tips) {
  let index = 0;
  const readableStream = new Readable({
    objectMode : true,
    read() {
      if (index >= tips.length) {
        readableStream.push(null);
      } else {
        readableStream.push({msg:tips[index]});
        index++;
      }
    },
  });

  return readableStream;
}

const rs = tipiStream(codingTips);

rs.on("data", (chunk) => console.log(chunk));
rs.on("end", () => console.log("done!"));
