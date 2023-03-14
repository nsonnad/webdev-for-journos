# JavaScript and Data 2

---

# Review: JavaScript objects

- How do we write them?
- What types of values can we put in them?
- How do we get values out of them?
- What are the differences, pros/cons of arrays vs. objects?

---

# Record collection -- how'd it go?

---

# Quick intro to JavaScript "libraries"

---

Libraries are pre-written code that have already figured out how to do things, so we don't have to

---

A library provides an "API" (application programming interface, but that's not important) we can use to do things with

---

- Libraries can be anything from very big (doing lots of things) to very small (doing one thing).
- This "library" concept exists in nearly all programming languages

---

# Example: [D3](https://d3js.org/) (Data-Driven Documents)

- Originally created by the NYTimes graphics department for data visualization work
- A set of _many_ tools to aid in analyzing and presenting data with JavaScript
- Essentially, a way to inject data into our HTML/CSS

---

- *Problem*: We want to work with our data in JavaScript, but we have it in CSV format
- *Solution*: Let's look at d3's API

(side note: why CSV and not XLSX?)

---

# follow-along

- Clone my GitHub repo!
- using `d3.csv` to load data

---

# Review: Using JavaScript to create HTML elements

- `document.querySelector`
- `document.createElement`
- `element.appendChild`

---

# Exercise~

1. Find some interesting but simple data (no more than 3 columns) that would make for a compelling table
2. Do any analysis or preparation of the data in Excel, Python, Google Sheets, whatever you want
3. Export data as a CSV file
4. Use D3 to load your CSV into the JS file we worked on earlier
5. Turn this data into an HTML table using the boilerplate code in `script.js`, using what you know about arrays, objects, and HTML
6. *Bonus*: style your page to look more like a news article, and write a headline and short intro for your table

