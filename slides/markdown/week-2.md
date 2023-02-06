---
theme: rose-pine-moon
---

# Week 2 – Setting some foundations

---

# First, a little (low-stakes) quiz!

---

### Spot the error #1

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first web page</p>
</html>
```

---

### Spot the error #1: Answer

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first web page</p>
  </body>
</html>
```

---

### Spot the error #2

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <a href=https://www.github.com>Visit Github</a>
  </body>
</html>
```

---
### Spot the error #2: Answer

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <a href="https://www.github.com">Visit Github</a>
  </body>
</html>
```

---

### Spot the error #3

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first web page
    <ul>
      <li>Item 1</li>
    </p>
    </ul>
  </body>
</html>
```

---

### Spot the error #3: Answer

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first web page
      <ul>
        <li>Item 1</li>
      </ul>
    </p>
  </body>
</html>
```

---

### Spot the error #4

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h2>
    <a href="https://www.github.com">Visit Github</a>
  </body>
</html>
```

---

### Spot the error #4: Answer

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <a href="https://www.github.com">Visit Github</a>
  </body>
</html>
```

---

### Spot the error #5

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h2>
    <a href="https://www.github.com">Visit Github</a>
    <img="mangoes.jpg" />
  </body>
</html>
```

---

### Spot the error #5: Answer

```html
<html>
  <head>
    <title>Really amazing web page</title>
  </head>
  <body>
    <h1>Hello World!</h2>
    <a href="https://www.github.com">Visit Github</a>
    <img src="mangoes.jpg" />
  </body>
</html>
```

---

### Spot the error #6

```html
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <img src="mangoes.jpg">
    <p>This is my first web page</p>
</html>
```

---

### Spot the error #6: Answer

```html
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <img src="mangoes.jpg" />
    <p>This is my first web page</p>
</html>
```

---

### Luckily we don't have to do this on our own

VSCode and other fancy text editors tell us when things are wrong

---

### VSCode: Installing extensions and what they can do for us

Two ways to install:

- Command Palette: `Cmd+Shift+P`
- Extensions tab

---

### Let's try the more hackery way

We're going to use [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint&ssr=false#overview) to validate our HTML

```
ext install htmlhint.vscode-htmlhint
```

---

# Now let's look at our incorrect HTML

---

### More on VSCode extensions

There are LOTS of them for a whole range of things. Such as:

- Color schemes
- Language-specific error-checking
- Language- or library-specific code snippets
- Integration with other apps/services
- But, you should only need a few

---

### Theme time~

Open your homework and play around with installing some [themes](https://marketplace.visualstudio.com/search?target=VSCode&category=Themes&sortBy=Installs).
Find one that makes you feel at home 😌 (I'm using [One Monokai](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai))

When you've settled on one:

1. Make sure to uninstall any you don't want, otherwise your extensions will quickly become hard to manage
2. Share a screenshot and link on Slack!

---

### break, probably

---

# HTML elements: a run-down

---

# What elements do we know about?

---

## Understand that HTML elements are supposed to not only contain, but also
_describe_ our content

For our purposes down the road, it will be important that this description is
intuitive

---

## Example: "Semantic HTML"

Further reading: [freeCodeCamp: Semantic HTML5 Elements Explained](https://www.freecodecamp.org/news/semantic-html5-elements/)

---

## HTML Attributes: what do we know?

---

## The especially important attributes of `class` and `id`

---



- Git and Github and Github Desktop
- Semantic HTML
- VSCode tour and tips
