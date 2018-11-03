// To execute my file I go the the command prompt and use the command node nameoffile.js
//function sayHello(name) {
  //console.log('Hello ' + name);
//}

//sayHello('Chara');

// loads the module. I don't have to use .js after the name of the file, it is automatically added
// ./ means the current folder, same folder
const EventEmitter = require('events');

// when loading a module, the best practice is to store results in const
const Logger = require('./logger');
const logger = new Logger(); // create an object based on the class above

logger.on('messageLogged', function(arg) {
  console.log('Listener called', arg);
});

// I don't have to use that because logger now is just a function I can call directly
// logger.log('message');

// I can call the function directly
logger.log('message');
