# JavaScript Scope – Interview Questions & Answers

## Q1. What is Scope?

### Answer

**Scope** batata hai ki JavaScript me koi variable ya function **kahan access kiya ja sakta hai**.

Simple words:

> Scope defines the accessibility of variables and functions in JavaScript.

Example:

```javascript
let name = "Ritesh";

function greet() {
    console.log(name);
}

greet();
```

Output:

```text
Ritesh
```

`name` function ke andar accessible hai because it is in the outer scope.

---

# Q2. Types of Scope in JavaScript

JavaScript me mainly ye scopes important hain:

```text
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope
```

---

# Q3. What is Global Scope?

Jo variable kisi function ya block ke bahar declare hota hai, wo global scope me hota hai.

Example:

```javascript
let name = "Ritesh";

function greet() {
    console.log(name);
}

greet();
```

Output:

```text
Ritesh
```

`name` global scope me hai.

Isliye function ke andar access ho raha hai.

---

# Q4. Global Scope Example

```javascript
const age = 22;

console.log(age);

function test() {
    console.log(age);
}

test();
```

Output:

```text
22
22
```

Global variable ko inner scope access kar sakta hai.

---

# Q5. What is Function Scope?

Function ke andar declare kiya gaya variable function ke andar hi accessible hota hai.

Example:

```javascript
function test() {

    let message = "Hello";

    console.log(message);
}

test();
```

Output:

```text
Hello
```

Lekin:

```javascript
console.log(message);
```

Output:

```text
ReferenceError
```

Because `message` function scoped hai.

---

# Q6. Function Scope with var

`var` function scoped hota hai.

```javascript
function test() {

    var x = 10;

    console.log(x);
}

test();
```

Output:

```text
10
```

Function ke bahar:

```javascript
console.log(x);
```

Output:

```text
ReferenceError
```

---

# Q7. What is Block Scope?

`let` aur `const` block scoped hote hain.

Block means:

```javascript
{
    // block
}
```

Example:

```javascript
{
    let x = 10;

    console.log(x);
}
```

Output:

```text
10
```

Outside:

```javascript
console.log(x);
```

Output:

```text
ReferenceError
```

---

# Q8. Block Scope Example

```javascript
if (true) {

    let message = "Hello";

    console.log(message);
}
```

Output:

```text
Hello
```

But:

```javascript
console.log(message);
```

will give:

```text
ReferenceError
```

---

# Q9. Is `var` Block Scoped?

### No ❌

`var` block scoped nahi hota.

Example:

```javascript
if (true) {

    var x = 10;

}

console.log(x);
```

Output:

```text
10
```

Because `var` block ko ignore karta hai.

---

# Q10. `var` vs `let` Block Scope

## var

```javascript
{
    var a = 10;
}

console.log(a);
```

Output:

```text
10
```

## let

```javascript
{
    let a = 10;
}

console.log(a);
```

Output:

```text
ReferenceError
```

### Important

```text
var   → Function Scoped
let   → Block Scoped
const → Block Scoped
```

---

# Q11. What is Lexical Scope?

Lexical scope ka matlab hai ki variable ka access **code me uski position** se decide hota hai.

Example:

```javascript
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

Output:

```text
10
20
30
```

`inner()` access kar sakta hai:

```text
c → own scope
b → outer scope
a → global scope
```

---

# Q12. What is Scope Chain?

Agar JavaScript ko kisi variable ki value current scope me nahi milti, to wo outer scope me search karta hai.

Is process ko **Scope Chain** kehte hain.

Example:

```javascript
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

Search order:

```text
c
 ↓
inner scope
 ↓
outer scope
 ↓
global scope
```

---

# Q13. Scope Chain Example

```javascript
let name = "Global";

function outer() {

    let name = "Outer";

    function inner() {

        console.log(name);

    }

    inner();
}

outer();
```

Output:

```text
Outer
```

### Why?

`inner()` ko pehle apne scope me `name` nahi mila.

Then outer scope me mila:

```text
name = "Outer"
```

So it uses `"Outer"`.

---

# Q14. Variable Shadowing

Jab inner scope me same variable name declare hota hai jo outer scope me already exist karta hai, use **Shadowing** kehte hain.

Example:

```javascript
let name = "Global";

function test() {

    let name = "Local";

    console.log(name);
}

test();
```

Output:

```text
Local
```

Inner `name` outer `name` ko shadow kar raha hai.

---

# Q15. Shadowing Example

```javascript
let x = 10;

function test() {

    let x = 20;

    console.log(x);
}

test();

console.log(x);
```

Output:

```text
20
10
```

### Why?

Function ke andar:

```text
x = 20
```

Global:

```text
x = 10
```

Dono separate variables hain.

---

# Q16. Can `var` be Shadowed by `let`?

Different scopes me possible hai.

Example:

```javascript
var x = 10;

{
    let x = 20;

    console.log(x);
}

console.log(x);
```

Output:

```text
20
10
```

---

# Q17. Illegal Shadowing

Important interview question.

```javascript
let x = 10;

{
    var x = 20;
}
```

This gives:

```text
SyntaxError
```

### Why?

`let` aur `var` same scope rules ke saath conflict karte hain.

---

# Q18. Scope vs Hoisting

Dono different concepts hain.

### Scope

Batata hai:

> Variable kahan accessible hai?

### Hoisting

Batata hai:

> Declaration execution se pehle kaise process hoti hai?

Example:

```javascript
function test() {

    console.log(x);

    var x = 10;
}
```

Yahan:

```text
Scope → x function ke andar hai

Hoisting → var x declaration process hoti hai
```

Output:

```text
undefined
```

---

# Q19. Scope and `var`

```javascript
var x = 10;

function test() {

    var x = 20;

    console.log(x);
}

test();

console.log(x);
```

Output:

```text
20
10
```

Function ke andar wala `x` local hai.

---

# Q20. Scope and `let`

```javascript
let x = 10;

function test() {

    let x = 20;

    console.log(x);
}

test();

console.log(x);
```

Output:

```text
20
10
```

Same variable name hai, but separate scopes hain.

---

# Q21. Scope and `const`

```javascript
const x = 10;

{
    const x = 20;

    console.log(x);
}

console.log(x);
```

Output:

```text
20
10
```

Both `x` separate block scopes me hain.

---

# Q22. Nested Scope

Scope ke andar another scope ho sakta hai.

Example:

```javascript
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

Structure:

```text
Global Scope
    ↓
Outer Function Scope
    ↓
Inner Function Scope
```

---

# Q23. Can Inner Scope Access Outer Scope?

### Yes ✅

```javascript
let name = "Ritesh";

function outer() {

    let age = 22;

    function inner() {

        console.log(name);
        console.log(age);
    }

    inner();
}

outer();
```

Output:

```text
Ritesh
22
```

Inner scope outer variables ko access kar sakta hai.

---

# Q24. Can Outer Scope Access Inner Scope?

### No ❌

Example:

```javascript
function outer() {

    function inner() {

        let x = 10;

    }

    console.log(x);
}

outer();
```

Output:

```text
ReferenceError
```

Outer scope inner scope ke variables ko directly access nahi kar sakta.

---

# Q25. Important Rule

```text
Inner → Outer  ✅
Outer → Inner  ❌
```

Example:

```text
Global
   ↓
Function
   ↓
Block
```

Neeche wala scope upar access kar sakta hai.

Upar wala neeche wale ko directly access nahi kar sakta.

---

# Q26. Scope with Functions

Functions bhi scope create karte hain.

```javascript
function test() {

    let x = 10;

    function inner() {

        let y = 20;

        console.log(x);
        console.log(y);
    }

    inner();
}
```

`inner()`:

```text
x → outer scope
y → own scope
```

---

# Q27. Scope with `if`

```javascript
if (true) {

    let x = 10;

    console.log(x);
}
```

Output:

```text
10
```

But:

```javascript
console.log(x);
```

Output:

```text
ReferenceError
```

Because `let` block scoped hai.

---

# Q28. Scope with `for`

```javascript
for (let i = 0; i < 3; i++) {

    console.log(i);
}
```

Output:

```text
0
1
2
```

But:

```javascript
console.log(i);
```

Output:

```text
ReferenceError
```

`i` loop block ke andar scoped hai.

---

# Q29. `var` in for Loop

```javascript
for (var i = 0; i < 3; i++) {

    console.log(i);
}

console.log(i);
```

Output:

```text
0
1
2
3
```

Because `var` block scoped nahi hai.

---

# Q30. Scope and Closures

Closure scope se closely related hai.

Example:

```javascript
function outer() {

    let message = "Hello";

    return function inner() {
        console.log(message);
    };
}

const fn = outer();

fn();
```

Output:

```text
Hello
```

`inner()` outer scope ke `message` ko remember karta hai.

This is a **Closure**.

---

# Q31. Global Scope Pollution

Agar unnecessary variables global scope me create karte hain, to global namespace polluted ho sakta hai.

Bad:

```javascript
var userName = "Ritesh";
var age = 22;
var city = "Delhi";
```

Better:

```javascript
function getUser() {

    const userName = "Ritesh";
    const age = 22;
    const city = "Delhi";

}
```

Variables ko unnecessarily global scope me nahi rakhna chahiye.

---

# Q32. Why is Global Scope Dangerous?

Global variables ko multiple parts of application access/modify kar sakte hain.

Problems:

```text
1. Naming conflicts
2. Unexpected modifications
3. Hard debugging
4. Maintainability issues
5. Global namespace pollution
```

Large MERN applications me ye especially important hai.

---

# Q33. Module Scope

Modern JavaScript modules ka apna scope hota hai.

Example:

```javascript
const name = "Ritesh";

export { name };
```

Another file:

```javascript
import { name } from "./user.js";

console.log(name);
```

Module ke variables automatically global nahi hote.

---

# Q34. Scope in Node.js

Node.js me each CommonJS module ka apna module scope hota hai.

Example:

```javascript
const express = require("express");

const app = express();

const port = 5000;
```

`port` automatically global variable nahi ban jata.

---

# Q35. Scope in React

React components ke andar bhi scope important hai.

Example:

```javascript
function App() {

    const name = "Ritesh";

    return (
        <h1>{name}</h1>
    );
}
```

`name` component/function ke scope me hai.

---

# Important Output Questions ⭐⭐⭐⭐⭐

## Q1.

```javascript
let x = 10;

function test() {
    let x = 20;
    console.log(x);
}

test();
```

Output:

```text
20
```

---

## Q2.

```javascript
let x = 10;

function test() {
    console.log(x);
}

test();
```

Output:

```text
10
```

---

## Q3.

```javascript
function test() {

    let x = 10;
}

console.log(x);
```

Output:

```text
ReferenceError
```

---

## Q4.

```javascript
var x = 10;

{
    var x = 20;
}

console.log(x);
```

Output:

```text
20
```

Because `var` block scoped nahi hai.

---

## Q5.

```javascript
let x = 10;

{
    let x = 20;
}

console.log(x);
```

Output:

```text
10
```

---

## Q6.

```javascript
let x = 10;

function outer() {

    let x = 20;

    function inner() {

        console.log(x);

    }

    inner();
}

outer();
```

Output:

```text
20
```

---

## Q7.

```javascript
let x = 10;

function outer() {

    function inner() {
        console.log(x);
    }

    inner();
}

outer();
```

Output:

```text
10
```

---

## Q8.

```javascript
function outer() {

    let x = 10;

    function inner() {
        let y = 20;
    }

    console.log(y);
}

outer();
```

Output:

```text
ReferenceError
```

---

# Most Important Interview Questions

```text
1. What is Scope?
2. What are the types of Scope?
3. What is Global Scope?
4. What is Function Scope?
5. What is Block Scope?
6. What is Lexical Scope?
7. What is Scope Chain?
8. What is Variable Shadowing?
9. What is Illegal Shadowing?
10. Is var function scoped?
11. Is let block scoped?
12. Is const block scoped?
13. Can inner scope access outer scope?
14. Can outer scope access inner scope?
15. Scope vs Hoisting?
16. Scope vs Closure?
17. What is Global Scope Pollution?
18. What is Module Scope?
19. Scope in Node.js?
20. Scope in React?
```

---

# Quick Revision

```text
GLOBAL SCOPE
    ↓
Accessible from inner scopes

FUNCTION SCOPE
    ↓
Created by functions
    ↓
var is function scoped

BLOCK SCOPE
    ↓
Created by { }
    ↓
let / const are block scoped

LEXICAL SCOPE
    ↓
Scope determined by code structure

SCOPE CHAIN
    ↓
Current scope → Outer scope → Global scope
```

---

# `var`, `let`, `const` Scope

| Keyword | Scope          |
| ------- | -------------- |
| `var`   | Function Scope |
| `let`   | Block Scope    |
| `const` | Block Scope    |

### Remember:

```text
var   → Function
let   → Block
const → Block
```

---

# Golden Rule ⭐

```text
Inner Scope
     ↓
Can access
     ↓
Outer Scope
```

But:

```text
Outer Scope
     ↓
Cannot directly access
     ↓
Inner Scope
```

---

# Scope vs Closure

### Scope

> Determines where a variable can be accessed.

### Closure

> Allows a function to remember and access variables from its outer lexical scope even after the outer function has finished.

Example:

```javascript
function outer() {

    let x = 10;

    return function inner() {
        console.log(x);
    };
}
```

Scope tells us `x` is available to `inner`.

Closure allows `inner` to retain access to `x`.

---

# Best Interview Answer

### Interviewer:

> What is Scope in JavaScript?

### Answer:

> "Scope determines where variables and functions can be accessed in JavaScript. The main types are global scope, function scope, and block scope. `var` is function scoped, while `let` and `const` are block scoped. JavaScript also uses lexical scoping, where an inner scope can access variables from its outer scopes through the scope chain."

---

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye ye topics strong karo:

```text
⭐⭐⭐⭐⭐

Global Scope
      ↓
Function Scope
      ↓
Block Scope
      ↓
var vs let vs const
      ↓
Lexical Scope
      ↓
Scope Chain
      ↓
Variable Shadowing
      ↓
Illegal Shadowing
      ↓
Closures
      ↓
Module Scope
      ↓
React Component Scope
      ↓
Node.js Module Scope
```

## One-Line Revision

```text
Scope = Variable kaha accessible hai.
```
