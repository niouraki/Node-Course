const fs = require('fs');

// better to use the async methods of the module because they are non-blocking
// we get the files in the directory (read directory)
fs.readdir('./', function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
})
