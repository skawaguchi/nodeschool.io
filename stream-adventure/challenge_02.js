var file = process.argv[ 2 ]
  , fs = require( 'fs' )
  ;

fs.createReadStream( file )
  .pipe( process.stdout );