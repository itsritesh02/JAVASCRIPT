# Strings

## Definition

A String is a sequence of characters used to store and represent text.

In JavaScript, strings are written inside single quotes (' '), double quotes (" "), or backticks (` `).

---

## Why do we use Strings?

- Store text data
- Display messages
- Manipulate text
- Handle user input

---

## Syntax

```javascript
let firstName = "Ritesh";
let lastName = 'Kumar';
let city = `Delhi`;
```

---

## Creating Strings

```javascript
let name = "Ritesh";
let course = 'MERN';
let language = `JavaScript`;
```

---

## String Methods

### length

Returns the length of a string.

```javascript
let name = "Ritesh";

console.log(name.length);
```

Output

```
6
```

---

### toUpperCase()

Converts string to uppercase.

```javascript
let name = "Ritesh";

console.log(name.toUpperCase());
```

Output

```
RITESH
```

---

### toLowerCase()

Converts string to lowercase.

```javascript
let name = "RITESH";

console.log(name.toLowerCase());
```

Output

```
ritesh
```

---

### trim()

Removes spaces from both ends.

```javascript
let name = "   Ritesh   ";

console.log(name.trim());
```

---

### includes()

Checks if a value exists.

```javascript
let language = "JavaScript";

console.log(language.includes("Script"));
```

Output

```
true
```

---

### startsWith()

Checks starting characters.

```javascript
console.log("JavaScript".startsWith("Java"));
```

---

### endsWith()

Checks ending characters.

```javascript
console.log("JavaScript".endsWith("Script"));
```

---

### indexOf()

Returns first index.

```javascript
let text = "JavaScript";

console.log(text.indexOf("S"));
```

Output

```
4
```

---

### slice()

Extracts part of a string.

```javascript
let text = "JavaScript";

console.log(text.slice(0,4));
```

Output

```
Java
```

---

### replace()

Replaces text.

```javascript
let text = "Hello World";

console.log(text.replace("World","Ritesh"));
```

Output

```
Hello Ritesh
```

---

### split()

Converts string into array.

```javascript
let text = "HTML,CSS,JS";

console.log(text.split(","));
```

Output

```
["HTML","CSS","JS"]
```

---

### concat()

Joins strings.

```javascript
let first = "Ritesh";
let last = "Kumar";

console.log(first.concat(" ",last));
```

---

## Template Literals

```javascript
let name = "Ritesh";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

## Interview Questions

### Q1. What is a String?

A string is a sequence of characters used to store text.

---

### Q2. How do you find the length of a string?

Using the length property.

```javascript
name.length
```

---

### Q3. Difference between slice() and substring()?

- slice() supports negative indexes.
- substring() does not support negative indexes.

---

### Q4. What is Template Literal?

Template literals use backticks (` `) and allow variable interpolation using `${}`.

---

## Important Points

✔ Strings are immutable.

✔ length is a property.

✔ Use template literals for string interpolation.

✔ Frequently used methods:
- length
- slice()
- trim()
- includes()
- replace()
- split()
- toUpperCase()
- toLowerCase()

---

## Summary

- String stores text data.
- Strings are immutable.
- JavaScript provides many built-in string methods.
- Template literals make string formatting easier.