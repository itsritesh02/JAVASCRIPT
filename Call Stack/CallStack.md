## 5. Call Stack

### What is Call Stack?

The **Call Stack** is a place where JavaScript keeps track of which function is currently running.

JavaScript uses the Call Stack to know:

- Which function is running
- Which function should run next
- When a function is finished

The Call Stack follows **LIFO**:

> **Last In, First Out**

---

### Example 1: Simple Function

```js
function greet() {
    console.log("Hello");
}

greet();
