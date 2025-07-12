
const [first] = process.argv.slice(2);

if(!first){
  console.log('No argument');
} else {
  console.log(first);
}

