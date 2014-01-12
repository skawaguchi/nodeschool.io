var port = +process.argv[ 2 ],
  http = require( 'http' ),
  map = require( 'through2-map' );

var server = http.createServer( function ( req, res ) {

  // This checks the method and ends the response if it's not POST
  if ( req.method !== 'POST' ) {
    return res.end( 'We only accept POST here\n' );
  }

  // Not sure I 100% get this. Through2-map looks like it's emulating Array.prototype.map, except
  // for on a stream. So each chunk gets run through this function. Then when it's done, it calls
  // the next thing in the chain.
  req.pipe( map( function ( chunk ) {
    return chunk.toString().toUpperCase();
  }))
    // pipe to result, which implicitly calls end
    .pipe( res );
});

server.listen( port );