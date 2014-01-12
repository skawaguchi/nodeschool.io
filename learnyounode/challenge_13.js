var port = + process.argv[ 2 ]
  , http = require( 'http' )
  , url = require( 'url' );

var getTime = function ( date ) {
   return {
     hour: date.getHours(),
     minute: date.getMinutes(),
     second: date.getSeconds()
   };
};

var getUnixTime = function ( date ) {
  return { unixtime: date.getTime() };
};

var server = http.createServer( function ( req, res ) {

  if ( req.method !== 'GET' ) {
    res.end( 'Must use GET\n' );
  }
//res.write( req.url );
  var parsedUrl = url.parse( req.url, true);

  var date = new Date( parsedUrl.query.iso );

  var result;

  // Coulda used regex like the answer code.
  if ( req.url.indexOf('/api/parsetime') !== -1 ) {
    result = getTime( date );
  } else if ( req.url.indexOf('/api/unixtime') !== -1) {
    result = getUnixTime( date );
  }

  if ( result ) {
    res.writeHead( 200, { 'Content-Type': 'application/json' });
    res.end( JSON.stringify( result ) );
  }

  res.end();
});

server.listen( port );