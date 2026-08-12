# JavaScript — Spread, Rest & Modules

## Spread Operator

### Definition

The Spread Operator `...` is used to expand or unpack values from an array or object.

### Easy Definition

Spread = Expand / Unpack

### Example

let arr = [1, 2, 3];

let copy = [...arr];

console.log(copy);

### Output

[1, 2, 3]

---

## Spread with Two Arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result);

### Output

[1, 2, 3, 4, 5, 6]

---

## Spread with Object

let user = {
    name: "Ritesh",
    age: 22
};

let copy = {
    ...user
};

console.log(copy);

### Output

{
    name: "Ritesh",
    age: 22
}

---

## Spread with Function

let numbers = [10, 20, 30];

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbers));

### Output

60

---

# Rest Operator

## Definition

The Rest Operator `...` is used to collect multiple values into a single array.

### Easy Definition

Rest = Collect / Pack

### Example

function test(...args) {
    console.log(args);
}

test(10, 20, 30);

### Output

[10, 20, 30]

---

## Rest with Normal Parameters

function test(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

test(10, 20, 30, 40, 50);

### Output

10
20
[30, 40, 50]

Rest parameter must always be the last parameter.

---

## Rest with Sum

function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));

### Output

60

---

## Rest with Array Destructuring

let numbers = [10, 20, 30, 40, 50];

let [first, ...rest] = numbers;

console.log(first);
console.log(rest);

### Output

10
[20, 30, 40, 50]

---

## Rest with Object Destructuring

let user = {
    name: "Ritesh",
    age: 22,
    city: "Rajpura"
};

let { name, ...details } = user;

console.log(name);
console.log(details);

### Output

Ritesh

{
    age: 22,
    city: "Rajpura"
}

---

# Spread vs Rest

| Spread | Rest |
|---|---|
| Expands values | Collects values |
| Unpacks values | Packs values |
| Used while passing values | Used while receiving values |
| Commonly used with arrays and objects | Commonly used with functions and destructuring |

### Easy Trick

Spread → Expand

Rest → Collect

---

# Shallow Copy

Spread creates a shallow copy, not a deep copy.

let user = {
    name: "Ritesh",
    address: {
        city: "Rajpura"
    }
};

let copy = {
    ...user
};

copy.address.city = "Delhi";

console.log(user.address.city);

### Output

Delhi

The reason is that nested objects can still share the same reference.

---

# Interview Questions — Spread & Rest

## Q1. What is Spread Operator?

### Answer

Spread Operator `...` is used to expand or unpack elements of an array or properties of an object.

---

## Q2. What is Rest Operator?

### Answer

Rest Operator `...` is used to collect multiple values into a single array.

---

## Q3. Difference between Spread and Rest?

### Answer

Spread expands values, while Rest collects values.

Spread → Expand

Rest → Collect

---

## Q4. Can Spread be used with Objects?

### Answer

Yes.

let user = {
    name: "Ritesh",
    age: 22
};

let copy = {
    ...user
};

---

## Q5. Can Rest be used in Functions?

### Answer

Yes.

function test(...args) {
    console.log(args);
}

---

## Q6. Can Rest Parameter be placed in the middle?

### Answer

No.

Rest parameter must be the last parameter.

Correct:

function test(a, b, ...rest) {
}

Wrong:

function test(...rest, a) {
}

---

## Q7. Does Spread create a Deep Copy?

### Answer

No.

Spread creates a shallow copy.

---

## Q8. Why is Spread used in React?

### Answer

Spread is commonly used to copy existing state and update specific properties without directly modifying the original object.

Example:

setUser({
    ...user,
    age: 23
});

---

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

import
export

---

# Named Export

math.js

export function add(a, b) {
    return a + b;
}

app.js

import { add } from "./math.js";

console.log(add(10, 20));

### Output

30

---

# Multiple Named Exports

math.js

export const pi = 3.14;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

Import:

import { pi, add, subtract } from "./math.js";

console.log(pi);
console.log(add(10, 20));
console.log(subtract(20, 10));

---

# Default Export

A module can have only one default export.

user.js

export default function getUser() {
    return "User Data";
}

Import:

import getUser from "./user.js";

console.log(getUser());

Default import does not require curly braces.

---

# Named Export vs Default Export

## Named Export

export function add(a, b) {
    return a + b;
}

Import:

import { add } from "./math.js";

## Default Export

export default function add(a, b) {
    return a + b;
}

Import:

import add from "./math.js";

---

# Rename Import

We can rename an imported value using `as`.

import { add as sum } from "./math.js";

console.log(sum(10, 20));

Here:

add → Original name

sum → New name

---

# Import Everything

We can import everything from a module using `*`.

import * as math from "./math.js";

console.log(math.add(10, 20));
console.log(math.pi);

Here `math` is a namespace object.

---

# CommonJS Modules

CommonJS is commonly used in Node.js applications.

CommonJS uses:

require()
module.exports

---

# CommonJS Export

math.js

function add(a, b) {
    return a + b;
}

module.exports = add;

Import:

app.js

const add = require("./math");

console.log(add(10, 20));

### Output

30

---

# CommonJS Multiple Exports

math.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};

Import:

const { add, subtract } = require("./math");

console.log(add(10, 20));
console.log(subtract(20, 10));

### Output

30
10

---

# ES Modules vs CommonJS

| ES Modules | CommonJS |
|---|---|
| import | require() |
| export | module.exports |
| Modern JavaScript | Traditional Node.js module system |
| Supports default export | Uses module.exports |
| Supports named exports | Commonly exports objects |

---

# MERN Example

ES Modules:

import express from "express";
import dotenv from "dotenv";

const app = express();

export default app;

CommonJS:

const express = require("express");

const app = express();

module.exports = app;

Important:

Do not randomly mix ES Modules and CommonJS syntax.

---

# Interview Questions — Modules

## Q1. What is a JavaScript Module?

### Answer

A module is a separate JavaScript file that contains reusable code such as functions, variables, classes, or objects.

---

## Q2. Why are Modules used?

### Answer

Modules are used to:

- Organize code
- Reuse code
- Maintain large applications
- Separate functionality
- Avoid unnecessary global variables

---

## Q3. What is ES Module?

### Answer

ES Module is the modern JavaScript module system that uses `import` and `export`.

---

## Q4. What is CommonJS?

### Answer

CommonJS is a module system commonly used in Node.js.

It uses:

require()
module.exports

---

## Q5. Difference between Named Export and Default Export?

### Answer

Named exports can export multiple values from a module.

export const name = "Ritesh";
export const age = 22;

Import:

import { name, age } from "./user.js";

Default export is generally used for one main value.

export default function user() {
}

Import:

import user from "./user.js";

---

## Q6. Can a file have multiple default exports?

### Answer

No.

A module can have only one default export.

But it can have multiple named exports.

---

## Q7. Can a file have multiple named exports?

### Answer

Yes.

export const name = "Ritesh";
export const age = 22;

export function greet() {
}

---

## Q8. What is require()?

### Answer

require() is used in CommonJS to import modules.

const express = require("express");

---

## Q9. What is module.exports?

### Answer

module.exports is used in CommonJS to export values from a module.

module.exports = add;

---

## Q10. Difference between export default and module.exports?

### Answer

`export default` belongs to the ES Module system, while `module.exports` belongs to the CommonJS module system.

---

# Output Based Interview Questions

## Question 1

math.js

export const x = 10;

app.js

import { x } from "./math.js";

console.log(x);

### Answer

10

---

## Question 2

math.js

export default function add(a, b) {
    return a + b;
}

app.js

import add from "./math.js";

console.log(add(10, 20));

### Answer

30

---

## Question 3

math.js

function add(a, b) {
    return a + b;
}

module.exports = add;

app.js

const add = require("./math");

console.log(add(5, 5));

### Answer

10

---

# Important Points

- Spread and Rest both use `...`.
- Spread means Expand.
- Rest means Collect.
- Spread can work with arrays and objects.
- Spread can be used in function calls.
- Rest can be used in function parameters.
- Rest can be used in destructuring.
- Rest parameter must be the last parameter.
- Spread creates a shallow copy.
- Modules allow us to split code into multiple files.
- ES Modules use `import` and `export`.
- CommonJS uses `require()` and `module.exports`.
- One module can have only one default export.
- A module can have multiple named exports.
- Do not randomly mix ES Module and CommonJS syntax.

---

# Quick Revision

Spread → Expand / Unpack

Rest → Collect / Pack

ES Module → import / export

CommonJS → require() / module.exports

---

# Most Important Interview Answers

## Spread

Spread Operator is used to expand or unpack values from an array or object.

## Rest

Rest Operator is used to collect multiple values into a single array.

## Difference

Spread expands values, while Rest collects values.

## Module

A JavaScript Module is a separate file containing reusable code.

## ES Module

ES Modules use `import` and `export`.

## CommonJS

CommonJS uses `require()` and `module.exports`.

## Named Export

Named exports allow multiple values to be exported from a module.

## Default Export

A module can have only one default export.

## Shallow Copy

Spread creates a shallow copy, so nested objects can still share references.

---

# Interview Tip

If interviewer asks:

"What is the difference between Spread and Rest?"

Answer:

Both use the same three-dot syntax `...`, but Spread is used to expand or unpack values, while Rest is used to collect multiple values into an array.

If interviewer asks:

"What are JavaScript Modules?"

Answer:

Modules allow us to split JavaScript code into separate reusable files. Modern JavaScript commonly uses ES Modules with `import` and `export`, while CommonJS uses `require()` and `module.exports`.