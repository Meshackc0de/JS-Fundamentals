//print 3 lines using an array of string and a loop

const facts = ['C is fun', 'Python is cool','JavaScript is amazing'];
let result = '';

for (let i = 0; i < facts.length; i++) {
  result += facts[i] + '\n';
}

console.log(result.trim());