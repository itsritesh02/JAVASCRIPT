
# Difference Between `forEach()` and `map()` in JavaScript

## Interview Question

What is the difference between `forEach()` and `map()`?

## Interview Answer

`forEach()` is used to perform an operation on each element of an array, but it does not return a new array.

`map()` is used to perform an operation on each element and returns a new array with the results.

## Example 1: forEach()

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  console.log(num * 2);
});

console.log(result);
```

### Output

```text
2
4
6
undefined
```

## Example 2: map()

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  return num * 2;
});

console.log(result);
```

### Output

```text
[2, 4, 6]
```

## Difference Table

| `forEach()` | `map()` |
|---|---|
| Performs an operation on each element | Transforms each element |
| Returns `undefined` | Returns a new array |
| Used for side effects, such as logging | Used when you need a transformed array |
| Does not create a result array automatically | Creates a new result array |

## Short Interview Answer

`forEach()` executes a callback for each array element and returns `undefined`, while `map()` applies a callback to each element and returns a new array. We use `map()` when we need the transformed results.
