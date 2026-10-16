
# What is a Higher-Order Function in JavaScript?

## Interview Question

What is a higher-order function?

## Interview Answer

A higher-order function is a function that takes another function as an argument or returns another function.

## Example

```javascript
function greet(name) {
  return "Hello " + name;
}

function processUser(callback) {
  console.log(callback("Ritesh"));
}

processUser(greet);
```

## Output

```text
Hello Ritesh
```

## Explanation

- `greet` is a function that returns a greeting.
- `processUser` takes another function as an argument.
- Therefore, `processUser` is a higher-order function.

## Common Examples

JavaScript array methods such as `map()`, `filter()`, and `reduce()` are common examples of higher-order functions because they accept callback functions.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result); // [2, 4, 6]
```

## Short Interview Answer

A higher-order function is a function that takes another function as an argument or returns a function. Examples include `map()`, `filter()`, and `reduce()`.
