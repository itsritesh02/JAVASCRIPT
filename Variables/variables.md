# Variables

## Definition

A variable is a named container used to store data in memory.
It allows us to store, access, reuse, and modify values during program execution.

---

## Why do we use Variables?

- Store data
- Reuse data
- Update data

---

## Syntax

```javascript
let name = "Ritesh";
const age = 22;
var city = "Delhi";
```

---

## Types of Variables

### 1. var
- Function Scope
- Can be redeclared
- Can be reassigned
- Avoid using in modern JavaScript

### 2. let
- Block Scope
- Cannot be redeclared
- Can be reassigned
- Most commonly used

### 3. const
- Block Scope
- Cannot be redeclared
- Cannot be reassigned
- Use by default

---

## Example

```javascript
let name = "Ritesh";
let age = 22;

console.log(name);
console.log(age);
```

Output

```
Ritesh
22
```

---

## Interview Questions

### Q1. What is a Variable?

A variable is a named container used to store data in memory.

---

### Q2. Why do we use Variables?

Variables are used to store, reuse, and modify data.

---

### Q3. Which variable should we use?

- const → Default choice
- let → When value changes
- var → Avoid

---

## Important Points

✔ Stores data

✔ Has a name and value

✔ Use const whenever possible

✔ Use let if value changes

✔ Avoid var

---

## Summary

- Variable = Container for storing data.
- JavaScript has three variable keywords:
  - var
  - let
  - const
- Prefer **const** and **let** in modern JavaScript.