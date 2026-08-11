# JavaScript Variables – Interview Questions & Answers

## Q1. What is a Variable?

### Answer

Variable ek container hota hai jo data/value ko store karta hai.

Example:

```javascript
let name = "Ritesh";
let age = 22;

console.log(name);
console.log(age);
```

Output

```text
Ritesh
22
```

### Interview me bolo

> "A variable is a named container used to store and reference a value in JavaScript."

---

# Q2. How do you declare a Variable?

JavaScript me variable declare karne ke liye mainly:

```text
var
let
const
```

use hote hain.

Example:

```javascript
var a = 10;
let b = 20;
const c = 30;
```

---

# Q3. Difference between var, let and const?

### Very Important ⭐⭐⭐⭐⭐

| Feature       | var      | let   | const |
| ------------- | -------- | ----- | ----- |
| Scope         | Function | Block | Block |
| Redeclaration | Yes      | No    | No    |
| Reassignment  | Yes      | Yes   | No    |
| Hoisting      | Yes      | Yes   | Yes   |
| TDZ           | No       | Yes   | Yes   |

### Example

```javascript
var a = 10;
a = 20;

let b = 30;
b = 40;

const c = 50;
// c = 60; ❌ Error
```

### Interview me bolo

> "`var` is function-scoped and can be redeclared and reassigned. `let` is block-scoped and can be reassigned but not redeclared in the same scope. `const` is block-scoped and cannot be reassigned."

---

# Q4. What is var?

### Answer

`var` JavaScript ka old way of declaring variables hai.

```javascript
var name = "Ritesh";

console.log(name);
```

`var`:

* Function scoped hai
* Redeclare ho sakta hai
* Reassign ho sakta hai
* Hoisted hota hai

---

# Q5. What is let?

### Answer

`let` modern JavaScript me variable declare karne ke liye use hota hai.

```javascript
let age = 22;

age = 23;

console.log(age);
```

Output

```text
23
```

`let`:

* Block scoped hai
* Reassign ho sakta hai
* Same scope me redeclare nahi ho sakta
* TDZ me hota hai

---

# Q6. What is const?

### Answer

`const` aise variable ke liye use hota hai jisko reassign nahi karna hai.

```javascript
const country = "India";

console.log(country);
```

Lekin:

```javascript
const country = "India";

country = "USA";
```

Error:

```text
TypeError: Assignment to constant variable
```

### Interview me bolo

> "`const` is used when a variable binding should not be reassigned."

---

# Q7. Can we change a const object?

### Answer

**Haan**, object ki properties change kar sakte hain.

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

user.age = 23;

console.log(user);
```

Output

```text
{
    name: "Ritesh",
    age: 23
}
```

But poora object reassign nahi kar sakte:

```javascript
const user = {
    name: "Ritesh"
};

user = {
    name: "Aman"
};
```

Error:

```text
TypeError: Assignment to constant variable
```

### Important

`const` object ko immutable nahi banata.

It prevents **reassignment of the variable binding**.

---

# Q8. What is Scope?

### Answer

Scope determine karta hai ki variable ko code ke kis part me access kiya ja sakta hai.

Main scopes:

```text
Global Scope
Function Scope
Block Scope
```

---

# Q9. What is Global Scope?

### Answer

Jo variable kisi function ya block ke bahar declare hota hai, wo generally global scope me available hota hai.

```javascript
let name = "Ritesh";

function greet() {
    console.log(name);
}

greet();
```

Output

```text
Ritesh
```

---

# Q10. What is Function Scope?

### Answer

`var` function scoped hota hai.

```javascript
function test() {

    var x = 10;

    console.log(x);
}

test();
```

Output

```text
10
```

Function ke bahar:

```javascript
console.log(x);
```

Error aayega.

### Interview me bolo

> "`var` is function-scoped, meaning it is accessible throughout the function in which it is declared."

---

# Q11. What is Block Scope?

### Answer

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
    let a = 10;
    const b = 20;

    console.log(a);
    console.log(b);
}
```

Block ke bahar:

```javascript
console.log(a);
```

Error.

### Interview me bolo

> "`let` and `const` are block-scoped, meaning they are accessible only inside the block where they are declared."

---

# Q12. Difference between Function Scope and Block Scope?

### Function Scope

```javascript
function test() {

    var a = 10;

}
```

`a` function ke andar available hai.

### Block Scope

```javascript
{
    let a = 10;
}
```

`a` sirf block ke andar available hai.

### Interview me bolo

> "Function scope is limited to a function, while block scope is limited to a block such as an if statement, loop, or standalone block."

---

# Q13. What is Variable Redeclaration?

### Answer

Same variable ko dobara declare karna redeclaration kehlata hai.

### var

Allowed:

```javascript
var a = 10;
var a = 20;

console.log(a);
```

Output

```text
20
```

### let

Not allowed:

```javascript
let a = 10;
let a = 20;
```

Error:

```text
SyntaxError
```

### const

Not allowed:

```javascript
const a = 10;
const a = 20;
```

Error:

```text
SyntaxError
```

---

# Q14. What is Reassignment?

### Answer

Existing variable ko new value dena reassignment kehlata hai.

### let

```javascript
let age = 20;

age = 25;

console.log(age);
```

Output:

```text
25
```

Allowed.

### var

```javascript
var age = 20;

age = 25;
```

Allowed.

### const

```javascript
const age = 20;

age = 25;
```

Not allowed.

---

# Q15. Difference between Redeclaration and Reassignment?

### Redeclaration

Variable ko dobara declare karna:

```javascript
var x = 10;
var x = 20;
```

### Reassignment

Existing variable ki value change karna:

```javascript
let x = 10;

x = 20;
```

### Easy Trick

```text
Redeclaration
    ↓
dobara declare

Reassignment
    ↓
value change
```

---

# Q16. What is Hoisting?

### Answer

JavaScript execution se pehle declarations ko process karta hai. Is behavior ko commonly hoisting kaha jata hai.

Example with `var`:

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

Conceptually isse aise samajh sakte ho:

```javascript
var a;

console.log(a);

a = 10;
```

### Interview me bolo

> "Hoisting is the behavior where JavaScript processes declarations before executing the code in that scope."

---

# Q17. Is let hoisted?

### Answer

Haan, `let` bhi hoisted hota hai, lekin declaration se pehle access nahi kar sakte.

Example:

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

Reason:

`let` declaration aur initialization ke beech **Temporal Dead Zone** me hota hai.

---

# Q18. Is const hoisted?

### Answer

Haan, `const` bhi hoisted hota hai, but declaration se pehle access nahi kar sakte.

```javascript
console.log(a);

const a = 10;
```

Output:

```text
ReferenceError
```

Reason:

`const` bhi Temporal Dead Zone me hota hai.

---

# Q19. What is Temporal Dead Zone (TDZ)?

### Answer

TDZ wo period hai jisme `let` ya `const` variable scope me exist karta hai, lekin declaration execute hone se pehle access nahi kiya ja sakta.

Example:

```javascript
console.log(a);

let a = 10;
```

Error:

```text
ReferenceError
```

### Simple Flow

```text
Scope start
    ↓
TDZ
    ↓
let a = 10
    ↓
Variable usable
```

### Interview me bolo

> "The Temporal Dead Zone is the period between entering a scope and the execution of a let or const declaration, during which accessing the variable causes a ReferenceError."

---

# Q20. Difference between var Hoisting and let/const Hoisting?

### var

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

### let

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

### const

```javascript
console.log(a);

const a = 10;
```

Output:

```text
ReferenceError
```

### Interview me bolo

> "`var` can be accessed before its declaration and gives undefined, while `let` and `const` cannot be accessed before their declaration because of the Temporal Dead Zone."

---

# Q21. Can we declare let without initialization?

### Answer

Yes.

```javascript
let age;

console.log(age);
```

Output:

```text
undefined
```

Later value assign kar sakte hain:

```javascript
age = 22;
```

---

# Q22. Can we declare const without initialization?

### Answer

No.

```javascript
const age;
```

Error:

```text
SyntaxError
```

`const` ko declaration ke time initialize karna compulsory hai.

Correct:

```javascript
const age = 22;
```

---

# Q23. Can var be declared without initialization?

### Answer

Yes.

```javascript
var age;

console.log(age);
```

Output:

```text
undefined
```

---

# Q24. What is Variable Shadowing?

### Answer

Jab inner scope me same name ka variable outer variable ko temporarily hide kar deta hai, use shadowing kehte hain.

Example:

```javascript
let name = "Ritesh";

{
    let name = "Aman";

    console.log(name);
}

console.log(name);
```

Output:

```text
Aman
Ritesh
```

### Interview me bolo

> "Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope."

---

# Q25. Can let and const be shadowed?

### Answer

Yes.

```javascript
let x = 10;

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

# Q26. What happens when var is used inside a block?

### Answer

`var` block scoped nahi hai.

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

Because `var` function scoped hai, block scoped nahi.

---

# Q27. What happens with let inside a block?

```javascript
if (true) {

    let x = 10;

}

console.log(x);
```

Output:

```text
ReferenceError
```

Because `let` block scoped hai.

---

# Q28. What is the recommended way to declare variables?

### Answer

Modern JavaScript me generally:

```text
const → default choice
let   → jab reassignment chahiye
var   → generally avoid in modern code
```

Example:

```javascript
const name = "Ritesh";

let age = 22;

age = 23;
```

### Interview me bolo

> "In modern JavaScript, I prefer const by default and use let when reassignment is required. I generally avoid var because of its function-scoped behavior."

---

# Important Output-Based Questions

## Q1.

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

---

## Q2.

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

---

## Q3.

```javascript
console.log(a);

const a = 10;
```

Output:

```text
ReferenceError
```

---

## Q4.

```javascript
var a = 10;

{
    var a = 20;
}

console.log(a);
```

Output:

```text
20
```

Reason:

`var` block scoped nahi hai.

---

## Q5.

```javascript
let a = 10;

{
    let a = 20;

    console.log(a);
}

console.log(a);
```

Output:

```text
20
10
```

---

## Q6.

```javascript
var a = 10;

var a = 20;

console.log(a);
```

Output:

```text
20
```

---

## Q7.

```javascript
let a = 10;

let a = 20;
```

Output:

```text
SyntaxError
```

---

## Q8.

```javascript
const a = 10;

a = 20;
```

Output:

```text
TypeError
```

---

## Q9.

```javascript
let a;

console.log(a);
```

Output:

```text
undefined
```

---

## Q10.

```javascript
const a;
```

Output:

```text
SyntaxError
```

---

# Tricky Interview Question ⭐⭐⭐⭐⭐

## Q11.

```javascript
var a = 10;

function test() {

    var a = 20;

    console.log(a);
}

test();

console.log(a);
```

Output:

```text
20
10
```

### Why?

Function ke andar `a` local variable hai.

Outer `a` ki value change nahi hui.

---

# Tricky Interview Question ⭐⭐⭐⭐⭐

## Q12.

```javascript
let a = 10;

function test() {

    let a = 20;

    console.log(a);
}

test();

console.log(a);
```

Output:

```text
20
10
```

Same concept: function ke andar different scope.

---

# Tricky Interview Question ⭐⭐⭐⭐⭐

## Q13.

```javascript
var a = 10;

if (true) {
    var a = 20;
}

console.log(a);
```

Output:

```text
20
```

Because `var` block scoped nahi hai.

---

# Tricky Interview Question ⭐⭐⭐⭐⭐

## Q14.

```javascript
let a = 10;

if (true) {
    let a = 20;
}

console.log(a);
```

Output:

```text
10
```

Because inner `let` sirf block ke andar available hai.

---

# Variables Quick Revision

| Feature          | var      | let   | const |
| ---------------- | -------- | ----- | ----- |
| Scope            | Function | Block | Block |
| Redeclare        | ✅        | ❌     | ❌     |
| Reassign         | ✅        | ✅     | ❌     |
| Initialize later | ✅        | ✅     | ❌     |
| Hoisted          | ✅        | ✅*    | ✅*    |
| TDZ              | ❌        | ✅     | ✅     |

`*` `let`/`const` declaration se pehle access nahi kiye ja sakte.

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is a variable?
2. var vs let vs const
3. What is scope?
4. Global scope
5. Function scope
6. Block scope
7. Redeclaration vs reassignment
8. What is hoisting?
9. Is let hoisted?
10. Is const hoisted?
11. What is TDZ?
12. var vs let hoisting
13. What is variable shadowing?
14. Can const object properties be changed?
15. Why prefer const/let over var?
16. Can const be declared without initialization?
17. What happens when var is used inside a block?
18. What happens when let is used inside a block?
```

---

# Easy Interview Revision

```text
var
 ↓
Function Scope
Redeclare ✅
Reassign ✅
Hoisted → undefined

let
 ↓
Block Scope
Redeclare ❌
Reassign ✅
TDZ ✅

const
 ↓
Block Scope
Redeclare ❌
Reassign ❌
Initialization required
TDZ ✅
```

---

# Best Interview Answer

### Interviewer:

> What is the difference between var, let and const?

### Answer:

> "`var` is function-scoped and allows both redeclaration and reassignment. `let` is block-scoped, allows reassignment but not redeclaration in the same scope. `const` is also block-scoped and does not allow reassignment. In modern JavaScript, I generally use const by default and let when I need to reassign a variable."

---

# Final Tip

Variables ke interview me **sabse important** topics:

```text
⭐⭐⭐⭐⭐

var vs let vs const
        ↓
Scope
        ↓
Hoisting
        ↓
TDZ
        ↓
Redeclaration vs Reassignment
        ↓
Shadowing
        ↓
const Object
        ↓
Output Based Questions
```

> **1-year MERN developer ke interview ke liye `var vs let vs const`, scope, hoisting aur TDZ ko strong karna bahut important hai.**
