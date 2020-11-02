// from data.js
var tableData = data;

// Create References
var tbody = d3.select('tbody');
var button = d3.select('#filter-btn');
var inputFieldDate = d3.select('#datetime');
var columns = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

// Inpu data into HTML
var appendData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append('tr');
        columns.forEach(column => row.append('td').text(ufoSightings[column])
        )
    })
};

appendData(tableData);

// ------- Event listener --------

button.on('click', () => {
    d3.event.preventDefault();

    var inputDatetime = inputFieldDate.property("value").trim();

    var filterDatetime = tableData.filter(tableData => tableData.datetime === inputDatetime);
    
    tbody.html('');

    let response = {
        filterDatetime
    }

    if(response.filterDatetime.length !== 0) {
        addData(filterDatetime);
    }

    else {
        tbody.append('tr').append('td').text("No sightings...Choose Another....");
    }
})