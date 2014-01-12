var through = require( 'through' )
  , split = require( 'split' );

var count = 0;

process.stdin
  .pipe( split() )
  .pipe( through( function ( line ) {
    var out = ( count % 2 === 1 ) ? line.toUpperCase() : line.toLowerCase();
    // Using console.dir in the example text was misleading
    console.log( out );
    count += 1;
}) );