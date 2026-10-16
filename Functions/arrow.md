
# Arrow Function vs Normal Function in JavaScript

## Interview Question
What is an arrow function, and how is it different from a normal function?

## Interview Answer

An arrow function is a shorter way to write a function in JavaScript. It uses the `=>` symbol.

A normal function uses the `function` keyword.

The main difference is that an arrow function does not have its own `this`, while a normal function has its own `this` depending on how it is called.

## Example 1: Normal Function

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

## Example 2: Arrow Function

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5
```

## Difference Between Them

| Normal Function | Arrow Function |
|---|---|
| Uses the `function` keyword | Uses the `=>` symbol |
| Syntax is longer | Syntax is shorter |
| Has its own `this` based on how it is called | Inherits `this` from the surrounding scope |
| Can be used with `new` | Cannot be used with `new` |

## Short Interview Answer

An arrow function is a shorter way to write a function using the `=>` symbol. A normal function uses the `function` keyword. The main difference is that arrow functions do not have their own `this`, while normal functions do.
