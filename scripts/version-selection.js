function populateVersionDropdown() {
    // Adapted from https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
    let dropdown = $('#version-dropdown');

    dropdown.empty();

    // dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
    // dropdown.prop('selectedIndex', 0);

    const dataSource = 'data/versions.json';

    // Populate dropdown with list of TerraTech versions
    $.getJSON(dataSource, function (data) {
        $.each(data, function (key, v) {
            dropdown.append($('<option></option>')
            .attr('value', v.name)
            .attr('dataLocation', 'data/TerraTech/' + v.name)
            .text(v.name));
        })
    });
}