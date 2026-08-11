# JavaScript Callback Functions – Interview Questions & Answers

## Q1. What is a Callback Function?

### Answer

Callback ek function hota hai jo kisi doosre function ko **argument ke roop me pass** kiya jata hai aur baad me execute kiya jata hai.

### Simple Example

```javascript
function greet(name) {
    console.log("Hello " + name);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Ritesh", greet);
```

Output:

```text
Hello Ritesh
```

Yahan:

```text
greet → Callback Function
processUser → Higher Order Function
```

### Interview me bolo

> "A callback is a function passed as an argument to another function, which is then invoked later."

---

# Q2. Why do we use Callback Functions?

Callbacks useful hain jab hume kisi function ko batana ho:

> "Ye kaam complete hone ke baad ye function execute karna."

Common use cases:

```text
1. Asynchronous operations
2. setTimeout()
3. API calls
4. Event handling
5. Array methods
6. File operations
7. Database operations
8. Node.js / Express
```

---

# Q3. Basic Callback Example

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

Output:

```text
Hello
```

Flow:

```text
greet function
      ↓
passed to execute()
      ↓
callback()
      ↓
greet() executes
```

---

# Q4. Callback with Parameters

```javascript
function add(a, b) {
    console.log(a + b);
}

function calculate(x, y, callback) {
    callback(x, y);
}

calculate(10, 20, add);
```

Output:

```text
30
```

---

# Q5. Callback using Arrow Function

Callback ke saath arrow functions bahut commonly use hote hain.

```javascript
function calculate(a, b, callback) {
    return callback(a, b);
}

const result = calculate(10, 20, (a, b) => {
    return a + b;
});

console.log(result);
```

Output:

```text
30
```

---

# Q6. What is a Higher Order Function?

### Answer

Jo function:

* kisi function ko argument ke roop me accept kare, OR
* kisi function ko return kare

use **Higher Order Function** kehte hain.

Example:

```javascript
function calculate(a, b, callback) {
    return callback(a, b);
}
```

`calculate()` ek Higher Order Function hai.

Because it accepts a function.

---

# Q7. Callback vs Higher Order Function

### Callback

Jo function pass kiya ja raha hai:

```javascript
add
```

### Higher Order Function

Jo function callback ko receive kar raha hai:

```javascript
calculate
```

Example:

```javascript
function add(a, b) {
    return a + b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

calculate(10, 20, add);
```

Yahan:

```text
add       → Callback
calculate → Higher Order Function
```

---

# Q8. Callback with setTimeout()

### Very Important ⭐⭐⭐⭐⭐

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Hello
```

### Why?

`setTimeout()` asynchronous hai.

Callback immediately execute nahi hota.

```text
Start
 ↓
setTimeout registered
 ↓
End
 ↓
2 seconds later
 ↓
Hello
```

---

# Q9. Is setTimeout a Callback?

No.

`setTimeout()` ek function hai.

Isme jo function pass karte hain:

```javascript
() => {
    console.log("Hello");
}
```

wo callback hai.

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

Yahan:

```text
setTimeout → function
() => {...} → callback
```

---

# Q10. Callback with map()

`map()` callback accept karta hai.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => {
    return num * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

Yahan:

```javascript
(num) => num * 2
```

callback function hai.

---

# Q11. Callback with filter()

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter((num) => {
    return num > 20;
});

console.log(result);
```

Output:

```text
[30, 40]
```

Callback:

```javascript
(num) => num > 20
```

---

# Q12. Callback with forEach()

```javascript
const numbers = [10, 20, 30];

numbers.forEach((num) => {
    console.log(num);
});
```

Output:

```text
10
20
30
```

Yahan arrow function callback hai.

---

# Q13. Callback with reduce()

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(sum);
```

Output:

```text
10
```

Callback:

```javascript
(acc, num) => acc + num
```

---

# Q14. Synchronous Callback

Callback immediately execute ho sakta hai.

Example:

```javascript
function greet(callback) {
    console.log("Hello");
    callback();
}

function message() {
    console.log("Welcome");
}

greet(message);
```

Output:

```text
Hello
Welcome
```

Ye synchronous callback hai.

---

# Q15. Asynchronous Callback

Callback baad me execute hota hai.

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Callback");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Callback
```

Ye asynchronous callback hai.

---

# Q16. Callback with API

Traditional callback style:

```javascript
function getData(callback) {

    setTimeout(() => {

        const data = {
            name: "Ritesh"
        };

        callback(data);

    }, 1000);
}

getData((data) => {
    console.log(data);
});
```

After 1 second:

```text
{ name: "Ritesh" }
```

---

# Q17. Callback in Node.js

Node.js me callbacks historically bahut common hain.

Example:

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
```

Yahan:

```javascript
(err, data) => {...}
```

callback function hai.

---

# Q18. What is Error-First Callback?

Node.js me common pattern:

```javascript
function callback(err, data) {
    
}
```

Convention:

```text
err  → error
data → successful result
```

Example:

```javascript
fs.readFile("data.txt", "utf8", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
```

### Interview me bolo

> "In Node.js, the error-first callback pattern usually puts the error as the first argument and the successful result as the second argument."

---

# Q19. What is Callback Hell?

Jab callbacks bahut deeply nested ho jayein aur code difficult to read/manage ho jaye, use **Callback Hell** kehte hain.

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

Structure:

```text
getUser
   ↓
getOrders
   ↓
getPayment
   ↓
sendEmail
   ↓
Done
```

Code pyramid jaisa dikhne lagta hai.

---

# Q20. How to Avoid Callback Hell?

Modern JavaScript me:

```text
Callback Hell
      ↓
Promises
      ↓
async / await
```

use karte hain.

### Callback

```javascript
getUser((user) => {
    getOrders(user, (orders) => {
        // ...
    });
});
```

### Promise

```javascript
getUser()
    .then((user) => getOrders(user))
    .then((orders) => {
        // ...
    });
```

### async/await

```javascript
async function getData() {

    const user = await getUser();

    const orders = await getOrders(user);

}
```

---

# Q21. Callback vs Promise

| Callback                         | Promise                           |
| -------------------------------- | --------------------------------- |
| Function passed as argument      | Object representing future result |
| Can become nested                | Easier chaining                   |
| Callback Hell possible           | Better composition                |
| Older common pattern             | Modern async pattern              |
| Error handling can be repetitive | `.catch()` available              |

---

# Q22. Callback vs async/await

### Callback

```javascript
getUser((user) => {
    console.log(user);
});
```

### async/await

```javascript
async function getUserData() {

    const user = await getUser();

    console.log(user);
}
```

`async/await` asynchronous code ko synchronous-style readable banata hai.

---

# Q23. Callback with Event Listener

Browser JavaScript me event listener callback accept karta hai.

```javascript
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

Yahan:

```javascript
() => {
    console.log("Button clicked");
}
```

callback function hai.

---

# Q24. Can a Callback Return a Value?

Yes.

Example:

```javascript
function calculate(a, b, callback) {
    return callback(a, b);
}

const result = calculate(10, 20, (a, b) => {
    return a + b;
});

console.log(result);
```

Output:

```text
30
```

---

# Q25. Can We Pass Multiple Callbacks?

Yes.

```javascript
function calculate(a, b, success, error) {

    if (b !== 0) {
        success(a / b);
    } else {
        error("Cannot divide by zero");
    }
}

calculate(
    10,
    2,
    (result) => {
        console.log(result);
    },
    (message) => {
        console.log(message);
    }
);
```

Output:

```text
5
```

---

# Q26. Callback with Condition

```javascript
function login(user, callback) {

    if (user === "Ritesh") {
        callback("Login Successful");
    } else {
        callback("Invalid User");
    }
}

login("Ritesh", (message) => {
    console.log(message);
});
```

Output:

```text
Login Successful
```

---

# Q27. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

### Important

Even `0ms` timeout callback immediately execute nahi hota.

It is scheduled for later.

---

# Q28. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("Start");

function test(callback) {
    callback();
}

test(() => {
    console.log("Middle");
});

console.log("End");
```

Output:

```text
Start
Middle
End
```

Ye synchronous callback hai.

---

# Q29. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");
```

Output:

```text
1
3
5
4
2
```

### Basic reason

Synchronous code pehle execute hota hai.

Then timer callbacks later execute hote hain.

---

# Q30. Callback + Closure

Callbacks closures ke saath bhi work kar sakte hain.

```javascript
function outer() {

    let message = "Hello";

    setTimeout(() => {
        console.log(message);
    }, 1000);
}

outer();
```

Output:

```text
Hello
```

Callback `message` ko outer scope se access kar raha hai.

Ye **closure + callback** ka example hai.

---

# Callback Function vs Normal Function

Callback koi special type ka function nahi hai.

Ye simply ek function hai jo kisi doosre function ko argument ke roop me pass hota hai.

Example:

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

`greet` normal function bhi hai aur yahan callback bhi hai.

### Interview me bolo

> "Callback is not a separate function type. It describes how a function is being used."

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is a Callback Function?
2. Why do we use callbacks?
3. Callback vs Higher Order Function?
4. Synchronous Callback kya hai?
5. Asynchronous Callback kya hai?
6. Callback with setTimeout()
7. Callback with map()
8. Callback with filter()
9. Callback with reduce()
10. Callback with forEach()
11. Callback in Node.js?
12. What is Error-First Callback?
13. What is Callback Hell?
14. How to avoid Callback Hell?
15. Callback vs Promise?
16. Callback vs async/await?
17. Callback with Event Listener?
18. Can callback return a value?
19. Callback + Closure?
20. What happens with setTimeout(..., 0)?
```

---

# Quick Revision

```text
CALLBACK
   ↓
Function passed as argument
   ↓
Another function receives it
   ↓
Callback is executed
```

Example:

```javascript
function execute(callback) {
    callback();
}

execute(() => {
    console.log("Hello");
});
```

Output:

```text
Hello
```

---

# Callback Flow

```text
Function A
    ↓
accepts function B
    ↓
Function B = Callback
    ↓
Function A calls B
    ↓
Callback executes
```

---

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye callbacks me ye topics pakke karo:

```text
⭐⭐⭐⭐⭐

Callback Definition
       ↓
Higher Order Function
       ↓
Synchronous Callback
       ↓
Asynchronous Callback
       ↓
setTimeout
       ↓
Array Methods
       ↓
Node.js Callbacks
       ↓
Error-First Callback
       ↓
Callback Hell
       ↓
Promises
       ↓
async/await
       ↓
Event Loop Basics
```

# Best Interview Answer

### Interviewer:

> What is a callback function?

### Answer:

> "A callback is a function passed as an argument to another function and executed by that function either immediately or later. Callbacks are commonly used for array methods, event handling, asynchronous operations, and Node.js APIs."

### If interviewer asks Callback Hell:

> "Callback Hell happens when multiple asynchronous operations are nested inside callbacks, making the code difficult to read and maintain. We can avoid it using Promises and async/await."
