## 13. Promise

### What is a Promise?

A Promise is an object used to handle **asynchronous operations** in JavaScript.

In simple words:

> It represents a result that we will get **in the future**.

For example, when we call an API, the response does not come immediately. A Promise helps us handle that future response.

---

### Promise has 3 States

```text
Pending   → Operation is still running

Fulfilled → Operation completed successfully

Rejected  → Operation failed

---
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });





    ## 15. Promise.all()

### What is `Promise.all()`?

`Promise.all()` is used when we have **multiple Promises** and want to wait for all of them to complete.

In simple words:

> `Promise.all()` runs multiple asynchronous operations together and gives the result when all Promises are successful.

---

### Example

```js
const promise1 = Promise.resolve("User Data");
const promise2 = Promise.resolve("Product Data");
const promise3 = Promise.resolve("Order Data");

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


    ## 16. Promise.allSettled()

### What is `Promise.allSettled()`?

`Promise.allSettled()` is used when we have **multiple Promises** and want to know the result of **each Promise**, whether it succeeds or fails.

In simple words:

> `Promise.allSettled()` waits for all Promises to finish, even if some Promises fail.

---

### Example

```js
const promise1 = Promise.resolve("User Data");

const promise2 = Promise.reject("Product API Failed");

const promise3 = Promise.resolve("Order Data");

Promise.allSettled([
    promise1,
    promise2,
    promise3
])
.then((result) => {
    console.log(result);
});

## 17. Promise.race()

### What is `Promise.race()`?

`Promise.race()` is used when we have multiple Promises and we want the result of the **first Promise that finishes**.

In simple words:

> `Promise.race()` returns the result of whichever Promise settles first.

---

### Example

```js
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 1000);
});

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    });