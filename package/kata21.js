let prompt = require("prompt-sync")();

// code below (replace this example)
let answer = prompt("Guess a number: ");
// Generate a number between 0 and 100, including 100
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const x = randomIntFromInterval(1, 100);
let times = 0;
let history = [];
let keepAsking = true;
while (keepAsking) {
  if(isNaN(answer)){
    console.log("Not a number! Try again!");
    answer = prompt("Guess a number: ");
  }else{
   keepAsking = guess();
  }
}
console.log("You got it! You took " + times + " attempts!");

function guess(){
  if(answer===x.toString()){
    times++;
    return false;
  }
  for (let i = 0; i < history.length; i++) {
    if (answer === history[i]) {
      console.log("Already guessed!");
      return true;
    }
  }
  if (answer < x) {
    console.log("Too low!");
    times += 1;
    history.push(answer);
  } else if (answer > x) {
    console.log("Too High!");
    history.push(answer);
    times += 1;
  }
  answer = prompt("Guess a number: ");
  return true;
}