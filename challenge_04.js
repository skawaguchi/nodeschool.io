// Challenge 4

var fs = require('fs'),
  fileName = process.argv [ 2 ];


fs.readFile( fileName, parseFile );

function parseFile ( err, data ) {
  if ( err ) {
    throw err;
  }

  var bufString = data.toString(),
    fileContents = bufString.split('\n');

  console.log( fileContents.length - 1 );
};
