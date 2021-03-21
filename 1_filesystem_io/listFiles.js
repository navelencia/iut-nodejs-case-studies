const fs = require('fs');

const currentDirectory = fs.readdirSync(__dirname);

console.log(currentDirectory)