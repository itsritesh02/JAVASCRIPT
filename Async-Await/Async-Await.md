# JavaScript Async / Await – Interview Questions & Answers

## Q1. What is async/await?

### Answer

`async/await` JavaScript me asynchronous code ko **synchronous-looking aur readable** way me likhne ka method hai.

`async/await` internally **Promises ke upar kaam karta hai**.

Simple words:

> `async/await` is a cleaner way to work with Promises.

Example:

```javascript
async function getData() {

    const result = await Promise.resolve("Hello");

    console.log(result);
}

getData();
```

Output:

```text
Hello
```

---

# Q2. What is `async`?

`async` keyword function ke before lagaya jata hai.

Example:

```javascript
async function greet() {

    return "Hello";
}

greet();
```

Important:

> An `async` function always returns a Promise.

---

# Q3. Does async function always return a Promise?

### Yes ✅

Example:

```javascript
async function greet() {

    return "Hello";
}

console.log(greet());
```

Ye directly `"Hello"` return nahi karega.

Ye Promise return karega.

Conceptually:

```javascript
Promise.resolve("Hello");
```

---

# Q4. How to get the value from an async function?

`.then()` use kar sakte hain.

```javascript
async function greet() {

    return "Hello";
}

greet().then((result) => {

    console.log(result);

});
```

Output:

```text
Hello
```

---

# Q5. What is `await`?

`await` kisi Promise ke settle hone ka wait karta hai.

Example:

```javascript
async function getData() {

    const result = await Promise.resolve("Data");

    console.log(result);
}

getData();
```

Output:

```text
Data
```

---

# Q6. Where can we use `await`?

Commonly `await` ko `async` function ke andar use karte hain.

Example:

```javascript
async function test() {

    const result = await Promise.resolve(10);

    console.log(result);
}
```

Modern JavaScript modules me **top-level await** bhi supported hai.

---

# Q7. Basic async/await syntax

```javascript
async function functionName() {

    const result = await promise;

    console.log(result);
}
```

Flow:

```text
async function
      ↓
await Promise
      ↓
Promise settles
      ↓
result
```

---

# Q8. Async/Await Example

```javascript
function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received");
        }, 2000);

    });
}

async function fetchData() {

    const data = await getData();

    console.log(data);
}

fetchData();
```

Output after 2 seconds:

```text
Data received
```

---

# Q9. Why do we use async/await?

Main benefits:

```text
1. Code is easier to read
2. Less Promise chaining
3. Easier error handling
4. Looks similar to synchronous code
5. Useful for API calls
6. Very common in MERN applications
```

---

# Q10. Promise vs async/await

### Promise

```javascript
getUser()
    .then((user) => {

        return getOrders(user);

    })
    .then((orders) => {

        console.log(orders);

    })
    .catch((error) => {

        console.log(error);

    });
```

### Async/Await

```javascript
async function getData() {

    try {

        const user = await getUser();

        const orders = await getOrders(user);

        console.log(orders);

    } catch (error) {

        console.log(error);

    }
}
```

### Interview Answer

> `async/await` is syntactic sugar built on top of Promises. It makes asynchronous code easier to read and maintain.

---

# Q11. What is `try/catch` with async/await?

Async operations me errors handle karne ke liye `try/catch` commonly use karte hain.

```javascript
async function getData() {

    try {

        const data = await Promise.reject("Server Error");

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

getData();
```

Output:

```text
Server Error
```

---

# Q12. Why do we use `try/catch`?

Agar awaited Promise reject ho jaye, to error ko catch karne ke liye.

Example:

```javascript
async function getData() {

    try {

        const response = await fetch("/api/users");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error);

    }
}
```

---

# Q13. What happens if we don't use try/catch?

Agar rejected Promise properly handle nahi kiya, to unhandled rejection ho sakta hai.

Example:

```javascript
async function test() {

    await Promise.reject("Error");

}

test();
```

Is error ko properly handle karna chahiye:

```javascript
async function test() {

    try {

        await Promise.reject("Error");

    } catch (error) {

        console.log(error);

    }
}
```

---

# Q14. Async/Await with API

MERN interview ke liye very important ⭐⭐⭐⭐⭐

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

getUsers();
```

Flow:

```text
API Request
    ↓
await fetch()
    ↓
Response
    ↓
await response.json()
    ↓
Data
```

---

# Q15. Important: `fetch()` Error Handling

Ye interview me pucha ja sakta hai.

`fetch()` HTTP error status, jaise `404` ya `500`, par automatically reject nahi karta.

Isliye:

```javascript
async function getUsers() {

    try {

        const response = await fetch("/api/users");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }
}
```

Important:

```text
Network failure → fetch rejects

404 / 500 → response mil sakta hai
             ↓
response.ok check karo
```

---

# Q16. Multiple `await`

Ek function me multiple `await` use kar sakte hain.

```javascript
async function getData() {

    const user = await getUser();

    const orders = await getOrders(user);

    const payment = await getPayment(orders);

    console.log(payment);
}
```

Flow:

```text
getUser()
   ↓
getOrders()
   ↓
getPayment()
```

---

# Q17. Sequential vs Parallel Await

### Sequential

```javascript
const user = await getUser();

const products = await getProducts();
```

Pehle `getUser()` complete hoga.

Uske baad `getProducts()` start hoga.

### Parallel

Agar dono independent hain:

```javascript
const [user, products] = await Promise.all([
    getUser(),
    getProducts()
]);
```

Dono operations parallel start ho sakte hain.

### Interview Point ⭐⭐⭐⭐⭐

> Independent asynchronous operations ke liye `Promise.all()` performance improve kar sakta hai.

---

# Q18. Sequential Example

```javascript
async function test() {

    const start = Date.now();

    await task1();

    await task2();

    console.log(Date.now() - start);
}
```

Agar:

```text
task1 = 2 seconds
task2 = 2 seconds
```

Approx total:

```text
4 seconds
```

---

# Q19. Parallel Example

```javascript
async function test() {

    const start = Date.now();

    await Promise.all([
        task1(),
        task2()
    ]);

    console.log(Date.now() - start);
}
```

Agar dono independent tasks 2 seconds lete hain:

Approx total:

```text
2 seconds
```

Not exactly guaranteed, but roughly the duration of the slower task.

---

# Q20. Async/Await and Promise.all()

Very important ⭐⭐⭐⭐⭐

```javascript
async function getData() {

    try {

        const [users, products] = await Promise.all([
            getUsers(),
            getProducts()
        ]);

        console.log(users);
        console.log(products);

    } catch (error) {

        console.log(error);

    }
}
```

---

# Q21. What does `await` actually do?

Important interview concept:

`await` Promise ko magically synchronous nahi banata.

It pauses the execution of the **async function's continuation** until the Promise settles.

JavaScript ka event loop baaki work ko continue kar sakta hai.

Simple interview answer:

> `await` pauses the async function until the Promise settles, without blocking the JavaScript thread.

---

# Q22. Does await block JavaScript?

### No ❌

`await` JavaScript thread ko block nahi karta.

Example:

```javascript
async function test() {

    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

console.log("C");
```

Output:

```text
A
C
B
```

Why?

`await` ke baad ka code baad me continue hota hai.

---

# Q23. Important Output Question ⭐⭐⭐⭐⭐

```javascript
async function test() {

    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

console.log("C");
```

Output:

```text
A
C
B
```

### Flow

```text
test()
 ↓
A
 ↓
await
 ↓
function pauses
 ↓
C
 ↓
B
```

---

# Q24. Async/Await + setTimeout

```javascript
function delay() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve();
        }, 2000);

    });
}

async function test() {

    console.log("Start");

    await delay();

    console.log("End");
}

test();
```

Output:

Immediately:

```text
Start
```

After 2 seconds:

```text
End
```

---

# Q25. Important Output Question

```javascript
async function test() {

    return 10;
}

test().then((result) => {

    console.log(result);

});
```

Output:

```text
10
```

Because async function returns a Promise fulfilled with `10`.

---

# Q26. Async Function Returning Promise

```javascript
async function test() {

    return Promise.resolve(20);
}

test().then((result) => {

    console.log(result);

});
```

Output:

```text
20
```

---

# Q27. What happens if async function throws an error?

```javascript
async function test() {

    throw new Error("Something went wrong");

}

test().catch((error) => {

    console.log(error.message);

});
```

Output:

```text
Something went wrong
```

An `async` function throwing an error results in a rejected Promise.

---

# Q28. Async/Await with Express

MERN backend me very important ⭐⭐⭐⭐⭐

```javascript
app.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});
```

Yahan:

```text
Request
   ↓
Express Route
   ↓
await User.find()
   ↓
MongoDB
   ↓
Response
```

---

# Q29. Async/Await with Mongoose

```javascript
const getUsers = async () => {

    try {

        const users = await User.find();

        return users;

    } catch (error) {

        throw error;
    }
};
```

Mongoose queries commonly Promise-like results provide karti hain, isliye `await` use kar sakte hain.

---

# Q30. Async/Await in React

React me API call ke liye async function use kiya ja sakta hai.

Example:

```javascript
useEffect(() => {

    const getUsers = async () => {

        try {

            const response = await fetch("/api/users");

            const data = await response.json();

            console.log(data);

        } catch (error) {

            console.log(error);

        }

    };

    getUsers();

}, []);
```

Important:

`useEffect` callback ko directly `async` banana generally avoid karte hain.

Bad:

```javascript
useEffect(async () => {

    // ...

}, []);
```

Better:

```javascript
useEffect(() => {

    async function getData() {
        // ...
    }

    getData();

}, []);
```

---

# Q31. What is the difference between async and await?

### `async`

Function ko Promise-returning function banata hai.

```javascript
async function test() {
}
```

### `await`

Promise ke result ka wait karne ke liye use hota hai.

```javascript
const data = await promise;
```

### Easy Trick

```text
async → function ke saath

await → Promise ke saath
```

---

# Q32. Promise vs Async/Await

| Promise                         | Async/Await                    |
| ------------------------------- | ------------------------------ |
| `.then()` use karta hai         | `await` use karta hai          |
| `.catch()` use karta hai        | `try/catch` use kar sakte hain |
| Chaining ho sakti hai           | Synchronous-looking code       |
| Readability comparatively lower | Readability better             |
| Async programming ka base       | Promises ka syntax             |

---

# Q33. Callback vs Promise vs Async/Await

### Callback

```javascript
getUser((user) => {

    console.log(user);

});
```

### Promise

```javascript
getUser()
    .then((user) => {
        console.log(user);
    });
```

### Async/Await

```javascript
async function getData() {

    const user = await getUser();

    console.log(user);
}
```

Modern MERN development me async/await bahut commonly use hota hai.

---

# Q34. Common Mistake – Forgetting `await`

Wrong:

```javascript
async function getData() {

    const data = getUsers();

    console.log(data);
}
```

`data` Promise ho sakta hai.

Correct:

```javascript
async function getData() {

    const data = await getUsers();

    console.log(data);
}
```

---

# Q35. Common Mistake – Sequential Await

Suppose:

```javascript
const users = await getUsers();

const products = await getProducts();
```

Agar dono independent hain, unnecessary sequential execution ho sakta hai.

Better:

```javascript
const [users, products] = await Promise.all([
    getUsers(),
    getProducts()
]);
```

---

# Q36. Can we use await inside loops?

### Yes ✅

Example:

```javascript
async function test() {

    for (let i = 1; i <= 3; i++) {

        await delay();

        console.log(i);
    }
}
```

Lekin loop ke iterations sequentially wait karenge.

Agar tasks independent hain, sometimes `Promise.all()` better approach hota hai.

---

# Q37. Async/Await with Error Propagation

```javascript
async function getData() {

    const data = await getUsers();

    return data;
}

async function main() {

    try {

        const result = await getData();

        console.log(result);

    } catch (error) {

        console.log(error);

    }
}
```

Error lower-level function se upper function ke `catch` tak propagate ho sakta hai.

---

# Q38. Important Output Question ⭐⭐⭐⭐⭐

```javascript
async function test() {

    console.log("1");

    await Promise.resolve();

    console.log("2");
}

console.log("3");

test();

console.log("4");
```

Output:

```text
3
1
4
2
```

### Why?

```text
3 → synchronous
1 → synchronous
await → continuation delayed
4 → synchronous
2 → microtask
```

---

# Q39. Important Output Question ⭐⭐⭐⭐⭐

```javascript
async function test() {

    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

Promise.resolve().then(() => {

    console.log("C");

});

console.log("D");
```

Output:

```text
A
D
B
C
```

Both `B` and `C` microtasks hain.

`B` ka continuation pehle schedule hua.

---

# Q40. Best Interview Answer

### Interviewer:

> What is async/await in JavaScript?

### Answer:

> "Async/await is a syntax built on top of Promises that makes asynchronous JavaScript code easier to read and maintain. The `async` keyword makes a function return a Promise, while `await` pauses that async function's execution until the Promise settles. We commonly use try/catch with async/await for error handling."

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is async/await?
2. What is async keyword?
3. What is await keyword?
4. Does async function return a Promise?
5. Can await be used without async?
6. How does await work?
7. Does await block JavaScript?
8. How to handle errors with async/await?
9. async/await vs Promise?
10. async/await vs Callback?
11. What is Promise.all() with async/await?
12. Sequential vs parallel await?
13. Why use Promise.all()?
14. What happens when async function throws an error?
15. How to use async/await with fetch?
16. How to use async/await with MongoDB?
17. How to use async/await in Express?
18. How to use async/await in React?
19. What is the event loop behavior of await?
20. Output questions involving await + Promise + setTimeout
```

---

# Quick Revision

```text
async
  ↓
Function returns Promise

await
  ↓
Wait for Promise settlement
  ↓
Get result / throw error

try
  ↓
Async operation

catch
  ↓
Handle error
```

---

# Async/Await Flow

```text
async function
      ↓
await Promise
      ↓
Promise pending
      ↓
JavaScript can continue other work
      ↓
Promise settles
      ↓
async function resumes
      ↓
result
```

---

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye ye topics strong karo:

```text
⭐⭐⭐⭐⭐

async function
       ↓
await
       ↓
Promise
       ↓
try/catch
       ↓
fetch API
       ↓
Promise.all()
       ↓
Sequential vs Parallel
       ↓
Express async routes
       ↓
Mongoose queries
       ↓
React API calls
       ↓
Event Loop
       ↓
Microtask Queue
```

# One-Line Revision

```text
async = Promise-returning function

await = Promise ke result ka wait

try/catch = async errors handle karna

Promise.all() = independent async tasks ko parallel run karna
```
