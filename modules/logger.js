// a module for logging messages
// image that we send an http request to this url

let url = 'http://mylogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message);
}

// I am adding the method called log to the export object of the module and setting it to the above function
// I can change the name eg module.export.endPoint = url;
// by exporting this way I export an object
// module.exports.log = log;

//If I want to export just the function and not the function inside the object I use
module.exports = log;
