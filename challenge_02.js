// Challenge 2

// If the item is not a number, return empty string (as per expected)
if (isNaN(process.argv [ 2 ])) {
  console.log('');
}

// Process the numbers and return the sum
var sum = 0;

for ( var i = 2, iLen = process.argv.length; i < iLen; i++ ) {
  var arg = +process.argv [ i ];

  if ( ! isNaN(arg)) {
    sum += arg;
  }
}

console.log(sum);