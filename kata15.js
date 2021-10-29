const organizeInstructors = function(instructors) {
  // Put your solution here 
  let result = {};
  for ( let info of instructors) {
    let courseName = info.course;
    if (courseName in result) {
      result[courseName].push(info.name);
    } else {
      result[courseName] = [info.name];
    }
  }
  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));