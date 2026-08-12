# JavaScript Modules

## Definition

Modules allow us to divide JavaScript code into multiple files.

Instead of writing the complete application in one file, we can create separate files for different functionality.

Example:

project
│
├── app.js
├── user.js
├── product.js
└── utils.js

---

# Why Do We Use Modules?

Modules help us to:

- Organize code
- Reuse code
- Maintain large applications
- Separate functionality
- Avoid unnecessary global variables
- Make code easier to understand

---

# Types of JavaScript Modules

There are mainly two module systems:

1. ES Modules
2. CommonJS Modules

---

# ES Modules

ES Modules use:

- `import`
- `export`

---

# Named Export

A Named Export allows us to export specific variables or functions.

### math.js

```javascript
export function add(a, b) {
    return a + b;
}