const repeatNumbers = function(data) {
  // Put your solution here
  let output=[];
  for (let array of data) {
    //console.log("array");
    let temp =[];
    for (let i=0; i<array[1]; i++) {
      temp = temp+(array[0]);
      //console.log(array[0]);
    }
    output.push(temp);
    //console.log(temp);
  }
  return output.join(",");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));