// This first implementation sucked hard
//var http = require( 'http'),
//  servers = [
//    { url: process.argv[ 2 ] },
//    { url: process.argv[ 3 ] },
//    { url: process.argv[ 4 ] }
//  ];
//
//( function () {
//
//  // Hmmm... this appears to be blocking code - should make this async
//  servers.forEach( function ( server, index ) {
//
//    http.get( server.url, function ( response ) {
//
//      var contents = '';
//
//      response.on( 'data', function ( chunk ) {
//
//        contents += chunk.toString();
//
//      });
//
//      response.on( 'end', function () {
//
//        servers[ index ].content = contents;
//
//        checkAllArrays();
//      });
//
//    });
//
//  });
//
//  var checkAllArrays = function () {
//
//    var isUndefined = false;
//
//    servers.forEach( function ( server ) {
//
//      if ( server.content === undefined ) {
//        isUndefined = true;
//      }
//
//    });
//
//    if ( ! isUndefined ) {
//      servers.forEach( function ( server ) {
//
//        console.log( server.content );
//
//      });
//    };
//
//  };
//
//}) ();

// Used a nicer implementation via the solution - more straightforward

var http = require( 'http' ),
  results = [],
  count = 0,
  expectedCount = 0;

// First we loop through the calls starting at the correct argument
var callUrls = function () {
  for (var i = 2, iLen = process.argv.length; i < iLen; i ++) {
    getUrl( process.argv[ i ], i);
    expectedCount += 1;
  }
};

var printResults = function () {
  results.forEach( function ( result ) {
    console.log( result );
  });
};

var getUrl = function ( url, index ) {
  http.get( url, function ( response ) {

    // Start the stream contents off
    var contents = '';

    // Don't use bl so that I can get used to dealing with streams
    response.on( 'data', function ( chunk ) {
      contents += chunk.toString();
    });

    response.on( 'end', function () {
      // Use closure to put the received content in the right place in the results array
      results[ index ] = contents;

      count += 1;

      if ( count >= expectedCount ) {
        printResults();
      }
    });

    response.on( 'error', function ( error ) {
      return console.error( 'ERROR', error );
    });
  });
};

callUrls();