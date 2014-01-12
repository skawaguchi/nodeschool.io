var through = require( 'through ');

var write = function ( data ) {
  this.queue( data.toString().toUpperCase() );
};

var end = function () {
  this.queue( null );
};

var tr = through( write, end );

process.stdin
  .pipe( tr )
  .pipe( process.stdout );

