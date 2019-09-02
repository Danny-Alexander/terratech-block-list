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
            "render": function (data, type, row, meta) {
                return type === 'display' ?
                    data.toLocaleString() + ' ฿฿' :
                    data;
            }
        },
        {
            "title": "Health",
            "data": "health",
            "render": function (data, type, row, meta) {
                return type === 'display' ?
                    data.toLocaleString() :
                    data;
            }
        },
        {
            "title": "Mass",
            "data": "mass",
            "render": function (data, type, row, meta) {
                return type === 'display' ?
                    data.toLocaleString() :
                    data;
            }
        },
        {
            "title": "Description",
            "data": "description",
            "render": function (data, type, row, meta) {
                return type === 'display' && data.length > 12 ?
                    '<span title="' + data + '">' + data.substr(0, 10) + '...</span>' :
                    data;
            }
        }
    ]
}