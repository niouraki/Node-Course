const startupDebugger = require('debug')('app:startup'); // this returns a function so we call it and give it an argument, an arbitrary name space that we define for debugging
const dbDebugger = require('debug')('app:db'); // debugger for database work
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi'); // it returns a class
const express = require('express'); //returns a function
const logger = require('./middleware/logger');
const auth = require('./auth');
// this represents our app and has useful methods
const app = express(); // returns an object of type express
const courses = require('./routes/courses');
const home = require('./routes/home');
// set the environment
// console.log(`NODE_END: ${process.env.NODE_ENV}`);
// if the above not set get will give development env by default
// console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.static('public')); // built-in middleware function used to pass static content
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

// configuration
// based on the environment I set I get different values
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);

if(app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled');
}

// create a custom middleware function, it's in a different file
app.use(logger);

app.use(auth);

// this callback is optional and it will be called once the app starts listening to the given port
// it is better not to hardcode the port because I don't know if it will be available
// app.listen(3000, function() {
  // console.log('Listening on port 3000');
// });
// we use the process object and its env method, short for environment variable and after that we add the name of the environment variable
const port = process.env.PORT || 3000 // use this or 3000
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
