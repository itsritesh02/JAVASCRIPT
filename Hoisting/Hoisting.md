# JavaScript Hoisting – Interview Questions & Answers

## Q1. What is Hoisting?

### Answer

Hoisting JavaScript ka behavior hai jisme declarations ko execution se pehle JavaScript engine ke scope me register kar liya jata hai.

Simple words me:

> JavaScript execution se pehle variables aur functions ki declarations ko process karta hai.

### Example

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

### Why?

JavaScript isko conceptually aise treat karta hai:

```javascript
var a;

console.log(a);

a = 10;
```

`var a` hoist hua, lekin `10` assignment hoist nahi hua.

---

# Q2. What gets Hoisted?

Interview me mainly ye concepts yaad rakho:

```text
1. var declarations
2. let declarations
3. const declarations
4. Function declarations
5. Class declarations
```

Lekin sabka behavior same nahi hota.

---

# Q3. Is `var` Hoisted?

### Yes ✅

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

Conceptually:

```javascript
var a;

console.log(a);

a = 10;
```

### Interview me bolo

> "`var` declarations are hoisted and initialized with `undefined`."

---

# Q4. Is `let` Hoisted?

### Yes, but differently.

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

`let` declaration hoist hoti hai, but declaration se initialization tak variable **Temporal Dead Zone (TDZ)** me hota hai.

---

# Q5. Is `const` Hoisted?

### Yes, but same as `let`.

```javascript
console.log(a);

const a = 10;
```

Output:

```text
ReferenceError
```

`const` bhi TDZ me hota hai until declaration is reached.

---

# Q6. What is Temporal Dead Zone (TDZ)?

### Very Important ⭐⭐⭐⭐⭐

TDZ wo period hai jahan `let` ya `const` variable scope me exist karta hai but initialization se pehle access nahi kiya ja sakta.

Example:

```javascript
console.log(a);

let a = 10;
```

Yahan:

```text
let a
 ↓
TDZ
 ↓
a = 10
 ↓
TDZ ends
```

Isliye:

```text
ReferenceError
```

### Interview me bolo

> "The Temporal Dead Zone is the period between entering a scope and the point where a `let` or `const` variable is initialized. Accessing it during this period throws a ReferenceError."

---

# Q7. Difference between var, let and const Hoisting

| Keyword | Hoisted | Initialized Before Declaration | TDZ |
| ------- | ------- | ------------------------------ | --- |
| `var`   | Yes     | `undefined`                    | No  |
| `let`   | Yes     | No                             | Yes |
| `const` | Yes     | No                             | Yes |

### Easy Trick

```text
var   → hoisted + undefined
let   → hoisted + TDZ
const → hoisted + TDZ
```

---

# Q8. Function Declaration Hoisting

Function declarations completely hoisted hoti hain.

Example:

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

### Why?

Function declaration execution se pehle available hoti hai.

### Interview me bolo

> "Function declarations are hoisted with their complete function definition, so they can be called before the declaration."

---

# Q9. Function Expression Hoisting

Function expression ka behavior different hota hai.

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

Output:

```text
TypeError
```

### Why?

Conceptually:

```javascript
var greet;

greet();

greet = function () {
    console.log("Hello");
};
```

`greet` ki value initially `undefined` hai.

`undefined()` call karne ki wajah se error aata hai.

---

# Q10. Arrow Function Hoisting

Arrow function declaration ki tarah hoist nahi hoti.

Example:

```javascript
greet();

const greet = () => {
    console.log("Hello");
};
```

Output:

```text
ReferenceError
```

Because `greet` is declared with `const` and is in the TDZ.

---

# Q11. Arrow Function with `var`

```javascript
greet();

var greet = () => {
    console.log("Hello");
};
```

Output:

```text
TypeError
```

Conceptually:

```javascript
var greet;

greet();

greet = () => {
    console.log("Hello");
};
```

Initially:

```text
greet = undefined
```

So:

```text
undefined()
```

causes `TypeError`.

---

# Q12. Function Declaration vs Function Expression

## Function Declaration

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

## Function Expression

```javascript
greet();

const greet = function () {
    console.log("Hello");
};
```

Output:

```text
ReferenceError
```

### Main Difference

```text
Function Declaration
→ Can be called before declaration

Function Expression
→ Cannot be safely called before initialization
```

---

# Q13. What happens with `var`?

```javascript
console.log(a);

var a = 10;

console.log(a);
```

Output:

```text
undefined
10
```

### Dry Run

Before execution:

```text
a = undefined
```

First:

```javascript
console.log(a);
```

Output:

```text
undefined
```

Then:

```javascript
a = 10;
```

Now:

```text
a = 10
```

Second output:

```text
10
```

---

# Q14. What happens with `let`?

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

Execution `console.log(a)` tak pahunchti hai, but `a` TDZ me hai.

---

# Q15. What happens with `const`?

```javascript
console.log(a);

const a = 10;
```

Output:

```text
ReferenceError
```

Same TDZ behavior as `let`.

---

# Q16. Important Interview Question

```javascript
var a = 10;

function test() {

    console.log(a);

    var a = 20;
}

test();
```

Output:

```text
undefined
```

### Why?

Function ke andar:

```javascript
var a;
```

hoist ho jata hai.

Conceptually:

```javascript
var a = 10;

function test() {

    var a;

    console.log(a);

    a = 20;
}
```

Function ka local `a`, global `a` ko shadow karta hai.

---

# Q17. Tricky Question

```javascript
var a = 10;

function test() {

    console.log(a);

    let a = 20;
}

test();
```

Output:

```text
ReferenceError
```

### Why?

Function ke andar `let a` local scope me hai.

`console.log(a)` ke time `a` TDZ me hai.

Global `a = 10` use nahi hoga.

---

# Q18. Function Hoisting Example

```javascript
console.log(add(2, 3));

function add(a, b) {
    return a + b;
}
```

Output:

```text
5
```

Function declaration completely hoisted hai.

---

# Q19. Function Expression Example

```javascript
console.log(add(2, 3));

var add = function (a, b) {
    return a + b;
};
```

Output:

```text
TypeError
```

### Reason

Initially:

```text
add = undefined
```

Then:

```javascript
add(2, 3);
```

Actually:

```text
undefined(2, 3)
```

is attempted.

---

# Q20. Arrow Function Example

```javascript
console.log(add(2, 3));

const add = (a, b) => a + b;
```

Output:

```text
ReferenceError
```

Because `add` is in TDZ.

---

# Q21. Hoisting inside Block Scope

```javascript
{
    console.log(a);

    let a = 10;
}
```

Output:

```text
ReferenceError
```

Because `let` is block scoped and is in TDZ.

---

# Q22. `var` vs `let` in Block

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

`var` block scoped nahi hai.

---

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

`let` block scoped hai.

---

# Q23. Hoisting and Scope

Hoisting aur scope alag concepts hain.

### Hoisting

Declaration processing before execution.

### Scope

Variable kaha accessible hai.

Example:

```javascript
function test() {

    var a = 10;

}
```

`a` function scoped hai.

---

# Q24. Does JavaScript Move Code to the Top?

### Important Interview Trick ⭐⭐⭐⭐⭐

Technically ye kehna accurate nahi hai ki:

> "JavaScript code ko physically top par move kar deta hai."

Better answer:

> "JavaScript creates the execution context before executing the code and registers declarations during that process."

### Interview me ye answer use karo.

---

# Q25. What is Execution Context?

JavaScript code execute karne se pehle execution context create karta hai.

High-level stages:

```text
Creation Phase
      ↓
Declarations are processed
      ↓
Execution Phase
      ↓
Code runs line by line
```

Example:

```javascript
var a = 10;

console.log(a);
```

Creation phase:

```text
a → undefined
```

Execution phase:

```text
a → 10
```

Then:

```text
console.log(a)
```

Output:

```text
10
```

---

# Q26. Global Hoisting

```javascript
console.log(a);

var a = 100;
```

Output:

```text
undefined
```

Global scope me `var a` declaration process ho jati hai.

---

# Q27. Hoisting inside Function

```javascript
function test() {

    console.log(a);

    var a = 50;
}

test();
```

Output:

```text
undefined
```

Function ke local scope me `a` hoist hota hai.

---

# Q28. Nested Function Hoisting

```javascript
function outer() {

    function inner() {
        console.log("Inner");
    }

    inner();
}

outer();
```

Output:

```text
Inner
```

Function declaration available hoti hai.

---

# Q29. Tricky Question

```javascript
var x = 10;

function test() {

    console.log(x);

    var x = 20;

    console.log(x);
}

test();
```

Output:

```text
undefined
20
```

### Dry Run

Function ke andar:

```javascript
var x;
```

hoist hota hai.

So:

```text
local x = undefined
```

First:

```text
undefined
```

Then:

```text
x = 20
```

Second:

```text
20
```

---

# Q30. Tricky Question – let

```javascript
let x = 10;

function test() {

    console.log(x);

    let x = 20;
}

test();
```

Output:

```text
ReferenceError
```

### Reason

Local `x` declaration scope me hai but initialization se pehle access ho rahi hai.

Therefore:

```text
TDZ
```

---

# Most Important Tricky Questions ⭐⭐⭐⭐⭐

## Q1.

```javascript
console.log(a);

var a = 10;
```

Answer:

```text
undefined
```

---

## Q2.

```javascript
console.log(a);

let a = 10;
```

Answer:

```text
ReferenceError
```

---

## Q3.

```javascript
console.log(a);

const a = 10;
```

Answer:

```text
ReferenceError
```

---

## Q4.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Answer:

```text
Hello
```

---

## Q5.

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

Answer:

```text
TypeError
```

---

## Q6.

```javascript
greet();

const greet = () => {
    console.log("Hello");
};
```

Answer:

```text
ReferenceError
```

---

## Q7.

```javascript
var a = 10;

function test() {
    console.log(a);
    var a = 20;
}

test();
```

Answer:

```text
undefined
```

---

## Q8.

```javascript
let a = 10;

function test() {
    console.log(a);
    let a = 20;
}

test();
```

Answer:

```text
ReferenceError
```

---

# Error Types Yaad Rakho ⭐⭐⭐⭐⭐

### `var` Function Expression

```javascript
greet();

var greet = function () {};
```

Result:

```text
TypeError
```

Because:

```text
greet = undefined
```

---

### `let` / `const`

```javascript
greet();

const greet = () => {};
```

Result:

```text
ReferenceError
```

Because:

```text
TDZ
```

---

# Hoisting Quick Revision

```text
                    HOISTING
                       ↓
             Declaration Processing
                       ↓
          ┌────────────┴────────────┐
          ↓                         ↓
         var                    let / const
          ↓                         ↓
     undefined                    TDZ
          ↓                         ↓
      Can access              Cannot access
      before line             before declaration
```

---

# Function Hoisting

```text
Function Declaration
        ↓
Completely Hoisted
        ↓
Can call before declaration
```

Example:

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

---

# Function Expression

```text
Function Expression
        ↓
Variable declaration follows
        ↓
Depends on var / let / const
```

### var

```javascript
var greet = function () {};
```

Before initialization:

```text
undefined
```

Calling it:

```text
TypeError
```

### let / const

Before initialization:

```text
TDZ
```

Calling it:

```text
ReferenceError
```

---

# Interview Questions

```text
1. What is Hoisting?
2. Is var hoisted?
3. Is let hoisted?
4. Is const hoisted?
5. What is TDZ?
6. Why does var return undefined?
7. Why do let and const give ReferenceError?
8. Are function declarations hoisted?
9. Are function expressions hoisted?
10. Are arrow functions hoisted?
11. Function declaration vs function expression?
12. What happens with var inside a function?
13. What happens with let inside a function?
14. What is execution context?
15. What happens during creation phase?
16. What happens during execution phase?
17. Why does typeof behave differently with TDZ variables?
18. Does JavaScript physically move declarations to the top?
19. Difference between hoisting and scope?
20. What are common hoisting interview traps?
```

---

# Best Interview Answer

### Interviewer:

> What is Hoisting in JavaScript?

### Answer:

> "Hoisting is the JavaScript behavior where declarations are processed during the creation phase of an execution context before the code is executed. `var` declarations are initialized with `undefined`, while `let` and `const` are hoisted but remain in the Temporal Dead Zone until initialization. Function declarations are also hoisted and can be called before their declaration."

---

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye ye topics pakke karo:

```text
⭐⭐⭐⭐⭐

var hoisting
      ↓
let / const hoisting
      ↓
Temporal Dead Zone
      ↓
Function Declaration
      ↓
Function Expression
      ↓
Arrow Function
      ↓
Execution Context
      ↓
Creation Phase
      ↓
Execution Phase
      ↓
Hoisting + Scope
      ↓
Tricky Output Questions
```

## One-Line Revision

```text
var        → hoisted + undefined
let        → hoisted + TDZ
const      → hoisted + TDZ
function   → completely hoisted
arrow      → depends on variable declaration
```

### Golden Interview Point ⭐

> **Hoisting does not mean JavaScript physically moves code to the top. It means declarations are processed during execution-context creation before execution.**
