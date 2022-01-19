function Recipe (title, steps) {
  var recipe = Object.create(Recipe.prototype);
  recipe.title = title;
  recipe.steps = steps;

  return recipe;
}

Recipe.prototype.cook = function () {
  var recipeString = '';
  this.steps.forEach(e => {
    if (typeof(e[0] != String) && e.length > 2) {
      if (e[3] === 'dry') recipeString += 'Add ' + e[0] + ' ' + e[1] + ' of ' + e[2] + ' to the bowl.\n ';
      else if (e[3] === 'wet') recipeString += 'Pour ' + e[0] + ' ' + e[1] + ' of ' + e[2] + ' into the bowl.\n ';
    }
    else if (e.length === 1) recipeString += '\n' + e[0] + '\n';
    else if (e.length === 2) recipeString += '\n Then, heat ' + e[1] + ' minutes in the oven at ' + e[0] + ' degrees.';
  });
  console.log(recipeString);
}

var stepsRecipe01 = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
];

var recipe01 = Recipe("Recipe01", stepsRecipe01);
recipe01.cook();