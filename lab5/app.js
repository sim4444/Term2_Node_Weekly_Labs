// Import the 'readline' module for reading input from 'stdin'
// const readline = require('readline');

// // Create an interface to read from 'stdin' and write to 'stdout'
// const rl = readline.createInterface({
//   input: process.stdin,  // 'stdin' is the input stream
//   output: process.stdout  // 'stdout' is the output stream
// });

// // Prompt the user for input
// rl.question('What is your name? ', (name) => {
//   // Use 'stdout' to display a message with the input received from 'stdin'
//   console.log(`Hello, ${name}!`);

//   // Close the 'stdin' and 'stdout' streams
//   rl.close();
// });
//=======================================================================
// const { write } = require("fs");
// const process = require("process");
// const { pipeline } = require("stream");
// const {createInterface} = require('readline')
// const r1 = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("Please enter your favourite food:", (userinput)=>{
//   console.log(`Your favourite food is: ${userinput}`)
//   r1.close()
// })
// const readableStream = process.stdin;
// const writableStream = process.stdout;
// readableStream.pipe(writableStream)
// pipeline(
//   readableStream,
//   writableStream,
//   function onEnd (err){
//     if(err){
//       console.log(`Error: ${err}`)
//     }else{
//       console.log("Done")
//     }
//   }
// )
// ========================================================================
const process = require("process");
const {pipeline, Readable} = require('stream')
const readableStream = process.stdin;
const writableStream = process.stdout;
const {createInterface} = require('readline')

pipeline(readableStream, writableStream, function onEnd(err) {
  if (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  } else {
    const r1 = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    r1.question("Please enter your favourite food:", (userinput)=>{
      writableStream.write(`Your favourite food is: ${userinput}`)
      r1.close()
    })
  }
});


