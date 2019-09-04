
function displayLocalisedNumber(data, type, row, meta) {
    return data == undefined ?
        '' :
        type === 'display' ?
            data.toLocaleString() :
            data;
}

function displayLocalisedPrice(data, type, row, meta) {
    return data == undefined ?
        '' :
        type === 'display' ?
            data.toLocaleString() + ' ฿฿' :
            data;
}

function displayShortenedTextAndTooltip(data, type, row, meta) {
    return data == undefined ?
        '' :
        type === 'display' && data.length > 12 ?
            '<span title="' + data + '">' + data.substr(0, 10) + '...</span>' :
            data;
}

function displayInlineRecipe(data, type, row, meta) {
    return data == undefined ?
        '' :
        type === 'display' ?
            recipeHtml(data) :
            data;
}

// Build and return a new DataTables column configuration object
// e.g 
// newColumn("ModuleDrill.damage_per_second", "number")
// returns:
// {
//     data: "ModuleDrill.damage_per_second",
//     title: "Damage Per Second",
//     visible: false,
//     render: displayLocalisedNumber
// }
function newColumn(data, valueType = 'string', visible = false, title) {
    const valueTypeRenderFunctions = {
        "number": displayLocalisedNumber,
        "price": displayLocalisedPrice,
        "long_string": displayShortenedTextAndTooltip,
        "recipe": displayInlineRecipe
    }
    var c = {
        "data": data,
        "title": (title == undefined)
            ? columnTitleFromDataPath(data)
            : title,
        "visible": visible,
        // Make blank any cells which represent json properties that don't exist
        "defaultContent": ''
    }
    if (valueTypeRenderFunctions[valueType]){
        c.render = valueTypeRenderFunctions[valueType];
    }
    return c
}

// Column configuration object for column with show/hide details buttons
function showHideDetailsColumn() {
    return {
        "className": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": '',
        "render": function () {
            return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
        },
        width: "15px"
    }
}

function dataTableColumns() {
    return [
        showHideDetailsColumn(),
        newColumn("block", "string", true, "Name"),
        newColumn("recipe", "recipe", true),
        newColumn("resource_name"),
        newColumn("description", "long_string"),
        newColumn("id", "string", true, "ID"),
        newColumn("enum"),
        newColumn("mass", "number", true),
        newColumn("corp_int", "number"),
        newColumn("corp", "string", true),
        newColumn("category_int", "number"),
        newColumn("category", "string", true),
        newColumn("grade", "string", true),
        newColumn("price", "price", true),
        newColumn("health", "string", true),

        
        newColumn("FireData.bullet_spray_variance", "number"),
        newColumn("FireData.bullet_velocity", "number"),
        newColumn("FireData.kickback_strength", "number"),
        newColumn("FireData.damage", "number"),
        newColumn("FireData.damage_type"),

        newColumn("ModuleDrill.damape_per_second", "number"),

        newColumn("ModuleEnergyStore.capacity", "number"),

        newColumn("ModuleFuelTank.capacity", "number"),
        newColumn("ModuleFuelTank.refill_rate", "number"),

        newColumn("ModuleShieldGenerator.radius", "number"),
        newColumn("ModuleShieldGenerator.initial_charge_energy", "number"),
        newColumn("ModuleShieldGenerator.energy_idle", "number"),
        newColumn("ModuleShieldGenerator.energy_shield", "number"),
        newColumn("ModuleShieldGenerator.energy_heal", "number"),
        newColumn("ModuleShieldGenerator.heal_interval", "number"),
        
        newColumn("ModuleWeapon.shot_cooldown", "number"),
        newColumn("ModuleWeapon.rotate_speed", "number")
    ]
}