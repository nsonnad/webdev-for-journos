# Designing the web

Understanding CSS and what it does for us

---

# What CSS is for:

- How a web page "looks" overall
  - Colors, fonts, font sizes, spacing
  - Importantly also, page layout
- Has nothing to do with the actual content of the page

---

# The basic structure of CSS is always the same

```css
selector {
  property: value;
}
```

---

# For example

```css
body {
  background-color: black;
}
```

---

# So what is a "selector"?

```css
selector {
  property: value;
}
```

---

# Select multiple elements using commas

```css
h1, h2, h3, h4 {
  font-weight: normal;
}
```

---

# Select elements by class or id using `.` and `#`

```css
.quote {
  font-style: italic;
}

#main-logo {
  fnt-size: 40px;
}
```

---

# This can all get quite specific

---

# Select elements with a given class/id

```css
p.quote {
  font-style: italic;
  color: gray;
}
```

---

# Select elements inside of other elements

```css
li a {
  text-decoration: none;
  color: purple;
}
```

---

# Selector hierarchy: Most specific takes precedent

```css
.quote {
  font-style: italic;
  color: gray;
}

p.quote {
  color: orange;
}

p.quote li {
  color: pink;
}
```

---

# Looking ahead: CSS selectors are also important in JavaScript

```js
// Select all elements with the class "quote"
var elements = document.querySelectorAll(".quote");

// Use forEach to attach an onclick event to each element
Array.from(elements).forEach(function(element) {
  element.onclick = function() {
    alert("You clicked a quote!");
  };
});
```

---

# Variables in general and in CSS

Keep things organized, makes changes clearer and quicker

---

# Variables

```css
:root {
  --color-background: papayawhip;
  --color-text: darkgrey;
  --color-accent-1: purple;
  --color-accent-2: lightblue;
}

body {
  background-color: var(--color-background);
}

p {
  color: var(--color-text);
}

a {
  color: var(--color-accent-1);
}

blockquote {
  color: var(--color-accent-2);
  border: 1px solid var(--color-accent-1);
}
```

---

# Exercise

1. Implement a color scheme system for your page using CSS variables
2. i.e., define color scheme variables and apply them to the elements of your page
3. Play around with the values of those variables until you like how things look

For inspo: https://coolors.co/palettes/trending

---

# Media queries and mobile

- People view web pages on all different kinds of devices
  - Phones
  - Laptops
  - Super big monitors
  - Tablets
  - etc
- Our pages should be legible and look good on all of these

---

# Using browsers' mobile preview functionality

---

# Setting different CSS based on device size: "media queries"

```css
/* Mobile devices */
@media (min-width: 320px) {
  /* styles for mobile devices */
}

/* Tablets */
@media (min-width: 768px) {
  /* styles for tablets */
}

/* Laptops and desktops */
@media (min-width: 1024px) {
  /* styles for laptops and desktops */
}
```

---

# Media queries demo

---

# "Mobile-first"

---

# Exercise

Let's make our page look better and mobile-friendly. Add the following:

- byline
- blockquote
- style your table to make it look nicer
- use your color scheme
- center your content on the page (`margin: 0 auto;`)
- start with mobile first, then scale up

---

# CSS to consider using/applying

- `margin`
- `padding`
- `line-height`
- `font-size`
- `width` and `max-width`

---

# CSS layouts

[Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

