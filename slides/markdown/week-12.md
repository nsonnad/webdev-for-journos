# Now that we have scales, time to add data!

---

# Using scales, we can convert data to various SVG attributes

- `rect`: x, y, width, height
- `circle`: cx, cy, r
- `line`: x1, x2, y1, y2
- `path`: d

---

# Let's inspect some examples

---

# With D3, we can set all of these attributes with the familiar method:

```javascript
.attr("[ATTRIBUTE]", (d) => { [SOMETHING WITH DATA] })
```

---

# e.g.

```javascript
svg.selectAll("rect")
   .data(gunData)
   .join("rect")
   .attr("x", xScale(0))
   .attr("y", (d) => { return yScale(d.Country) })
   .attr("width", (d) => { return xScale(d.Value) })
   .attr("height", yScale.bandwidth() - 2)
```

---

# Exercise: Add circles to a line chart

1. Copy and paste code for this line chart (make sure to use d3 v6)
2. Add code at the bottom to append a circle for each data point, using the
   scales that already exist in the code

---

# Project work!

Goals:

1. Load your data (uploaded to GitHub) into your JavaScript file
2. Visualize data using the scales you already created
