const multiplicationTable = function(maxValue) {
  // Your code here

  let result=[];
  for (let i=1; i<=maxValue; i++) {
    let single=[];  
    for (let x=1; x<=maxValue; x++) {
      single.push(x*i);
    }
    result.push(single.join(" "));
    //console.log(result);
  }
  return result.join("\n");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));