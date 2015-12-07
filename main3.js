// Selected Reading

var fs = require("fs");
var data = '';

// create a readable stream
var readerStream = fs.createReadStream('input.txt');

// set the encoding to be UTF8
readerStream.setEncoding('UTF8');

// Handle stream evetns --> data , end and error
readerStream.on('data',function(chunk) {
	data += chunk;
}) ;

readerStream.on('end',function(){
	console.log(data);

});

readerStream.on('error',function(err){
	console.log(err.stack);
});

readerStream.on('error',function(err){
	console.log(err.stack);
});
console.log("Program Ended");

