## 14. Async/Await

### What is Async/Await?

`async/await` is a way to handle **Promises** in JavaScript.

In simple words:

`async/await` is used to handle asynchronous operations in JavaScript. It makes asynchronous code easier to read and write.

---


- `async` makes a function return a Promise.
- `await` waits for a Promise to resolve before moving to the next line inside the async function.
- `try...catch` is used to handle errors.
- `finally` runs whether an error occurs or not, so it is useful for stopping the loading state.


**Interview Point:** We commonly use `async/await` when fetching API data or working with databases in MERN applications.

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