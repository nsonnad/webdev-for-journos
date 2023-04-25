# Week 10: Data visualization theory and practice

---

# Thoughts on video?

---

# As we've discussed, data visualization is the process of mapping data onto a visual medium

---

# Actually, this is really all it is. A good dataviz is simply a clear statement of what the data is

---

# In order for this statement to be accurate and truthful, we need the data to follow a sense of "scale". Some examples:

- bigger numbers translate into bigger visual elements
- a sense of linear time is conveyed by reading left to right, top to bottom, or however you want
- the visual distance between a value of 0 and 50 should be the same as between 50 and 100

---

# "Scale" is what makes a visualization both accurate and intuitive to our brains

---

# D3 makes working with scales really easy. Let's work on some examples together

---

# Scale types depend on underlying data

- Continuous: Linear, Time
- Ordinal: Band
- [d3 scale reference](https://github.com/d3/d3-scale)

---

# Structure of a D3 scale

- input _domain_
- output _range_
- the scale is then a function that converts _domain_ to _range_

---

# Let's try with a linear scale

---

# Time scales follow the same basic principle, except inputs are dates instead of numbers

- Note on the specific meaning of "date" in JavaScript

---

# Band scales for categorical data

---

# So, scale types and corresponding data types:

- linear: numbers
- time: dates
- band: strings

---

# Tell: what is everyone's data?

---

# Today's exercise:

1. On a piece of paper, make a sketch of your data visualization

Focus on:
- What will make the important visible?
- What does each axis represent? What do the domains look like for each?

2. When you're comfortable with your sketch, start a new project for your viz
3. Using the methods we talked about today, create the scales and draw the axes for your viz