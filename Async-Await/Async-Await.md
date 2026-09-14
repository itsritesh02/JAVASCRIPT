## 14. Async/Await

### What is Async/Await?

`async/await` is a way to handle **Promises** in JavaScript.

In simple words:

> It makes asynchronous code look and behave more like normal synchronous code.

---

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