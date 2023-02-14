# Designing the web

Understanding CSS and what it does for us

---

# What CSS is for:

- How a web page "looks" overall
  - Colors, fonts, font sizes, spacing
  - Page layout
- Has nothing to do with the actual content of the page

---

# Questions on homework?

---

# Some fundamental CSS concepts we're going to discuss

1. selectors and properties
2. "responsive" design (mobile-first)
3. layouts

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

# Basic first CSS to apply

```css
html {
  max-width: 80ch;
  margin: 0 auto;
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
  font-size: 40px;
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

# CSS Properties

Let's list some!

---

# Quick note on colors

Colors can be represented in a few ways:

- hexadecimal value (`#0558ff`)
- red, blue, green, alpha (`rgba(5, 88, 255, 1)`)
- hue, saturation, lightness (`hsla(220, 100%, 51%, 1)`)

Recommended: [HSL Color Picker](https://hslpicker.com/)

---

# Any of these work fine

```css
h1 {
  color: rgba(41, 0, 15, 0.9);
}

.byline {
  color: #ff2e7b;
}
```

---

# Variables (in general and in CSS specifically)

---

# CSS variable syntax

```css
:root {
  --font-sans: Arial,Helvetica Neue,Helvetica,sans-serif;
}

body {
  font-family: var(--font-sans);
}
```

---

# The variable is just the "value", we give it the "property"

---

# CSS variables example: color scheme

```css
:root {
    --color-background: papayawhip;
    --color-text: #1c1c1c;
    --color-accent-1: #ac4dc7;
    --color-accent-2: #309775;
}

body {
    background-color: var(--color-background);
}

h1 {
    color: var(--color-accent-2);
}

p {
    color: var(--color-text);
}

a {
    color: var(--color-accent-1);
}

blockquote {
    border-left: 5px solid var(--color-accent-1);
}
```

---

# Why do this?

- The DRY principle: Don't Repeat Yourself
- Keep code organized

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

- apply my starting CSS
- byline
- blockquote
- style your table to make it look nicer
- use your color scheme
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

