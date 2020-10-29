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
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    })
};

appendData(tableData);

// ------- Event listener --------