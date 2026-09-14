## 28. Destructuring in JavaScript

### What is Destructuring?

**Destructuring** is a JavaScript feature used to take values from an **array or object** and store them in separate variables.

It makes code shorter and easier to read.

---

### Example 1: Array Destructuring

```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);