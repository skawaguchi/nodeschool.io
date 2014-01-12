var filter = require('./challenge_06_module.js'),
  dir = process.argv [ 2 ],
  extensionFilter = process.argv [ 3 ];

// Putting the period before argument 2 caused the problem: https://github.com/nodeschool/discussions/issues/35

// Call the module
filter( dir, extensionFilter, function ( err, data ) {

  if ( err ) {
    return console.error( 'Uh oh! There was an error processing the file.', err );
  }

  data.forEach( function ( file ) {
    console.log( file );
  });

});