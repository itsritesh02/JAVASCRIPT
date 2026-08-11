# JavaScript Promises – Interview Questions & Answers

## Q1. What is a Promise?

### Answer

Promise JavaScript ka ek object hai jo kisi **asynchronous operation ke future result** ko represent karta hai.

Simple words:

> Promise batata hai ki asynchronous operation abhi pending hai, baad me successfully complete hoga ya fail hoga.

Example:

```javascript
const promise = new Promise((resolve, reject) => {

    resolve("Success");

});
```

---

# Q2. Promise ke States kya hote hain?

Promise ki 3 states hoti hain:

```text
1. Pending
2. Fulfilled
3. Rejected
```

### Pending

Operation abhi complete nahi hua.

```text
Pending
```

### Fulfilled

Operation successfully complete ho gaya.

```text
Fulfilled
```

### Rejected

Operation fail ho gaya.

```text
Rejected
```

Flow:

```text
             Promise
                ↓
             Pending
             /     \
            ↓       ↓
       Fulfilled   Rejected
```

---

# Q3. How to Create a Promise?

```javascript
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }

});
```

Yahan:

```text
resolve → success
reject  → failure
```

---

# Q4. What is `resolve()`?

`resolve()` Promise ko fulfilled state me le jata hai.

Example:

```javascript
const promise = new Promise((resolve, reject) => {

    resolve("Data received");

});
```

---

# Q5. What is `reject()`?

`reject()` Promise ko rejected state me le jata hai.

```javascript
const promise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});
```

---

# Q6. How to consume a Promise?

Promise ko consume karne ke liye mainly:

```text
.then()
.catch()
.finally()
```

use karte hain.

Example:

```javascript
const promise = new Promise((resolve, reject) => {

    resolve("Success");

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
Success
```

---

# Q7. What is `.then()`?

`.then()` successful Promise result ko handle karta hai.

Example:

```javascript
const promise = Promise.resolve("Hello");

promise.then((result) => {
    console.log(result);
});
```

Output:

```text
Hello
```

---

# Q8. What is `.catch()`?

`.catch()` rejected Promise/error ko handle karta hai.

Example:

```javascript
const promise = Promise.reject("Error");

promise.catch((error) => {
    console.log(error);
});
```

Output:

```text
Error
```

---

# Q9. What is `.finally()`?

`.finally()` success ya failure dono cases me execute hota hai.

Example:

```javascript
const promise = Promise.resolve("Success");

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Completed");
    });
```

Output:

```text
Success
Completed
```

---

# Q10. Promise Example with setTimeout()

### Very Important ⭐⭐⭐⭐⭐

```javascript
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 2000);

});

promise.then((data) => {
    console.log(data);
});
```

2 seconds ke baad:

```text
Data received
```

Flow:

```text
Promise
   ↓
Pending
   ↓
2 seconds
   ↓
resolve()
   ↓
Fulfilled
   ↓
.then()
```

---

# Q11. Promise Rejection Example

```javascript
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Server Error");
    }, 2000);

});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

2 seconds ke baad:

```text
Server Error
```

---

# Q12. Promise Chaining

Ek `.then()` ke baad doosra `.then()` laga sakte hain.

```javascript
Promise.resolve(10)

    .then((num) => {
        return num * 2;
    })

    .then((num) => {
        return num + 5;
    })

    .then((result) => {
        console.log(result);
    });
```

Output:

```text
25
```

Flow:

```text
10
 ↓
× 2
 ↓
20
 ↓
+ 5
 ↓
25
```

---

# Q13. Why do we return from `.then()`?

Example:

```javascript
Promise.resolve(10)

    .then((num) => {
        return num * 2;
    })

    .then((result) => {
        console.log(result);
    });
```

Output:

```text
20
```

First `.then()` ka returned value next `.then()` ko milta hai.

---

# Q14. What happens if we don't return?

```javascript
Promise.resolve(10)

    .then((num) => {
        num * 2;
    })

    .then((result) => {
        console.log(result);
    });
```

Output:

```text
undefined
```

### Why?

First `.then()` me kuch return nahi kiya.

Isliye next `.then()` ko:

```text
undefined
```

milta hai.

---

# Q15. Promise Chaining with Error

```javascript
Promise.resolve(10)

    .then((num) => {
        return num * 2;
    })

    .then(() => {
        throw new Error("Something went wrong");
    })

    .then(() => {
        console.log("This will not execute");
    })

    .catch((error) => {
        console.log(error.message);
    });
```

Output:

```text
Something went wrong
```

Error `.catch()` tak propagate hota hai.

---

# Q16. What is `Promise.resolve()`?

Already resolved Promise create karta hai.

```javascript
const promise = Promise.resolve("Hello");

promise.then((data) => {
    console.log(data);
});
```

Output:

```text
Hello
```

---

# Q17. What is `Promise.reject()`?

Already rejected Promise create karta hai.

```javascript
const promise = Promise.reject("Error");

promise.catch((error) => {
    console.log(error);
});
```

Output:

```text
Error
```

---

# Q18. What is `Promise.all()`?

### Very Important ⭐⭐⭐⭐⭐

`Promise.all()` multiple Promises ko **parallel me execute** karta hai aur tab fulfill hota hai jab **sabhi Promises fulfill** ho jayein.

Example:

```javascript
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
["A", "B", "C"]
```

---

# Q19. What if one Promise rejects in `Promise.all()`?

```javascript
const p1 = Promise.resolve("A");

const p2 = Promise.reject("Error");

const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
Error
```

`Promise.all()` reject ho jata hai agar ek bhi Promise reject ho.

---

# Q20. What is `Promise.allSettled()`?

`Promise.allSettled()` sabhi Promises ke complete hone ka wait karta hai, chahe fulfilled ho ya rejected.

```javascript
const p1 = Promise.resolve("A");

const p2 = Promise.reject("Error");

const p3 = Promise.resolve("C");

Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
```

Result roughly:

```text
[
    { status: "fulfilled", value: "A" },
    { status: "rejected", reason: "Error" },
    { status: "fulfilled", value: "C" }
]
```

---

# Q21. What is `Promise.race()`?

`Promise.race()` me jo Promise **sabse pehle settle** hota hai, uska result milta hai.

```javascript
const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 2000);
});

Promise.race([p1, p2])
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
First
```

Because `p1` pehle settle hua.

---

# Q22. What is `Promise.any()`?

`Promise.any()` first **fulfilled** Promise ka result return karta hai.

Rejected Promises ko ignore karta hai jab tak koi Promise fulfill na ho.

```javascript
const p1 = Promise.reject("Error 1");

const p2 = Promise.resolve("Success");

const p3 = Promise.resolve("Success 2");

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
Success
```

---

# Q23. Promise Methods Difference

| Method                 | Behavior             |
| ---------------------- | -------------------- |
| `Promise.all()`        | All fulfill required |
| `Promise.allSettled()` | All settle required  |
| `Promise.race()`       | First settled wins   |
| `Promise.any()`        | First fulfilled wins |

### Easy Trick

```text
all
↓
Everyone must succeed

allSettled
↓
Everyone must finish

race
↓
First to finish wins

any
↓
First success wins
```

---

# Q24. Promise vs Callback

### Callback

```javascript
getUser((user) => {

    getOrders(user, (orders) => {

        console.log(orders);

    });

});
```

Nested callbacks ho sakte hain.

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

Promises chaining provide karte hain aur callback nesting reduce karte hain.

---

# Q25. What is Callback Hell?

Example:

```javascript
getUser((user) => {

    getOrders(user, (orders) => {

        getPayment(orders, (payment) => {

            sendEmail(payment, () => {

                console.log("Done");

            });

        });

    });

});
```

Ye deeply nested structure:

```text
Callback Hell
```

kehlata hai.

Promises isko readable banate hain.

---

# Q26. Promise vs Async/Await

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

### async/await

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

`async/await` Promises ke upar built syntax hai.

---

# Q27. Is `async` function always returning a Promise?

### Yes ✅

```javascript
async function greet() {
    return "Hello";
}

console.log(greet());
```

`greet()` Promise return karega.

Conceptually:

```javascript
Promise.resolve("Hello");
```

---

# Q28. What does `await` do?

`await` Promise ke settle hone ka wait karta hai inside an `async` function.

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

# Q29. Can `await` be used without `async`?

Normal function ke andar generally:

```javascript
const result = await promise;
```

SyntaxError dega.

`await` commonly `async` function ke andar use hota hai.

Modern JavaScript modules me **top-level await** bhi supported hai.

---

# Q30. Error Handling with async/await

### Very Important ⭐⭐⭐⭐⭐

```javascript
async function getData() {

    try {

        const result = await Promise.reject("Server Error");

        console.log(result);

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

Promise rejection ko `try/catch` se handle kar sakte hain.

---

# Q31. Promise Example – API

MERN me APIs ke saath Promises bahut common hain.

```javascript
fetch("/api/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

Flow:

```text
API Request
    ↓
Promise
    ↓
response
    ↓
response.json()
    ↓
data
    ↓
catch if error
```

---

# Q32. API with async/await

Modern MERN code me ye style common hai:

```javascript
async function getUsers() {

    try {

        const response = await fetch("/api/users");

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

getUsers();
```

---

# Q33. Promise with MongoDB

Mongoose methods commonly Promises return karte hain.

Example:

```javascript
const users = await User.find();

console.log(users);
```

Ya:

```javascript
User.find()
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    });
```

MERN interviews me ye concept important hai.

---

# Q34. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
```

### Why?

Promise callback microtask queue me jata hai.

Synchronous code pehle execute hota hai.

---

# Q35. Promise + setTimeout Output Question ⭐⭐⭐⭐⭐

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

Output:

```text
Start
End
Promise
Timeout
```

### Basic order

```text
Synchronous code
      ↓
Microtasks (Promise)
      ↓
Timer callback
```

---

# Q36. Important Output Question

```javascript
Promise.resolve(10)
    .then((num) => {
        console.log(num);
        return num * 2;
    })
    .then((num) => {
        console.log(num);
    });
```

Output:

```text
10
20
```

---

# Q37. Important Output Question

```javascript
Promise.resolve(10)
    .then((num) => {
        console.log(num);
        throw new Error("Error");
    })
    .then(() => {
        console.log("Second");
    })
    .catch((error) => {
        console.log(error.message);
    });
```

Output:

```text
10
Error
```

`throw` ke baad next `.then()` skip ho jata hai aur `.catch()` execute hota hai.

---

# Q38. Important Output Question

```javascript
const p = new Promise((resolve, reject) => {

    resolve("First");

    resolve("Second");

});

p.then((result) => {
    console.log(result);
});
```

Output:

```text
First
```

### Why?

Promise **settle hone ke baad change nahi hota**.

First `resolve()` wins.

---

# Q39. Can a Promise change its state?

Promise ek baar:

```text
Fulfilled
```

ya:

```text
Rejected
```

ho gaya, to state change nahi hoti.

Example:

```javascript
const p = new Promise((resolve, reject) => {

    resolve("Success");

    reject("Error");

});
```

Result:

```text
Success
```

Promise already fulfilled tha.

---

# Q40. What is an Immutable Promise State?

Promise state transition:

```text
Pending
   ↓
Fulfilled
```

OR

```text
Pending
   ↓
Rejected
```

Lekin:

```text
Fulfilled → Rejected ❌
Rejected → Fulfilled ❌
```

allowed nahi hai.

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is a Promise?
2. What are the states of a Promise?
3. What is resolve()?
4. What is reject()?
5. What is then()?
6. What is catch()?
7. What is finally()?
8. What is Promise chaining?
9. What is Promise.resolve()?
10. What is Promise.reject()?
11. What is Promise.all()?
12. What is Promise.allSettled()?
13. What is Promise.race()?
14. What is Promise.any()?
15. Promise vs Callback?
16. What is Callback Hell?
17. How do Promises solve Callback Hell?
18. Promise vs async/await?
19. What does await do?
20. Does async always return a Promise?
21. How to handle errors with async/await?
22. What happens when one Promise rejects?
23. What is Promise state?
24. What is microtask queue?
25. Promise + setTimeout output?
```

---

# Quick Revision

```text
PROMISE
   ↓
Represents future async result
   ↓
┌──────────┬────────────┐
↓          ↓
resolve    reject
↓          ↓
Fulfilled  Rejected
   ↓          ↓
.then()     .catch()
       \      /
        finally()
```

---

# Promise Methods Quick Revision

```text
Promise.all()
→ Wait for all
→ One rejection = reject

Promise.allSettled()
→ Wait for all
→ Gives every result

Promise.race()
→ First settled Promise wins

Promise.any()
→ First fulfilled Promise wins
```

---

# Callback → Promise → Async/Await

```text
Callback
   ↓
Callback Hell
   ↓
Promise
   ↓
Promise Chaining
   ↓
async / await
```

---

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye Promises me ye topics strong karo:

```text
⭐⭐⭐⭐⭐

Promise Definition
       ↓
Pending / Fulfilled / Rejected
       ↓
resolve / reject
       ↓
then / catch / finally
       ↓
Promise Chaining
       ↓
Promise.all()
       ↓
Promise.allSettled()
       ↓
Promise.race()
       ↓
Promise.any()
       ↓
Callback vs Promise
       ↓
Promise vs async/await
       ↓
try/catch
       ↓
fetch()
       ↓
MongoDB / Mongoose Promises
       ↓
Microtask Queue
       ↓
Promise + setTimeout
```

# Best Interview Answer

### Interviewer:

> What is a Promise in JavaScript?

### Answer:

> "A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected. We can handle the result using `.then()`, errors using `.catch()`, and cleanup using `.finally()`."

### If interviewer asks Promise vs async/await:

> "Async/await is syntactic sugar built on top of Promises. It makes Promise-based asynchronous code easier to read and allows us to handle errors using try/catch."

---

# One-Line Revision

```text
Promise = Future result of an asynchronous operation.
```

```text
resolve → success
reject  → failure
then    → success handling
catch   → error handling
finally → always executes
```
