const arg1 = process.argv[2];
const arg2 = process.argv[3];

function add(a, b) {
  
  const numA = parseInt(a);
  const numB = parseInt(b);

  
  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return NaN; 
  } else {
    return numA + numB; 
  }
}
console.log(add(arg1, arg2));