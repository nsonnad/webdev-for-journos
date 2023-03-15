const cuisineData = [
  { "cuisine": "Fruits/Vegetables", "avg_score": 49.69444444 },
  { "cuisine": "Creole", "avg_score": 42.12290503 },
  { "cuisine": "Indonesian", "avg_score": 41.61111111 },
  { "cuisine": "Filipino", "avg_score": 40.32743363 },
  { "cuisine": "Californian", "avg_score": 36 },
  { "cuisine": "Pakistani", "avg_score": 35.17647059 },
  { "cuisine": "Russian", "avg_score": 35.06293706 },
  { "cuisine": "African", "avg_score": 34.88197425 },
  { "cuisine": "Chinese/Japanese", "avg_score": 33.33797909 },
  { "cuisine": "Creole/Cajun", "avg_score": 32.86206897 },
  { "cuisine": "Southeast Asian", "avg_score": 32.16171004 },
  { "cuisine": "Bangladeshi", "avg_score": 31.79019074 },
  { "cuisine": "Eastern European", "avg_score": 30.73563218 },
  { "cuisine": "Greek", "avg_score": 29 },
  { "cuisine": "Ethiopian", "avg_score": 28.83018868 },
  { "cuisine": "Caribbean", "avg_score": 28.62597247 },
  { "cuisine": "Indian", "avg_score": 28.22626695 },
  { "cuisine": "Jewish/Kosher", "avg_score": 28.1826087 },
  { "cuisine": "Spanish", "avg_score": 27.8001514 },
  { "cuisine": "Portuguese", "avg_score": 27.78947368 },
  { "cuisine": "Asian/Asian Fusion", "avg_score": 27.6866132 },
  { "cuisine": "Middle Eastern", "avg_score": 27.37032843 },
  { "cuisine": "Latin American", "avg_score": 27.32832149 },
  { "cuisine": "Peruvian", "avg_score": 27.28368794 },
  { "cuisine": "Chinese", "avg_score": 26.99555376 },
  { "cuisine": "Vegan", "avg_score": 26.82374101 },
  { "cuisine": "New American", "avg_score": 26.71014493 },
  { "cuisine": "Mexican", "avg_score": 26.24512764 },
  { "cuisine": "Thai", "avg_score": 25.82380319 },
  { "cuisine": "Irish", "avg_score": 25.24 },
  { "cuisine": "French", "avg_score": 25.0520362 },
  { "cuisine": "Japanese", "avg_score": 25.01216 },
  { "cuisine": "Chicken", "avg_score": 24.69418133 },
  { "cuisine": "Chinese/Cuban", "avg_score": 24.69230769 },
  { "cuisine": "Mediterranean", "avg_score": 24.69201521 },
  { "cuisine": "Pizza", "avg_score": 24.30454896 },
  { "cuisine": "Fusion", "avg_score": 24.29166667 },
  { "cuisine": "Korean", "avg_score": 24.20204842 },
  { "cuisine": "Turkish", "avg_score": 24.11295681 },
  { "cuisine": "Soups", "avg_score": 23.95555556 },
  { "cuisine": "Australian", "avg_score": 23.94339623 },
  { "cuisine": "Bagels/Pretzels", "avg_score": 23.62092131 },
  { "cuisine": "Seafood", "avg_score": 23.57927461 },
  { "cuisine": "Juice, Smoothies, Fruit Salads", "avg_score": 23.510625 },
  { "cuisine": "Hawaiian", "avg_score": 23.35882353 },
  { "cuisine": "Bakery Products/Desserts", "avg_score": 23.32666667 },
  { "cuisine": "Hotdogs", "avg_score": 23.2967033 },
  { "cuisine": "Moroccan", "avg_score": 22.80769231 },
  { "cuisine": "Vegetarian", "avg_score": 22.47435897 },
  { "cuisine": "Steakhouse", "avg_score": 22.40753425 },
  { "cuisine": "Iranian", "avg_score": 22.30769231 },
  { "cuisine": "American", "avg_score": 22.30033722 },
  { "cuisine": "Sandwiches", "avg_score": 22.23903879 },
  { "cuisine": "Barbecue", "avg_score": 22.07480315 },
  { "cuisine": "Italian", "avg_score": 22.01965517 },
  { "cuisine": "Southwestern", "avg_score": 21.71428571 },
  { "cuisine": "Frozen Desserts", "avg_score": 21.56651584 },
  { "cuisine": "Not Listed/Not Applicable", "avg_score": 21.23076923 },
  { "cuisine": "Coffee/Tea", "avg_score": 20.83608059 },
  { "cuisine": "Sandwiches/Salads/Mixed Buffet", "avg_score": 20.73757455 },
  { "cuisine": "Other", "avg_score": 20.55694098 },
  { "cuisine": "Soul Food", "avg_score": 20.50753769 },
  { "cuisine": "Brazilian", "avg_score": 20.39393939 },
  { "cuisine": "English", "avg_score": 19.97142857 },
  { "cuisine": "Tex-Mex", "avg_score": 19.43432043 },
  { "cuisine": "Pancakes/Waffles", "avg_score": 18.55555556 },
  { "cuisine": "Egyptian", "avg_score": 18.38235294 },
  { "cuisine": "Polish", "avg_score": 17.62745098 },
  { "cuisine": "Czech", "avg_score": 17.5 },
  { "cuisine": "Afghan", "avg_score": 17.2739726 },
  { "cuisine": "Tapas", "avg_score": 17.09090909 },
  { "cuisine": "Cajun", "avg_score": 16.34782609 },
  { "cuisine": "Continental", "avg_score": 16.32926829 },
  { "cuisine": "Donuts", "avg_score": 15.3723548 },
  { "cuisine": "Bottled Beverages", "avg_score": 15.34513274 },
  { "cuisine": "Hamburgers", "avg_score": 15.27512924 },
  { "cuisine": "Salads", "avg_score": 14.47213115 },
  { "cuisine": "Hotdogs/Pretzels", "avg_score": 14.14285714 },
  { "cuisine": "German", "avg_score": 12.93478261 },
  { "cuisine": "Scandinavian", "avg_score": 12.8 },
  { "cuisine": "Chilean", "avg_score": 11.69230769 },
  { "cuisine": "New French", "avg_score": 11.2 },
  { "cuisine": "Soups/Salads/Sandwiches", "avg_score": 10.93975904 },
  { "cuisine": "Lebanese", "avg_score": 10.88888889 },
  { "cuisine": "Nuts/Confectionary", "avg_score": 7.4 },
  { "cuisine": "Armenian", "avg_score": 4.25 }
];

const table = document.querySelector("table");

// 1. `populateTable` function that receives all of our data
function populateTable(data) {
  // for each row in the data, run the `createTableRow` function,
  // passing it the data for that row in the table
  data.forEach(createTableRow);
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
  let row = document.createElement("tr")
  let cellCuisine = document.createElement("td")
  let cellScore = document.createElement("td")

  cellCuisine.textContent = rowData.cuisine;
  cellScore.textContent = rowData.avg_score;

  row.appendChild(cellCuisine)
  row.appendChild(cellScore)
  table.appendChild(row);
}

// function to create table headers from an array of header names
function createHeaders(headerNames) {
  let headerRow = document.createElement("tr")
  headerNames.forEach(function(name) {
    let th = document.createElement("th")
    th.textContent = name;
    headerRow.appendChild(th)
  })
  table.appendChild(headerRow);
}

createHeaders(["cuisine", "average score"]);
populateTable(cuisineData);