const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let bakery = bakeryA.concat(bakeryB);
  for (let ingredient of bakery) {
    if ((ingredient === recipes[0].ingredients[0]) && (ingredient === recipes[0].ingredients[1])) {
      return recipes[0].name;
    } else if ((ingredient === recipes[1].ingredients[0]) && (recipes[1].ingredients[1])) {
      return recipes[1].name;
    } else if ((ingredient === recipes[2].ingredients[0]) && (recipes[2].ingredients[1])) {
      return recipes[2].name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));