var concat = require( 'concat-stream' );

process.stdin.pipe( concat( function ( text ) {
  var str = text.toString().split('').reverse().join('');
  console.log( str );
}));