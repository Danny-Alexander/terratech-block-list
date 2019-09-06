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
    result += "| license         = " + (b.grade + 1) + "\n"; //The associated license in the corp the block belongs to
    result += "| rarity          = " + "#no-data#" + "\n"; //The rarity of the Block
    result += "| blocklimit      = " + "#no-data#" + "\n"; //The amount of the block limit the block takes up on consoles

    if (b.recipe) {
        var index, ingredient;
        for (index = 0; index < b.recipe.length; ++index) {
            ingredient = b.recipe[index];
            result += "| ingredient" + (index + 1) + "     = " + ingredient.name + "\n"; //The name of the ingredient
            result += "| ingredient" + (index + 1) + "Uses = " + ingredient.count + "\n"; //The number of times its needed
        }
    }
    result += "| value           = " + b.price + "\n"; //The purchase value
    result += "| scrapvalue      = " + "#no-data#" + "\n"; //The value of the block when it is scrapped
    result += "| traction        = " + "#no-data#" + "\n"; //Full / Partial / None

    result += (b.ModuleEnergyStore && b.ModuleEnergyStore.capacity) ? 
        "| energycapacity  = " + b.ModuleEnergyStore.capacity + "\n" : ""; //The highest storage capacity of a battery

    result += (b.ModuleFuelTank && b.ModuleFuelTank.capacity) ? 
        "| fuelcapacity    = " + b.ModuleFuelTank.capacity + "\n" : ""; //The highest storage capacity of a fuel tank
    
    result += (b.ModuleFuelTank && b.ModuleFuelTank.refill_rate) ? 
        "| fuelrefill      = " + b.ModuleFuelTank.refill_rate + "\n" : ""; //The rate at which fuel tanks refill fuel
    
    result += (b.ModuleWeapon && b.ModuleWeapon.shot_cooldown) ? 
        "| shotcooldown    = " + b.ModuleWeapon.shot_cooldown + "\n" : ""; //The time it takes for a shot to cool down
    
    result += (b.FireData && b.FireData.bullet_spray_variance) ? 
        "| shotspray       = " + b.FireData.bullet_spray_variance + "\n" : ""; //The accuracy
    
    result += (b.FireData && b.FireData.bullet_velocity) ? 
        "| shotvelocity    = " + b.FireData.bullet_velocity + "\n" : ""; //The projectile's velocity

    result += (b.FireData && b.FireData.damage) ? 
        "| damage          = " + b.FireData.damage + "\n" : ""; //The projectile's damage

    result += (b.FireData && b.FireData.damage_type) ? 
        "| damagetype      = " + b.FireData.damage_type + "\n" : ""; //The projectile's damage type
    
    result += (b.FireData && b.FireData.kickback_strength) ? 
        "| shotkickback    = " + b.FireData.kickback_strength + "\n" : ""; //The kickback of the projectile
    
    result += (b.ModuleWeapon && b.ModuleWeapon.rotate_speed) ? 
        "| rotatespeed     = " + b.ModuleWeapon.rotate_speed + "\n" : ""; //The speed at which a weapon rotates towards an enemy
    
    result += "| description     = " + b.description + "\n"; //The in-game description of a block
    result += "}}"
    return result
}


/* Formatting function for row details */
function rowDetailsHtml ( row ) {
    // `b` is the original data object for the row
    var b = row.data();
    // Create a unique ID element containing the wiki code e.g "wiki-block-infobox-2"
    var wikiCodeId = "wiki-block-infobox-" + row.index();

    console.log(wikiCodeId);
    
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr style="background-color: #ffffff;">'+
            '<td>Description:</td>'+
            '<td>'+b.description+'</td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td>ID:</td>'+
            '<td>'+b.id+'</td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td style="vertical-align: text-top;">Wiki Block Infobox:</td>'+
            '<td>'+
                '<div>'+
                    '<button class="btn" type="button" data-clipboard-target="#' + wikiCodeId + '">'+
                        '<img class="clippy" src="images/clippy.svg" width="13" alt="Copy to clipboard">'+
                    '</button>'+
                '</div>'+
                '<span id="' + wikiCodeId + '"style="white-space: pre; font-family: monospace;">'+
                    wikiBlockInfoboxText(b) + 
                '</span>'+
            '</td>'+
            // '<td><div><a>Copy to clipboard</a></div><span style="white-space: pre; font-family: monospace;">' + wikiBlockInfoboxText(b) + '</span></td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td>Resource name:</td>'+
            '<td>'+b.resource_name+'</td>'+
        '</tr>'+
        '<tr style="background-color: #ffffff;">'+
            '<td>Enum ID:</td>'+
            '<td>'+b.enum_id+'</td>'+
        '</tr>'+
    '</table>';
}