function Recipe (title, steps) {
  var recipe = Object.create(Recipe.prototype);
  recipe.title = title;
  recipe.steps = steps;

  return recipe;
}

Recipe.prototype.cook = function () {
  console.log(this.steps[0]);
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