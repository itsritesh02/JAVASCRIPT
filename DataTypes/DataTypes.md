# Data Types

## Definition

A data type defines the type of value a variable can store.

In JavaScript, data types specify whether a value is a number, string, boolean, object, etc.

---

## Why do we use Data Types?

- To identify the type of data.
- To perform operations correctly.
- To avoid unexpected errors.

---

## Types of Data Types

JavaScript has **2 categories** of data types.

### 1. Primitive Data Types

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

### 2. Non-Primitive (Reference) Data Types

- Object
- Array
- Function

---

## Primitive Data Types

### String

Stores text.

```javascript
let name = "Ritesh";
```

---

### Number

Stores integer and decimal numbers.

```javascript
let age = 22;
let price = 99.99;
```

---

### Boolean

Stores true or false.

```javascript
let isLoggedIn = true;
```

---

### Undefined

A variable declared but not assigned a value.

```javascript
let city;

console.log(city);
```

Output

```
undefined
```

---

### Null

Represents an intentional empty value.

```javascript
let user = null;
```

---

### BigInt

Used for very large integers.

```javascript
let number = 12345678901234567890n;
```

---

### Symbol

Creates a unique value.

```javascript
let id = Symbol("id");
```

---

## Non-Primitive Data Types

### Object

Stores data as key-value pairs.

```javascript
let student = {
    name: "Ritesh",
    age: 22
};
```

---

### Array

Stores multiple values.

```javascript
let colors = ["Red", "Blue", "Black"];
```

---

### Function

A block of reusable code.

```javascript
function greet() {
    console.log("Hello");
}
```

---

## typeof Operator

Used to check the data type.

```javascript
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
```

Output

```
string
number
boolean
```

---

## Interview Questions

### Q1. What is a Data Type?

A data type defines the type of value that a variable can store.

---

### Q2. How many types of data types are there in JavaScript?

Two

- Primitive
- Non-Primitive

---

### Q3. Name all Primitive Data Types.

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

### Q4. What is the difference between Primitive and Non-Primitive?

Primitive data types store a single value and are immutable.

Non-Primitive data types store collections of values or objects and are mutable.

---

## Important Points

✔ JavaScript is a dynamically typed language.

✔ Primitive data types are immutable.

✔ Objects and Arrays are reference types.

✔ typeof is used to check the data type.

✔ typeof null returns "object" (this is a well-known JavaScript bug).

---

## Summary

- JavaScript has **2 categories** of data types.
- Primitive → String, Number, Boolean, Undefined, Null, BigInt, Symbol.
- Non-Primitive → Object, Array, Function.
- Use **typeof** to check the type of a value.