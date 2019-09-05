
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

// Display grade + 1 (grade starts at 1 not 0 in game)
function displayGrade(data, type, row, meta) {
    return data == undefined ?
        '' :
        type === 'display' ?
            (data + 1).toLocaleString() :
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
        "grade": displayGrade,
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
        newColumn("resource_name"),
        newColumn("description", "long_string"),
        newColumn("price", "price", true),
        newColumn("recipe", "recipe", true),
        newColumn("enum"),
        newColumn("mass", "number", true),
        newColumn("health", "string", true),
        newColumn("corp_int", "number"),
        newColumn("corp", "string", true),
        newColumn("grade", "grade", true),
        newColumn("category_int", "number"),
        newColumn("category", "string", true),
        newColumn("id", "string", true, "ID"),

        
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