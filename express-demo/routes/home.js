const express = require('express');
const router = express.Router();


// takes two arguments, the first is the path of url
// the second argument is a callback function, the function that will be called when we have an http request to this endpoint
// the / represents the root of the website
// this are the routes because they don't have if statements I can move them to another file
router.get('/', function(req, res) {
  res.send('Hello World');
});

module.exports = router;
