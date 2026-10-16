
# Higher-Order Function in JavaScript

## Definition

A Higher-Order Function is a function that:

1. Takes another function as an argument, OR
2. Returns another function.

## Example 1: Takes a Function as an Argument

```javascript
function greet() {
  return "Hello Ritesh";
}

function display(callback) {
  console.log(callback());
}

display(greet);
```

Output:
```text
Hello Ritesh
```

### Explanation

- `greet` is a normal function.
- `display` accepts a function as an argument.
- `display` calls that function using `callback()`.
- Therefore, `display` is a Higher-Order Function.

**Important:** We pass `greet`, not `greet()`, because we want to pass the function itself.

## Example 2: Returns Another Function

```javascript
function outer() {
  return function () {
    console.log("Hello Ritesh");
  };
}

const result = outer();

result();
```

Output:
```text
Hello Ritesh
```

Here, `outer()` returns another function, so `outer` is a Higher-Order Function.

## Common Examples

JavaScript provides built-in Higher-Order Functions such as:

### 1. map()

Transforms every element and returns a new array.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output:
```text
[2, 4, 6]
```

### 2. filter()

Returns elements that satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter((num) => num > 2);

console.log(result);
```

Output:
```text
[3, 4]
```

## Interview Answer

A Higher-Order Function is a function that accepts another function as an argument or returns another function. Examples include `map()`, `filter()`, and `reduce()`.

**Remember:** Function ko argument mein lena ya function return karna = Higher-Order Function.
