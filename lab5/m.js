const process = require("process");
const { pipeline } = require('stream');
const readline = require('readline');

const readableStream = process.stdin;
const writableStream = process.stdout;

pipeline(
  readableStream,
  writableStream,
  function onEnd(err) {
    if (err) {
      console.log(`Error: ${err}`);
      process.exit(1);
    } else {
      console.log("Done");
    }
  }
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your favorite food: ", (userInput) => {
  // Write the user's input to the writable stream
  writableStream.write(`Your favorite food is: ${userInput}\n`);

  // Close the readline interface and end the pipeline
  rl.close();
});

