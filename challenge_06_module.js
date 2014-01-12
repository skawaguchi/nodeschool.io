module.exports = function ( dirPath, extName, callBack ) {

  var fs = require( 'fs' ),
    path = require( 'path' );

  fs.readdir ( dirPath, function ( err, list ) {

    if ( err ) {
      return callBack( err, list );
    }

    list = list.filter( function ( file ) {
      return path.extname( file ) === '.' + extName;
    });

    callBack( null, list );


  });

};
