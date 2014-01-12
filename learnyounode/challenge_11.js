var port = +process.argv[ 2 ],
  file = process.argv[ 3 ],
  fs = require( 'fs'),
  http = require( 'http' ),
  server = http.createServer( function ( request, response ) {

    var readStream = fs.createReadStream( file );

    readStream.on( 'open', function () {

      // Got this answer from nodejitsu, so I don't quite understand it.
      // OK, it looks like pipe automatically emits the 'end' event once it's called. You need to pass the option {end: false} to keep the stream open. Cool.
      readStream.pipe( response );
    });

    readStream.on( 'error', function ( error ) {
      response.end( error );
    });

  });

server.listen ( port );

/*
Their answer way more concise:

 var http = require('http')
 var fs = require('fs')

 var server = http.createServer(function (req, res) {
 fs.createReadStream(process.argv[3]).pipe(res)
 })
 server.listen(Number(process.argv[2]))

 */
