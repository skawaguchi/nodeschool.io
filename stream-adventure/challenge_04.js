// Dang! A typo in the module name (space after name) was causing an error
var through = require( 'through' );

// In the through methods, 'this' is the instance of through returned by calling through().
// So below, this = tr;
var write = function ( data ) {
  this.queue( data.toString().toUpperCase() );
};

var tr = through( write );

process.stdin
  .pipe( tr )
  .pipe( process.stdout );
