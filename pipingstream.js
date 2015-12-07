// piping 
var fs = require("fs");

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

// pipe the read and write operations
// read input.txt and write data to output.txt

readerStream.pipe(writerStream);
console.log("Program ended");	