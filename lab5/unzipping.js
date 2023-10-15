const fs = require('fs');
const zlib = require('zlib');

const compressedFilePath = 'data.csv.gz'; // Specify the path to your compressed file
const decompressedFilePath = 'data.csv'; // Specify the path for the decompressed file

// Create a read stream for the compressed file
const compressedReadStream = fs.createReadStream(compressedFilePath);

// Create a write stream for the decompressed file
const decompressedWriteStream = fs.createWriteStream(decompressedFilePath);

// Pipe the compressed stream through the unzip stream and save it to the decompressed file
compressedReadStream
  .pipe(zlib.createGunzip()) // Unzip the gzipped file
  .pipe(decompressedWriteStream) // Write the decompressed data to a file

// Listen for events to know when the process is complete
decompressedWriteStream.on('finish', () => {
  console.log('File decompression complete.');
});
