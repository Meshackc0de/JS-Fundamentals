//prints -my number: <first argument converted in integer> if the first argument can be converted
//if the argument can't be converted to an integer, print Not a number

const arg = process.argv.slice(2);

if(Number(arg[0])){
  console.log(`My number ${Number(arg[0])}`)

} else {
  console.log('Not a number');
}
