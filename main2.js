// Import events module
var events = require('events');
// create and eventEmitter object
var eventEmitter = new events.EventEmitter();

// create and event handler as follows
var connectHandler = function connected(){
	console.log("connection successful");

	// Fire the data_received event
	eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection',connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received',function(){
	console.log('data received successfully');

});

// Fire the connection event 
eventEmitter.emit('connection');
console.log("Program Ended ");

