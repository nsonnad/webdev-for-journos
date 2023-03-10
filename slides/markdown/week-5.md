# JavaScript and data

---

# So what is "data", exactly?

---

For our purposes, data is: a set of individual values (i.e. data points) with a
predictable structure.

---

The same data can be expressed in many different formats. Some are better for
different things

---

Table:

| Rank | Country        | Population    |
|------|----------------|---------------|
| 1    | China          | 1,439,323,776 |
| 2    | India          | 1,380,004,385 |
| 3    | United States  |   331,449,281 |
| 4    | Indonesia      |   273,523,615 |
| 5    | Pakistan       |   220,892,340 |
| 6    | Brazil         |   213,445,417 |

---

CSV (comma-separated values)

```
Rank,Country,Population
1,China,"1,439,323,776"
2,India,"1,380,004,385"
3,United States,"331,449,281"
4,Indonesia,"273,523,615"
5,Pakistan,"220,892,340"
6,Brazil,"213,445,417"
```

---

Array of Arrays

```javascript
[
  [1,"China","1,439,323,776"],
  [2,"India","1,380,004,385"],
  [3,"United States","331,449,281"],
  [4,"Indonesia","273,523,615"],
  [5,"Pakistan","220,892,340"],
  [6,"Brazil","213,445,417"]
]
```

---

JSON (JavaScript Object Notation, we'll get to this next week)

```json
[
  {
    "Rank": 1,
    "Country": "China",
    "Population": "1,439,323,776"
  },
  {
    "Rank": 2,
    "Country": "India",
    "Population": "1,380,004,385"
  },
  {
    "Rank": 3,
    "Country": "United States",
    "Population": "331,449,281"
  },
  {
    "Rank": 4,
    "Country": "Indonesia",
    "Population": "273,523,615"
  },
  {
    "Rank": 5,
    "Country": "Pakistan",
    "Population": "220,892,340"
  },
  {
    "Rank": 6,
    "Country": "Brazil",
    "Population": "213,445,417"
  }
]
```

---

It's important to understand our data.

- What do we have and what do we need?
- What data types are represented? Are they correct?

---

In the course of doing data journalism, even if you're just _visualizing_ the
data, understanding what you need and how to prepare it properly is huge

---

Proper data prep can happen at many stages of the process of say making a web visualization in JavaScript

- Discussion with your source(s)
- During analysis in Excel, Python, R, etc
- In JavaScript itself

---

# One data structure: JavaScript Arrays.

What do we know about them?

---

# "methods" overview

- [ string ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

Demo / follow-along: Working with arrays in JavaScript

- `sort`
- `forEach`
- `map`
- `filter`

---

Working with HTML elements in JavaScript

- `document.querySelector`
- `document.createElement`
- `document.appendChild`

---

# Exercise

Let's turn `energyData` into an HTML table!

1. Look up "how do I make an HTML table" with google, ChatGPT etc to understand
   what the HTML should look like for a table
2. Write a function that takes an array of arrays and builds an HTML table

You'll need:

- a function like `createTable` or some such
- `Array.forEach`
- `document.querySelector`
- `document.createElement`
- `element.appendChild`

Hint: `console.log` is your friend! (And so am I.)

---


