function log(req, res, next) {
  console.log('Logging...');
  next(); // I need it so it will continue to the next middleware function
}

module.exports = log;
