
# Function Declaration vs Function Expression in JavaScript

## Interview Question

What is the difference between function declaration and function expression?

## Interview Answer

A function declaration defines a function using the `function` keyword with a function name.

A function expression stores a function inside a variable.

The main difference is that a function declaration can be called before it is defined, but a function expression cannot be used before the variable is initialized.

## Example

### 1. Function Declaration

```javascript
function greet() {
  console.log("Hello");
}

greet(); // Hello
```

### 2. Function Expression

```javascript
const greet = function() {
  console.log("Hello");
};

greet(); // Hello
```

## Difference Table

| Function Declaration | Function Expression |
|---|---|
| Defined as a named function statement | Function is assigned to a variable |
| Can be called before its definition | Cannot be called before initialization |
| Hoisted with its function body | Variable hoisting rules apply |

## Short Interview Answer

A function declaration defines a function directly, while a function expression assigns a function to a variable. Function declarations can be called before their definition because of hoisting, but function expressions cannot be called before the variable is initialized.
