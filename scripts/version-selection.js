
function versionNameToDataSource(name) {
    return 'data/TerraTech/' + name + '/blocks.json'
}

function populateVersionDropdown() {
    // Adapted from https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
    let dropdown = $('#version-dropdown');

    dropdown.empty();

    const dataSource = 'data/versions.json';

    // Populate dropdown with list of TerraTech versions
    $.getJSON(dataSource, function (data) {
        // ToDo: Parse data and flag which version should be selected by default.
        // Select first version by default
        if (data.length > 0) {
            data[0].select = true;
            globalTableDataSource = versionNameToDataSource(data[0].name);
            // console.log('globalTableDataSource: ' + globalTableDataSource);
        };
        $.each(data, function (key, v) {
            dropdown.append($('<option' + (v.select ? ' selected' : '') + '></option>')
                .attr('value', versionNameToDataSource(v.name))
                .text(v.name));
        })
    });
    
    // console.log('globalTableDataSource: ' + globalTableDataSource);
    return globalTableDataSource
}