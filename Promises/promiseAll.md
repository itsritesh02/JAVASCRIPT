
# Difference Between Promise.all() and Promise.allSettled()

## 1. Interview Question
What is the difference between `Promise.all()` and `Promise.allSettled()` in JavaScript?

## 2. Interview Answer
Both `Promise.all()` and `Promise.allSettled()` are used to handle multiple Promises.

- **Promise.all():** Fulfills when all Promises fulfill. If any Promise rejects, it rejects immediately without waiting for the remaining Promises to settle.
- **Promise.allSettled():** Waits for all Promises to settle, whether they fulfill or reject, and returns the result of each one.

## 3. Example of Promise.all()

```javascript
const p1 = Promise.resolve("Task 1 Success");
const p2 = Promise.reject("Task 2 Failed");
const p3 = Promise.resolve("Task 3 Success");

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Output

```text
Task 2 Failed
```

### Explanation
- `p1` fulfills successfully.
- `p2` rejects.
- The combined Promise rejects with the reason from `p2`.
- The successful results are not returned by `Promise.all()` in this case.

## 4. Example of Promise.allSettled()

```javascript
const p1 = Promise.resolve("Task 1 Success");
const p2 = Promise.reject("Task 2 Failed");
const p3 = Promise.resolve("Task 3 Success");

Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log(result);
  });
```

### Output

```javascript
[
  { status: "fulfilled", value: "Task 1 Success" },
  { status: "rejected", reason: "Task 2 Failed" },
  { status: "fulfilled", value: "Task 3 Success" }
]
```

### Explanation
- It waits until all three Promises settle.
- It returns the status and result of every Promise.
- One rejected Promise does not cause the combined Promise to reject.

## 5. Main Differences

| Feature | Promise.all() | Promise.allSettled() |
|---|---|---|
| Waits for all Promises to settle | Not necessarily | Yes |
| If one Promise rejects | Combined Promise rejects | Returns its rejected status |
| Returns individual results | Only if all fulfill | Returns the outcome of each |
| Best use | When all operations must succeed | When every outcome matters |

## 6. Real-Life Example

**Promise.all():** Fetching required user details from multiple APIs when the whole operation depends on all results being successful.

**Promise.allSettled():** Fetching data from multiple independent APIs when you want to display successful results even if some requests fail.

## 7. Short Interview Answer

`Promise.all()` rejects if any input Promise rejects, whereas `Promise.allSettled()` waits for every Promise to settle and returns each one's status and result, regardless of success or failure.
