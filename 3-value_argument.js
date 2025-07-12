const argu = process.argv.slice(2);
console.log(argu);
if(argu.length === 0){
  console.log('No argument');
} else if (argu.length === 1){
  console.log(argu[0]);
}