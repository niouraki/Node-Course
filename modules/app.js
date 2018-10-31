// To execute my file I go the the command prompt and use the command node nameoffile.js
function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Chara');

// loads the module. I don't have to use .js after the name of the file, it is automatically added
// ./ means the current folder, same folder

// when loading a module, the best practice is to store results in const
const logger = require('./logger');

// I don't have to use that because logger now is just a function I can call directly
// logger.log('message');

// I can call the function directly
logger('message');
