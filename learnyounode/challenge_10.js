
var port = +process.argv[ 2 ],// remember that this is a str, so we need to convert it to a number
  net = require( 'net' ),
  server = net.createServer( function ( socket ) {

    var date = new Date();

    // This is pretty ugly. Probably would have been better with
    // two array joins - one for date, one for time
    var dateStr = date.getFullYear() + '-' +
      twoDigits((date.getMonth() + 1)) + '-' +
      twoDigits(date.getDate()) + ' ' +
      twoDigits(date.getHours()) + ':' +
      twoDigits(date.getMinutes()) + '\n';

    socket.write( dateStr );
    socket.end();

  });

var twoDigits = function ( input ) {
  return ( '0' + input).slice( -2 );
};


server.listen( port );
