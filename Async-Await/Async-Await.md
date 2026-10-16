## 14. Async/Await

### What is Async/Await?

`async/await` is a way to handle **Promises** in JavaScript.

In simple words:

> It makes asynchronous code look and behave more like normal synchronous code.

---


- `async` allows a function to work with asynchronous operations.
- `await` waits for a Promise to settle before continuing.
- `try...catch` is used to handle errors.
- `finally` runs whether an error occurs or not, so it is useful for stopping the loading state.


### Example: API Call

```js
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data received");
        }, 2000);
    });
}

async function showUser() {
    console.log("Start");

    const user = await getUser();

    console.log(user);

    console.log("End");
}

showUser();