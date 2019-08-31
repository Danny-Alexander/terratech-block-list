
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
        $.each(data, function (key, v) {
            dropdown.append($('<option></option>')
                .attr('value', versionNameToDataSource(v.name))
                .text(v.name));
        })
    });
}