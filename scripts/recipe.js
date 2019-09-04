// Generate html to display the recipe for a block

/* Example recipe html
<div class='center' title='2x Carbite Ore'>
  <div style='display:inline-block>
    <span>2x</span>
    <img alt='CarbiteOre.png' src='images/recipe/20px-CarbiteOre.png' width='20px' height='20px'></img>
  </div>
</div>
 */

/* Example recipe
"recipe": [
  {
    "name": "Rubber Jelly",
    "id": 2,
    "count": 1
  },
  {
    "name": "Luxite Shard",
    "id": 31,
    "count": 2
  }
]
*/

function ingredientTitle(ingredient) {
  return ingredient.count + "x " + ingredient.name
}

function ingredientImageBaseFileName(ingredient) {
  return ingredient.name.replace(/ /g, "") + ".png"
}

// e.g
// for name: "Rubber Jelly"
// returns: 'images/recipe/20px-RubberJelly.png'
function ingredientImageFilePath(ingredient) {
return "images/recipe/20px-" + ingredientImageBaseFileName(ingredient)
}

//   <div>
//     <span>2x</span>
//     <img alt='CarbiteOre.png' src='images/recipe/20px-CarbiteOre.png' width='20px' height='20px'></img>
//   </div>
function ingredientHtml(ingredient) {
  return "<div style='display:inline-block'><span>" + ingredient.count + "</span><img alt='" + ingredientImageBaseFileName(ingredient) 
  + "' src='" + ingredientImageFilePath(ingredient) + "' width='20px' height='20px'></img></div>"
}

// Correct data property - image name miss-matches
// TODO: Make data and image names consistent
function fixIngredientName(ingredient) {
  const nameMap = {
    "Fibrewood Chunk": "Wood",
    "Seed A.I.": "SeedAI"
  }
  ingredient.name = nameMap[ingredient.name] ?
    nameMap[ingredient.name] :
    ingredient.name
}

// Build html to display recipe with icons representing ingredients
// TODO: Stop hacking in features and learn how to use templates etc
function recipeHtml(recipe) {
  var index, ingredient, title = "", html = "<div class='center' title='$(title)'>";

  for (index = 0; index < recipe.length; ++index) {
    ingredient = recipe[index];
    fixIngredientName(ingredient);
    title +=  (title ? ", " : "") + ingredientTitle(ingredient);
    html += ingredientHtml(ingredient);
  }
  
  html = html.replace("$(title)", title);
  html += "</div>";
  
  return html
}