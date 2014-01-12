// Challenge 5

var fs = require( 'fs' ),
  path = require( 'path' ),
  dirName = process.argv [ 2 ],
  fileTypeFilter = '.' + process.argv [ 3 ];

fs.readdir ( dirName, function ( err, list ) {

  list.forEach( function ( file ) {
    if ( path.extname( file ) === fileTypeFilter ) {
      console.log( file );
    }
  });

});