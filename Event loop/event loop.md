
# Event Loop in JavaScript

## 1. Interview Question
What is the Event Loop in JavaScript?

## 2. Interview Answer
The Event Loop is a mechanism in JavaScript that allows asynchronous operations to be handled without blocking the main thread.

It checks whether the Call Stack is empty and then moves waiting callbacks from the appropriate queue to the Call Stack for execution.

## 3. Important Concepts

1. **Call Stack:** Executes JavaScript functions.
2. **Web APIs:** Browser features that handle tasks such as timers and network requests.
3. **Callback Queue (Task Queue):** Holds callbacks from tasks such as `setTimeout()`.
4. **Microtask Queue:** Holds Promise callbacks such as `.then()` and `.catch()`.
5. **Event Loop:** Coordinates when queued callbacks can run.

Note: In Node.js, asynchronous operations are also handled by the runtime, which has its own event loop and APIs.

## 4. Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output

```text
Start
End
Promise
Timeout
```

## 5. How Does It Work?

**Step 1:** `console.log("Start")` executes immediately.

**Step 2:** `setTimeout()` schedules its callback to run later.

**Step 3:** The Promise callback is added to the Microtask Queue.

**Step 4:** `console.log("End")` executes immediately.

**Step 5:** After the current synchronous code finishes, the Promise callback runs.

**Step 6:** The timer callback runs afterward.

Therefore, the output is:

```text
Start
End
Promise
Timeout
```

## 6. Important Interview Points

- JavaScript executes synchronous code on the Call Stack.
- The Event Loop coordinates asynchronous callbacks.
- Promise callbacks are microtasks.
- `setTimeout()` callbacks are tasks (often called macrotasks).
- Microtasks are processed before the next task begins, after the current synchronous execution finishes.

## 7. Short Interview Answer

The Event Loop is a mechanism that coordinates synchronous and asynchronous code execution in JavaScript. It checks when the Call Stack is available and schedules queued callbacks for execution. Promise callbacks run as microtasks, which are processed before the next timer task.
