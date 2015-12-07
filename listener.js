var events = require('events');
// var eventEmitter = new events.eventEmitter();
var eventEmitter = new events.EventEmitter();


// listener 1
var listener1 = function listener1() {
	console.log('listener1 executed');

}

// listener 2
var listener2 = function listener2(){
	 console.log('listener2 executed');

}

// binding the connection event with the listener1 funciton 
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" Listeners listening to the connection event");

// firing the connection event 
eventEmitter.emit('connection');

// removing the binding of listener1 function 
eventEmitter.removeListener('connection',listener1);
console.log("Listener 1 will not listen now.");

// firing the connection event again
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "Listner(s) listening to connectio event");
console.log("Program ended");


