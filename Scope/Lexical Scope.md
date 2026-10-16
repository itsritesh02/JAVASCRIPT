
# What is Lexical Scope in JavaScript?

## Interview Question

What is lexical scope in JavaScript?

## Interview Answer

Lexical scope means a function can access variables from its outer scope, where the function is defined.

In simple words, a function can use variables from its parent scope.

## Example

```javascript
function outer() {
  let name = "Ritesh";

  function inner() {
    console.log(name);
  }

  inner();
}

outer(); // Ritesh
```

## Explanation

- `name` is declared inside the `outer()` function.
- `inner()` is defined inside `outer()`.
- So, `inner()` can access the `name` variable from its outer scope.
- This is called lexical scope.

## Another Example

```javascript
let message = "Hello";

function greet() {
  console.log(message);
}

greet(); // Hello
```

The `greet()` function can access `message` because it is available in its outer scope.

## Short Interview Answer

Lexical scope means a function can access variables from the scope where it is defined, including its outer scope. It depends on where the function is written, not where it is called.
