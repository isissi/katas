const urlEncode = function(text) {
  // Put your solution here
  let result = text.replace(/ /g, '%20');
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));