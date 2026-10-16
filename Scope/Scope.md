
# Scope in JavaScript

## Interview Question

What is scope? Explain global, function, and block scope.

## Interview Answer

Scope defines where a variable can be accessed in JavaScript.

There are three main types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

## 1. Global Scope

A variable declared outside a function or block is called a global variable. It can be accessed from different parts of the code, subject to the execution environment.

### Example

```javascript
let name = "Ritesh";

function greet() {
  console.log(name);
}

greet(); // Ritesh
console.log(name); // Ritesh
```

## 2. Function Scope

A variable declared inside a function can be accessed only inside that function.

### Example

```javascript
function greet() {
  let message = "Hello";
  console.log(message);
}

greet(); // Hello

// console.log(message); // ReferenceError
```

## 3. Block Scope

A variable declared with `let` or `const` inside a block `{}` can be accessed only within that block.

### Example

```javascript
if (true) {
  let age = 22;
  const name = "Ritesh";

  console.log(age);  // 22
  console.log(name); // Ritesh
}

// console.log(age); // ReferenceError
```

Note: `var` is function-scoped, not block-scoped.

## Difference Between Scopes

| Global Scope | Function Scope | Block Scope |
|---|---|---|
| Declared outside functions and blocks | Declared inside a function | Declared inside a block `{}` |
| Accessible throughout its available scope | Accessible inside that function | `let` and `const` are accessible inside that block |
| Example: global variable | Example: local function variable | Example: variable inside an `if` block |

## Short Interview Answer

Scope defines where a variable can be accessed in JavaScript. Global scope allows access throughout its available scope, function scope limits access to a function, and block scope limits access to a block when using `let` or `const`.
