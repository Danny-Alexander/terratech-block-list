
/* Example recipe html
<div class='center'>
  <div>
    <div>
      <div class='inline'>2x</div>
      <img alt='CarbiteOre.png' src='images/recipe/20px-CarbiteOre.png' width='20px' height='20px'></img>
    </div>
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


function recipeToHtml(recipe) {
  return "<div class='center' title='2x Carbite Ore'><div><div><span>2</span><img alt='CarbiteOre.png' src='images/recipe/20px-CarbiteOre.png' width='20px' height='20px'></img></div></div></div>"
}