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


reduce() is an array method used to reduce all elements of an array into a single value.

It uses an accumulator to store the result during each iteration.

For example, we can use reduce() to calculate the total price of products, find the maximum value, count elements, or convert an array into an object.