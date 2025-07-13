const arg = parseInt(process.argv[2]);

if (isNaN(arg)) {
  console.log('Missing size');
} else if (arg > 0) {
  let i = 0;
  while (i < arg) {
    console.log('X'.repeat(arg));
    i++;
  }
}

