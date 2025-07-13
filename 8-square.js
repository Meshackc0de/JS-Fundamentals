const arg = parseInt(process.argv[2]);

if (isNaN(arg) || arg < 0){
  console.log(' Missing size');

} else {
  for (let i = 0; i < arg; i++){
    console.log('X'.repeat(arg));

  }
}

