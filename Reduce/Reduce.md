## 31. Reduce() in JavaScript

### What is reduce()?

`reduce()` is an array method used to **reduce all array elements into a single value**.

That single value can be:
- Number
- String
- Object
- Array

The `reduce()` method returns one final result.

---

### Example 1: Sum of Numbers

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total);