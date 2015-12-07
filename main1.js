

// var fs = require("fs");
// var data = fs.readFile('input.txt',function(err,data){
// 	if(err) return console.eror(err);
//      console.log(data.toString());	
// });


// console.log("Program Ended");


// Import events module
var events = require('events');
// Create an eventEmitter object

var eventEmitter = new events.eventEmitter();

// Bind event and even handler as follows
eventEmitter.on('eventName',eventHandler);

// Fire and event 
eventEmitter.emit('eventName');