var bl = require( 'bl'),
  http = require( 'http' );

(function () {
  var url = process.argv[ 2 ];

  http.get( url, function ( response ) {
    response.pipe( bl( function ( err, data ) {

      var contents = data.toString();
      console.log(contents.length);
      console.log(contents);
    }) );
  });
})();
