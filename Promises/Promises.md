
# Promise in JavaScript

## 1. What is a Promise?

A Promise is a JavaScript object that represents the eventual success or failure of an asynchronous operation.

> It represents a result that we will get **in the future**.

For example, when we call an API, it takes some time to get the response. We can use a Promise to handle that response.

## 2. States of a Promise

A Promise has three states:

1. **Pending:** Operation is still in progress.
2. **Fulfilled:** Operation completed successfully.
3. **Rejected:** Operation failed.

## 3. Simple Example

```javascript
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Output

```text
Operation successful
```

## 4. How Does It Work?

- `new Promise()` creates a Promise.
- `resolve()` indicates successful completion.
- `reject()` indicates failure.
- `.then()` handles fulfillment.
- `.catch()` handles rejection.
- `.finally()` runs after the Promise settles, whether fulfilled or rejected.

## 5. Example with setTimeout()

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});
```

### Output after 2 seconds

```text
Data received
```

## 6. Promise with API Fetch

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

Here:
- `fetch()` returns a Promise.
- `response.json()` also returns a Promise.
- `.then()` handles the results.
- `.catch()` handles errors, such as network failures.

Note: `fetch()` does not reject automatically for HTTP errors like `404`; check `response.ok` when handling API responses.

## 7. Short Interview Answer

A Promise is a JavaScript object used to handle asynchronous operations. It represents a result that may be available now, later, or fail. It has three states: pending, fulfilled, and rejected. We commonly handle Promises using `.then()`, `.catch()`, and `.finally()`.
