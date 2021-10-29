const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let output={};
  if(change/2500>1){
    output["twentyDollar"]=Math.floor(change/2500);
    change = change%2500;
  }
  if(change/1000>1){
    output["tenDollar"]=Math.floor(change/1000);
    change = change%1000;
  }
  if(change/500>1){
    output["fiveDollar"]=Math.floor(change/500);
    change = change%500;
  }
  if(change/200>1){
    output["twoDollar"]=Math.floor(change/200);
    change = change%200;
  }
  if(change/100>1){
    output["oneDollar"]=Math.floor(change/100);
    change = change%100;
  }
  if(change/25>1){
    output["quarter"]=Math.floor(change/25);
    change = change%25;
  }
  if(change/10>1){
    output["dime"]=Math.floor(change/10);
    change = change%10;
  }
  if(change/5>1){
    output["nickel"]=Math.floor(change/5);
    change = change%5;
  }
  output["penny"]=change;
  return output;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));