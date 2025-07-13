//print 3 lines using an array of string and a loop

const facts = ['C is fun', 'Python is cool','JavaScript is amazing'];

// for(let i = 0; i < facts.length; i++){
//   console.log(facts[i]);
// }
let i = 0;
let result = '';
while(i < facts.length){
  result += facts[i] + '\n' ;
  i++;
}
console.log(result.trim());