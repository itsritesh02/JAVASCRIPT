## 19. Microtask Queue vs Callback Queue

### What is Microtask Queue?

Microtask Queue is used for **Promises** and some other high-priority asynchronous tasks.

### What is Callback Queue?

Callback Queue, also called **Task Queue**, contains callbacks from things like `setTimeout()`.

In simple words:

> Microtasks are executed before callback/task queue callbacks.

---

### Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");