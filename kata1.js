const sumLargestNumbers = function(data) {
  // Put your solution here
  var array = data.sort(function(a, b) {
    return a - b;
  });
  var array2 = array.reverse();
  var sum = array2[0] + array2[1];
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));