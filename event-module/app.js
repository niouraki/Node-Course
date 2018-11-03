// In events module when we require events we get the event emitter class
const EventEmitter = require('events');

// to use this class we must create an instance of it
// here emitter is an object
const emitter = new EventEmitter();

//Register a listener which will listen for the event when raised
// on and addListener are the same
//I have to FIRST register the listener and then emit the event, otherwise nothing happens
emitter.on('messageLogged', function(arg) {
  console.log('Listener called', arg);
});

// used to raise an event
// when raising the event I can also use adittional arguments called event arguments which specify what to do next
emitter.emit('messageLogged', { id: 1, url: 'http://' });
