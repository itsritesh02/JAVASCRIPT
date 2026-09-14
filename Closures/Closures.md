# Advanced JavaScript Interview Questions

## 1. Closure

### Question

**What is a Closure in JavaScript?**

### Answer

A closure is a function that remembers and can access variables from its outer function, even after the outer function has finished execution.

### Example

```js
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3