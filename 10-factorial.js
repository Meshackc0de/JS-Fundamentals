function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = process.argv[2];

if (arg === undefined) {
  console.log('No argument');
} else {
  const num = parseInt(arg);
  console.log(factorial(num));
}

