//prints x times 'C is fun'
// x = first argument of the script
//If the first argument can’t be converted to an integer, print “Missing number of occurrences”
// use for loop
//You can use only two console.log

const arg = process.argv[2];
let x = parseInt(arg);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++){
    console.log('C is fun');
  }
}

