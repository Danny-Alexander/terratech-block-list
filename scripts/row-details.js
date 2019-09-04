/*
{{Block Infobox
| name            = The name of the block. This is the bold text at the top of the infobox.
| id              = The ID of the block within the game
| prefabname      = The name of the block within the game, for modding reference
| hp              = The maximum health of the block.
| mass            = The weight of the entire block.
| corp            = Corporation the block is assigned to. 
| license         = The associated license in the corp the block belongs to
| rarity          = The rarity of the Block
| blocklimit      = The amount of the block limit the block takes up on consoles
| ingredient1     = The name of the first ingredient
| ingredient1Uses = The number of times its needed
| ingredient2     = The name of the second ingredient
| ingredient2Uses = The number of times its needed
| ingredient3     = The name of the third ingredient
| ingredient3Uses = The number of times its needed
| ingredient4     = The name of the fourth ingredient
| ingredient4Uses = The number of times its needed
| ingredient5     = The name of the fifth ingredient
| ingredient5Uses = The number of times its needed
| ingredient6     = The name of the sixth ingredient
| ingredient6Uses = The number of times its needed
| value           = The purchase value
| scrapvalue      = The value of the block when it is scrapped
| traction        = Full / Partial / None
| energycapacity  = The highest storage capacity of a battery
| fuelcapacity    = The highest storage capacity of a fuel tank
| fuelrefill      = The rate at which fuel tanks refill fuel
| shotcooldown    = The time it takes for a shot to cool down
| shotspray       = The accuracy
| shotvelocity    = The projectile's velocity
| shotkickback    = The kickback of the projectile
| rotatespeed     = The speed at which a weapon rotates towards an enemy
| description     = The in-game description of a block
}}
*/

function wikiBlockInfoboxText(b) {
    var result = "";
    result += "{{Block Infobox\n";
    result += "| name            = " + b.block + "\n"; //The name of the block. This is the bold text at the top of the infobox.
    result += "| id              = " + b.id + "\n"; //The ID of the block within the game
    result += "| prefabname      = " + b.resource_name + "\n"; //The name of the block within the game, for modding reference
    result += "| hp              = " + b.health + "\n"; //The maximum health of the block.
    result += "| mass            = " + b.mass + "\n"; //The weight of the entire block.
    result += "| corp            = " + b.corp + "\n"; //Corporation the block is assigned to. 
    result += "| license         = " + "#no-data#" + "\n"; //The associated license in the corp the block belongs to
    result += "| rarity          = " + "#no-data#" + "\n"; //The rarity of the Block
    result += "| blocklimit      = " + "#no-data#" + "\n"; //The amount of the block limit the block takes up on consoles

    if (b.recipe) {
        if (b.recipe.length >= 1) {
            result += "| ingredient1     = " + b.recipe[0].name + "\n"; //The name of the first ingredient
            result += "| ingredient1Uses = " + b.recipe[0].count + "\n"; //The number of times its needed
        }
        result += "| ingredient2     = " + "#no-data#" + "\n"; //The name of the second ingredient
        result += "| ingredient2Uses = " + "#no-data#" + "\n"; //The number of times its needed
        result += "| ingredient3     = " + "#no-data#" + "\n"; //The name of the third ingredient
        result += "| ingredient3Uses = " + "#no-data#" + "\n"; //The number of times its needed
        result += "| ingredient4     = " + "#no-data#" + "\n"; //The name of the fourth ingredient
        result += "| ingredient4Uses = " + "#no-data#" + "\n"; //The number of times its needed
        result += "| ingredient5     = " + "#no-data#" + "\n"; //The name of the fifth ingredient
        result += "| ingredient5Uses = " + "#no-data#" + "\n"; //The number of times its needed
        result += "| ingredient6     = " + "#no-data#" + "\n"; //The name of the sixth ingredient
        result += "| ingredient6Uses = " + "#no-data#" + "\n"; //The number of times its needed
    }
    result += "| value           = " + b.price + "\n"; //The purchase value
    result += "| scrapvalue      = " + "#no-data#" + "\n"; //The value of the block when it is scrapped
    result += "| traction        = " + "#no-data#" + "\n"; //Full / Partial / None
    result += "| energycapacity  = " + "#no-data#" + "\n"; //The highest storage capacity of a battery
    result += "| fuelcapacity    = " + "#no-data#" + "\n"; //The highest storage capacity of a fuel tank
    result += "| fuelrefill      = " + "#no-data#" + "\n"; //The rate at which fuel tanks refill fuel
    result += "| shotcooldown    = " + "#no-data#" + "\n"; //The time it takes for a shot to cool down
    result += "| shotspray       = " + "#no-data#" + "\n"; //The accuracy
    result += "| shotvelocity    = " + "#no-data#" + "\n"; //The projectile's velocity
    result += "| shotkickback    = " + "#no-data#" + "\n"; //The kickback of the projectile
    result += "| rotatespeed     = " + "#no-data#" + "\n"; //The speed at which a weapon rotates towards an enemy
    result += "| description     = " + b.description + "\n"; //The in-game description of a block
    result += "}}"
    return result
}


/* Formatting function for row details */
function rowDetailsHtml ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr style="background-color: #ffffff;">'+
            '<td>Description:</td>'+
            '<td>'+d.description+'</td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td>ID:</td>'+
            '<td>'+d.id+'</td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td>Wiki Block Infobox:</td>'+
            '<td><code>' + wikiBlockInfoboxText(d) + '</code></td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td>Resource name:</td>'+
            '<td>'+d.resource_name+'</td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td>Enum ID:</td>'+
            '<td>'+d.enum_id+'</td>'+
        '</tr>'+
    '</table>';
}