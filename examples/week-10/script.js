// SVG + D3 margin convention
const margin = {top: 20, right: 30, bottom: 40, left: 100},
    width = 900 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// boilerplate for setting up the SVG
let svg = d3.select("#dataviz")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);


















const gunData = [
    {
        "Country": "United States",
        "Value": 12394
    },
    {
        "Country": "Russia",
        "Value": 6148
    },
    {
        "Country": "Germany (FRG)",
        "Value": 1653
    },
    {
        "Country": "France",
        "Value": 2162
    },
    {
        "Country": "United Kingdom",
        "Value": 1214
    },
    {
        "Country": "China",
        "Value": 1131
    },
    {
        "Country": "Spain",
        "Value": 814
    },
    {
        "Country": "Netherlands",
        "Value": 1167
    },
    {
        "Country": "Italy",
        "Value": 660
    },
    {
        "Country": "Israel",
        "Value": 1263
    }
];

// const circleSizeScale = d3.scaleLinear()
//   .domain([0, 1000000])
//   .range([1, 25])

// scaleLinear
const xScale = d3.scaleLinear()
  .domain([0, 15000]) // input data 
  .range([0, width]) // visual display

// scaleBand
const yScale = d3.scaleBand()
  .domain(gunData.map(d => d.Country))
  .range([height, 0])

// color scale
const colorScale = d3.scaleLinear()
  .domain([2000, 15000])
  .range(["orange", "darkred"])

// use d3 to draw axes based on the scales
svg.append("g")
    .call(d3.axisLeft(yScale))

svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))

svg.selectAll("rect")
   .data(gunData)
   .join("rect")
   .attr("x", xScale(0))
   .attr("y", (d) => { return yScale(d.Country) })
   .attr("width", (d) => { return xScale(d.Value) })
   .attr("height", yScale.bandwidth() - 2)
   .attr("fill", (d => colorScale(d.Value)))