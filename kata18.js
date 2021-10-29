const squareCode = function(message) {
  // Put your solution here
  let i = message.replace(/ /g, '');
  let j = i.length;
  let columns = Math.ceil(Math.sqrt(j));
  let row = columns - 1;
  let square = [];

  if (row * columns < j) {
    row +=1;
  }
  
  for (let x = 0; x < row; x ++) {
    let array = [];
    for (let y = 0; y < columns; y ++) {
      array.push(i[y+x*columns]);
    }
    square.push(array);
  }

  let result = [];
    
  for (let k = 0; k < columns; k ++) {
    let array = [];
    for (let l = 0; l < row; l ++) {
      if (square[l][k]) {
      array.push(square[l][k]);
      }
    }
    result.push(array.join(''));
  }
  return result.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));