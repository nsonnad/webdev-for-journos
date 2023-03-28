# Week 8 – Chart project 2 (plus some stuff about SVG)

---

# SVG: what and why

- SVG is a way to represent "graphics" in web browsers
- It is an open and cross-compatible graphics format (can be opened with various software)
- SVG allows for more precise placement and positioning of elements than standard HTML
- Graphics are "vector" which means they can be scaled up or down without losing quality
- SVG graphics can still be styled with CSS, which is very convenient

---

# SVG is structured a lot like HTML

- Like html, we have:

```
<element attribute="value"></element>
```

- Attributes are more important and used more often in SVG than in HTML

---

# e.g.

```
<rect x="180" y="13" width="25" height="87"></rect>
```

---

Let's inspect a [bar chart](https://d3-graph-gallery.com/graph/barplot_horizontal.html)

---

# For data visualization, you'll only need a few elements

- `<circle>` (scatterplot)
- `<rect>` (bars)
- `<line>` (line chart)
- `<path>` (also line chart)
- `<text>` (annotation)
- `<g>` (grouping elements together)

---

# These elements will be given some common attributes to determine look and placement to represent data

- `fill` (color)
- `x`
- `y`
- `width`
- `height`
- `cx` (circle x)
- `cy` (circle y)
- `r` (circle radius)
- etc.

---

# Most attributes will be determined programmatically based on the data, as you saw in your homework

---

# Homework – Questions and discussion

[Invert SVG elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/invert-svg-elements)

---

# Project time: Questions?
