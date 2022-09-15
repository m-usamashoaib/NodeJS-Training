const EventEmitter= require('events');
const { listeners } = require('process');
const eventEmitter= new EventEmitter();

//Listener 1
const listener1=()=>{
    console.log('Listener 1 is listening');
}

//Listener 2
const listener2=()=>{
    console.log('Listener 2 is listening');
}

//Listener 1 & 2 bind with connection event
eventEmitter.on('connection',listener1)
eventEmitter.on('connection',listener2)

//Connection event emitted
eventEmitter.emit('connection')

//Print number of listeners on connection event
let count=EventEmitter.listenerCount(eventEmitter,'connection')
console.log(`${count} are listening on connection event`);

//Listener 1 is removed from Connection event
eventEmitter.removeListener('connection',listener2)
console.log('Listener 1 is removed from connection');

//Print number of listeners on connection event
count=EventEmitter.listenerCount(eventEmitter,'connection')
console.log(`${count} are listening on connection event`);

console.log('End of program');