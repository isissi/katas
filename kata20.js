const blocksAway = function(directions) {
  // Put your solution here
  let result = {east: 0, north: 0};
  let vetor = [];
  if (directions[0] === 'left') {
    vector = [0, 1];
  } else if (directions[0] === 'right') {
    vector = [1, 0];
  }
  result.east += vector[0] * directions[1];
  result.north += vector[1] * directions[1];

  for (let a = 2; a < directions.length; a +=2) {
    if (directions[a] === 'right') {
      let x = vector[0];
      vector[0] = vector[1];
      vector[1] = -x;
    } else if (directions[a] === 'left') {
      let x = vector[0];
      vector[0] = -vector[1];
      vector[1] = x;
    }
    result.east += vector[0] * directions[a+1];
    result.north += vector[1] * directions[a+1];
  }
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));