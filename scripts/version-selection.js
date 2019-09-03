
function versionToDataSource(v) {
    return 'data/TerraTech/' + v.version + '/' + v.branch + '.json'
}

function versionToDisplayText(v) {
    return v.version + ' (' + v.branch + ')'
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
                .attr('value', versionToDataSource(v))
                .text(versionToDisplayText(v)));
        })
        // Let the rest of the page know the selected version changed
        dropdown.trigger('change');
    });
}