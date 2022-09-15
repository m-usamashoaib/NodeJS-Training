const EventEmitter=require('events');
const event = new EventEmitter;

//Connection event created
event.on('connection',()=>{
    console.log('Inside connection event');
})

//Data received event created and Connection event is emitted 
event.on('data_received',()=>{
    console.log('Inside data received event');
    event.emit('connection');
})

//Data received event emitted
event.emit('data_received');

//End of program
console.log('End');