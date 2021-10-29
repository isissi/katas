const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;

  for (let i of values) {
    if (condition === 'even' && i%2===0) {
     sum += i;
    } else if (condition === 'odd' && i%2!==0) {
      sum += i;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));