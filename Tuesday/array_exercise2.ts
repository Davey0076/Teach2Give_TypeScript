type Ingredient = {
    name: string;
    quantity: string;

}

type Recipe = {
    title: string;
    ingredients: Ingredient[]
    instructions: string;
  };
  
  const processRecipe = (recipe: Recipe) => {
    // Do something with the recipe in here
  };
  
  processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
  //Object literal may only specify known properties, and 'ingredients' does not exist in type 'Recipe'.
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
  });