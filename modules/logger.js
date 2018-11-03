// a module for logging messages
// image that we send an http request to this url
const EventEmitter = require('events');
//const emitter = new EventEmitter();

let url = 'http://mylogger.io/log';

// this way the Logger class has all the capabilities of the EventEmmiter
class Logger extends EventEmitter {
  log(message) { //this functions becomes a method of the class Logger
    // Send an HTTP request
    console.log(message);
  // after we log the message we raise the evemt that it is logged
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}
// I am adding the method called log to the export object of the module and setting it to the above function
// I can change the name eg module.export.endPoint = url;
// by exporting this way I export an object
// module.exports.log = log;

//If I want to export just the function and not the function inside the object I use
module.exports = Logger;
