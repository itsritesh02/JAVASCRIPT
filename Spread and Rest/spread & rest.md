
# Spread Operator and Rest Parameter in JavaScript

## Interview Question

What is the spread operator and rest parameter in JavaScript?

## Interview Answer

Both spread and rest use the same `...` syntax, but they work differently.

- **Spread operator** expands elements of an array or properties of an object.
- **Rest parameter** collects multiple values into a single array.

## 1. Spread Operator

The spread operator is used to expand elements of an array or properties of an object.

### Example

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);
// [1, 2, 3, 4, 5]
```

### Explanation

- `...arr1` expands the elements of `arr1`.
- The elements are copied into a new array.
- The new array also contains `4` and `5`.
- The original array remains unchanged.

## 2. Rest Parameter

The rest parameter collects multiple arguments into a single array.

### Example

```javascript
function add(...numbers) {
  return numbers;
}

console.log(add(10, 20, 30));
// [10, 20, 30]
```

### Explanation

- `...numbers` collects all arguments.
- The collected values are stored in the `numbers` array.
- The function returns that array.

## 3. Difference Between Spread and Rest

| Spread Operator | Rest Parameter |
|---|---|
| Expands elements or properties | Collects values into an array |
| Used when passing or copying data | Used in function parameters or destructuring |
| Example: `[...arr]` | Example: `function test(...args)` |

## Short Interview Answer

The spread operator expands elements of an array or properties of an object, while the rest parameter collects multiple values into an array. Both use the `...` syntax, but their purposes are different.
