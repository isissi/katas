const urlDecode = function(text) {
  // Put your solution here
  let array = text.replace(/%20/g, ' ').split(/(?:=|&)+/);
  let result = {};
  for (let i = 0; i < array.length; i+=2) {
    result[array[i]] = array[i+1];
  }
 
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
