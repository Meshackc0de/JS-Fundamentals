//print 3 lines using an array of string and a loop

const facts = ['C is fun', 'Python is cool','JavaScript is amazing'];


let i = 0;
let result = '';
while(i < facts.length){
  result += facts[i] + '\n' ;
  i++;
}
console.log(result.trim());