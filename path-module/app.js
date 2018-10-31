// load the node module
const path = require('path')

// __filename is part of the module wrapper function
let pathObj = path.parse(__filename);

console.log(pathObj);
