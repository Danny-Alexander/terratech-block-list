/* calculated-stats.js 
    
    Functions to work out TerraTech properties from other properties

*/

// Block Scrap value is price / 3
// ToDo: Check that rounding down is accurate
function priceToScrapValue(price){
    return Math.floor(price / 3);
}