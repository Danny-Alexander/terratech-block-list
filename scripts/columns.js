
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
            "data": "block",
            "title": "Name"
        },
        {
            "data": "category",
            "title": "Category"
        },
        {
            "data": "corp",
            "title": "Corp"
        },
        {
            "data": "grade",
            "title": "Grade"
        },
        {
            "data": "price",
            "title": "Price",
            "render": displayLocalisedPrice
        },
        {
            "data": "health",
            "title": "Health",
            "render": displayLocalisedNumber
        },
        {
            "data": "mass",
            "title": "Mass",
            "render": displayLocalisedNumber
        },
        {
            "data": "description",
            "title": "Description",
            "render": displayShortenedTextAndTooltip
        }
    ]
}