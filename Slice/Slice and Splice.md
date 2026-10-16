
# Difference Between `slice()` and `splice()` in JavaScript

## Interview Question

What is the difference between `slice()` and `splice()`?

## Interview Answer

`slice()` is used to extract a portion of an array without changing the original array.

`splice()` is used to add, remove, or replace elements in an array. It changes the original array.

## 1. slice() Example

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 3);

console.log(result);
console.log(numbers);
```

### Output

```text
[20, 30]
[10, 20, 30, 40, 50]
```

### Explanation

- The original array is `[10, 20, 30, 40, 50]`.
- `slice(1, 3)` starts at index `1` and stops before index `3`.
- Index `1` contains `20` and index `2` contains `30`.
- The result is `[20, 30]`.
- The original array remains unchanged.

Remember: The ending index is not included.

## 2. splice() Example

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.splice(1, 2);

console.log(result);
console.log(numbers);
```

### Output

```text
[20, 30]
[10, 40, 50]
```

### Explanation

- The original array is `[10, 20, 30, 40, 50]`.
- `splice(1, 2)` starts at index `1` and removes `2` elements.
- It removes `20` and `30`.
- The result contains the removed elements: `[20, 30]`.
- The original array becomes `[10, 40, 50]`.

## 3. Using splice() to Add Elements

```javascript
const fruits = ["Apple", "Mango", "Banana"];

fruits.splice(1, 0, "Orange");

console.log(fruits);
```

### Output

```text
["Apple", "Orange", "Mango", "Banana"]
```

### Explanation

- `1` is the starting index.
- `0` means remove zero elements.
- `"Orange"` is inserted at index `1`.

## Difference Table

| `slice()` | `splice()` |
|---|---|
| Extracts a portion of an array | Adds, removes, or replaces elements |
| Does not modify the original array | Modifies the original array |
| Returns selected elements | Returns removed elements |
| `slice(start, end)` | `splice(start, deleteCount, items)` |

## Short Interview Answer

`slice()` extracts elements without changing the original array, whereas `splice()` adds, removes, or replaces elements and changes the original array.
