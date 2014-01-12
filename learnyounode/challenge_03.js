// Challenge 3

var fs = require('fs'),
  fileName = process.argv [ 2 ],
  buf = fs.readFileSync( fileName ),
  bufString = buf.toString(),
  fileContents = bufString.split('\n');

// There's no newline at the end of the file, so we need to subtract one
console.log(fileContents.length - 1);