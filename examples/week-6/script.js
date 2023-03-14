// Using what you know about ojbects, arrays, HTML, and CSS:
// Load a CSV file and turn it into a table

// Load data with D3
d3.csv("").then(populateTable)

const table = document.querySelector("table");

// 1. `populateTable` function that receives all of our data
function populateTable(data) {
  // for each row in the data, run the `createTableRow` function,
  // passing it the data for that row in the table
}


// 2. `createTableRow` function.
// this function should draw all HTML needed for a given
// row in our HTML table.
//
// So what does that actually look like? What elements are needed for each row?
//
// You'll need to use:
//
// - `document.createElement`
// - `textContent`
// - `appendChild`
function createTableRow(rowData) {
}
