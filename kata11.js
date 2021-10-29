// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  let result = (4/3)*PI*radius*radius*radius;
  return result;
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let result = (1/3)*PI*radius*radius*height;
  return result;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let result = height*width*depth;
  return result;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let result=0;
  for (let shape of solids) {
    if (shape.type === 'sphere') {
      result += sphereVolume(shape.radius);
    } else if (shape.type === 'cone') {
      result += coneVolume(shape.radius, shape.height);
    } else if (shape.type === 'prism') {
      result += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return result;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);