
# Difference Between Microtask and Macrotask Queue

## 1. Interview Question
What is the difference between Microtask Queue and Macrotask Queue in JavaScript?

## 2. Interview Answer
JavaScript uses different queues to manage asynchronous callbacks.

- **Microtask Queue:** Handles Promise callbacks.
- **Macrotask Queue:** Handles callbacks such as `setTimeout()` and `setInterval()`.

After synchronous code finishes, JavaScript processes microtasks before starting the next macrotask.

## 3. Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask");
});

console.log("End");
```

### Output

```text
Start
End
Microtask
Macrotask
```

## 4. Explanation

1. `Start` prints first.
2. `setTimeout()` schedules a macrotask.
3. `Promise.then()` schedules a microtask.
4. `End` prints because synchronous code runs first.
5. The microtask runs and prints `Microtask`.
6. The macrotask runs and prints `Macrotask`.

## 5. Main Differences

| Microtask Queue | Macrotask Queue |
|---|---|
| Handles Promise callbacks | Handles timer callbacks |
| Example: `.then()`, `.catch()` | Example: `setTimeout()`, `setInterval()` |
| Processed before the next macrotask | Runs after pending microtasks are processed |
| Used for Promise reactions | Used for scheduled tasks |

## 6. Short Interview Answer

The Microtask Queue handles callbacks from Promises, while the Macrotask Queue handles tasks such as `setTimeout()` and `setInterval()`. After synchronous code finishes, JavaScript processes microtasks before moving to the next macrotask.
