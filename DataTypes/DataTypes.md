
# JavaScript Data Types — Interview Notes

## 1. What is a Data Type in JavaScript?

A data type defines the type of value a variable can store in JavaScript.

JavaScript has two main categories of data types:
1. Primitive Data Types
2. Non-Primitive Data Types

## 2. What are Primitive Data Types?

Primitive data types represent single values. JavaScript has 7 primitive data types:

1. String — stores text
2. Number — stores numbers
3. Boolean — stores true or false
4. Undefined — variable declared but value not assigned
5. Null — represents an intentional absence of value
6. BigInt — stores very large integers
7. Symbol — creates unique identifiers

### Example

```javascript
let name = "Ritesh";       // String
let age = 22;              // Number
let isActive = true;       // Boolean
let city;                  // Undefined
let data = null;           // Null
let bigNumber = 123n;      // BigInt
let id = Symbol("id");     // Symbol
```

## 3. What are Non-Primitive Data Types?

Non-primitive data types organize data into structures or collections.

Common examples:
- Object
- Array
- Function

### Example

```javascript
// Object
let user = {
  name: "Ritesh",
  age: 22
};

// Array
let fruits = ["Apple", "Mango", "Banana"];

// Function
function greet() {
  console.log("Hello");
}
```

## 4. Difference Between Primitive and Non-Primitive

| Primitive | Non-Primitive |
|---|---|
| Represents individual values | Organizes data into structures |
| Examples: String, Number, Boolean | Examples: Object, Array, Function |
| Values are copied by value | Objects are handled through references |

## 5. What is typeof in JavaScript?

The typeof operator checks the type of a value.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 100);    // number
console.log(typeof true);   // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);   // object
console.log(typeof {});     // object
console.log(typeof []);     // object
```

Note: typeof null returns "object" because of a historical JavaScript quirk.

To check whether a value is an array:

```javascript
console.log(Array.isArray([])); // true
```

## 6. Common Interview Questions

### Q1. How many primitive data types are there?

There are 7 primitive data types: String, Number, Boolean, Undefined, Null, BigInt, and Symbol.

### Q2. What is the difference between null and undefined?

- undefined: A variable has been declared but has not been assigned a value.
- null: Represents an intentional absence of a value.

### Q3. What is a dynamically typed language?

JavaScript is dynamically typed because a variable can hold different types of values at different times.

```javascript
let value = 10;
value = "Hello";

console.log(value); // Hello
```

### Q4. What is a data type?

A data type defines the kind of value a variable can store in JavaScript.

## 7. Short Interview Answer

A data type defines the type of value a variable can store in JavaScript. JavaScript has two main categories: Primitive and Non-Primitive data types. The 7 primitive types are String, Number, Boolean, Undefined, Null, BigInt, and Symbol. Common non-primitive types include Objects, Arrays, and Functions. JavaScript is dynamically typed, so a variable can hold different types of values at different times.
