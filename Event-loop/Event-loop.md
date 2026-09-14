## 18. Event Loop

### What is Event Loop?

The Event Loop is a mechanism in JavaScript that handles **asynchronous operations**.

In simple words:

> Event Loop allows JavaScript to perform asynchronous tasks without blocking the main thread.

JavaScript is **single-threaded**, which means it executes one task at a time.

---

### Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");