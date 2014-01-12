var http = require( 'http' );

( function () {
  var url = process.argv[ 2 ];

  http.get( url, function ( response ) {
    response.on( 'data', function ( data ) {
      console.log( data.toString() );

      http.get( url, function ( response ) {
        response.pipe( bl( function ( err, data ) {

          var contents = data.toString();
          console.log(contents.length);
          console.log(contents);
        }) );
      });
    });
  });
}) ();