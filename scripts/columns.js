
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

function dataTableColumns() {
    return [
        {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": '',
            "render": function () {
                return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
            },
            width: "15px"
        },
        {
            "title": "Name",
            "data": "block"
        },
        {
            "title": "Category",
            "data": "category"
        },
        {
            "title": "Corp",
            "data": "corp"
        },
        {
            "title": "Grade",
            "data": "grade"
        },
        {
            "title": "Price",
            "data": "price",
            "render": displayLocalisedPrice
        },
        {
            "title": "Health",
            "data": "health",
            "render": displayLocalisedNumber
        },
        {
            "title": "Mass",
            "data": "mass",
            "render": displayLocalisedNumber
        },
        {
            "title": "Description",
            "data": "description",
            "render": displayShortenedTextAndTooltip
        }
    ]
}