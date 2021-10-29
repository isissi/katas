const talkingCalendar = function(date) {
  // Your code here
  let part = date.split('/');
  part = part.map((i) => Number(i));
  let month = ['Januanry', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let a = month[part[1]-1];
  let c = part[0];
  let b = part[2];
  if ((part[2]===1) || (part[2]===21) || (part[2]===31)){
    b += 'st';
  } else if ((part[2]===2) || (part[2]===22)) {
    b += 'nd';
  } else if ((part[2]===3) || (part[2]===23)) {
    b += 'rd';
  } else {
    b += 'th';
  }
  
  return a + ' ' + b + ', ' + c;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));