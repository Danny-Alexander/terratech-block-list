
function displayLocalisedNumber(data, type, row, meta) {
    return type === 'display' ?
        data.toLocaleString() :
        data;
}

function displayLocalisedPrice(data, type, row, meta) {
    return type === 'display' ?
        data.toLocaleString() + ' ฿฿' :
        data;
}

function displayShortenedTextAndTooltip(data, type, row, meta) {
    return type === 'display' && data.length > 12 ?
        '<span title="' + data + '">' + data.substr(0, 10) + '...</span>' :
        data;
}

//https://repl.it/@jafkoop/Capitalize-first-letter-of-every-word-using-regex
//TODO: move these functions somewhere more appropriate
function upperCase(str) {
    return str.toUpperCase();
}
function titleCase(str) {
    let firstLetterRx = /(^|\s)[a-z]/g;
    return str.replace(firstLetterRx, upperCase);
}

function everythingFollowingLastDot(str) {
    let i = str.lastIndexOf('.');
    return (i != -1)
        ? str.substr(i + 1)
        : str
}

// Return a human readable title given a data path
// e.g
// return "Damage Per Second"
// when data = "ModuleDrill.damage_per_second"
function columnTitleFromDataPath(data) {
    let title = everythingFollowingLastDot(data);
    title = title.replace(/_/g, " ");
    title = titleCase(title);
    return title
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
        "long_string": displayShortenedTextAndTooltip
    }
    var c = {
        "data": data,
        "title": (title == undefined)
            ? columnTitleFromDataPath(data)
            : title,
        "visible": visible
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
        newColumn("description", "long_string", true),
        newColumn("id", "string", true, "ID"),
        // newColumn("enum"),
        newColumn("mass", "number", true),
        // newColumn("corp_int", "number"),
        newColumn("corp", "string", true),
        // newColumn("category_int", "number"),
        newColumn("category", "string", true),
        newColumn("grade", "string", true),
        newColumn("price", "price", true),
        newColumn("health", "string", true)

        
        // newColumn("FireData.bullet_spray_variance", "number"),
        // newColumn("FireData.bullet_velocity", "number"),
        // newColumn("FireData.kickback_strength", "number"),
        // newColumn("FireData.damage", "number"),
        // newColumn("FireData.damage_type", "string"),

        // newColumn("ModuleDrill.damape_per_second", "number"),

        // newColumn("ModuleEnergyStore.capacity", "number"),

        // newColumn("ModuleFuelTank.capacity", "number"),
        // newColumn("ModuleFuelTank.refill_rate", "number"),

        // newColumn("ModuleShieldGenerator.radius", "number"),
        // newColumn("ModuleShieldGenerator.initial_charge_energy", "number"),
        // newColumn("ModuleShieldGenerator.energy_idle", "number"),
        // newColumn("ModuleShieldGenerator.energy_shield", "number"),
        // newColumn("ModuleShieldGenerator.energy_heal", "number"),
        // newColumn("ModuleShieldGenerator.heal_interval", "number"),
        
        // newColumn("ModuleWeapon.shot_cooldown", "number"),
        // newColumn("ModuleWeapon.rotate_speed", "number")
    ]
}