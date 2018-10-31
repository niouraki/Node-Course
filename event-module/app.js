// In events module when we require events we get the event emitter class
const EventEmitter = require('events');

// to use this class we must create an instance of it
// here emitter is an object
const emitter = new EventEmitter();

//Register a listener which will listen for the event when raised
// on and addListener are the same
//I have to FIRST register the listener and then emit the event, otherwise nothing happens
emitter.on('messageLogged', function() {
  console.log('Listener called');
});

// used to raise an event
emitter.emit('messageLogged');
