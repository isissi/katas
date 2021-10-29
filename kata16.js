const makeCase = function(old_input, old_types) {
  // Put your solution here
  let result; 
  let input = old_input;
  let types = [];
  if(typeof old_types === "string"){
    //console.log("h");
    types.push(old_types);
  }else{
    types = old_types;
  }

  for (let type of types) {
  if (type === 'camel') {
    result = input.toLowerCase().split(' ');
    for (let i = 1; i< result.length; i ++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
    } 
    result = result.join('');
  } else if (type === 'pascal') {
    result = input.toLowerCase().split(' ');
    for (let i = 0; i< result.length; i ++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
    }
    result = result.join('');
  } else if (type === 'snake') {
      result = input.replace(/ /g, "_");
    } else if (type === 'kebab') {
      result = input.replace(/ /g, '-');
    } else if (type === 'title') {
      result = input.toLowerCase().split(' ');
    for (let i = 0; i< result.length; i ++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
      }
    result = result.join(' ');
    } else if (type === 'vowel') {
      result = input.replace(/i/g, 'I');
      result = result.replace(/a/g, 'A');
    } else if (type === 'consonant') {
      result = input.toUpperCase();
      result = result.replace(/I/g, 'i');
      result = result.replace(/A/g, 'a');
    } else if (type === 'upper') {
      result = input.toUpperCase();
    }
    input = result;
  }
  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));