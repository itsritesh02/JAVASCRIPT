# JavaScript Event Loop – Interview Questions & Answers

## What is Event Loop?

JavaScript **single-threaded** language hai.

Iska matlab JavaScript ek time par generally **one piece of JavaScript code** execute karta hai.

Lekin JavaScript asynchronous operations bhi handle karta hai, jaise:

* `setTimeout()`
* API calls
* Promises
* `fetch()`
* File operations
* Database operations

In asynchronous operations ko efficiently handle karne ke liye **Event Loop** important hai.

### Simple Definition

> Event Loop continuously check karta hai ki Call Stack empty hai ya nahi, aur agar Microtask Queue ya Callback Queue me tasks hain, to unhe appropriate time par Call Stack me bhejta hai.

---

# JavaScript Runtime ka Basic Structure

```text
              JavaScript Runtime

        ┌──────────────────────┐
        │     Call Stack       │
        └──────────┬───────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │     Event Loop       │
        └──────────┬───────────┘
                   │
          ┌────────┴─────────┐
          ↓                  ↓
 ┌────────────────┐   ┌────────────────┐
 │ Microtask Queue│   │ Callback Queue │
 └────────────────┘   └────────────────┘
```

Browser me Web APIs bhi hoti hain:

```text
JavaScript
   ↓
Call Stack

Browser Web APIs
   ↓
setTimeout
fetch
DOM Events
etc.

Queues
   ↓
Event Loop
   ↓
Call Stack
```

---

# Q1. What is Call Stack?

Call Stack ek data structure hai jahan JavaScript currently executing functions ko track karta hai.

Example:

```javascript
function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

two();
```

Execution:

```text
two()
 ↓
one()
 ↓
console.log("One")
 ↓
one() complete
 ↓
console.log("Two")
 ↓
two() complete
```

Output:

```text
One
Two
```

---

# Q2. What is LIFO?

Call Stack **LIFO** principle follow karta hai.

LIFO:

```text
Last In
First Out
```

Example:

```text
Stack

┌──────────┐
│ function3│ ← First removed
├──────────┤
│ function2│
├──────────┤
│ function1│
└──────────┘
```

Jo function last me stack me aaya, wo pehle execute/complete hota hai.

---

# Q3. What are Web APIs?

Browser JavaScript environment kuch APIs provide karta hai jo asynchronous operations handle karti hain.

Examples:

```text
setTimeout()
fetch()
DOM Events
setInterval()
```

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

Timer ka waiting work browser handle karta hai.

---

# Q4. What is Callback Queue?

Callback Queue ko **Task Queue** bhi kaha jata hai.

Asynchronous callbacks yahan wait kar sakte hain.

Example:

```javascript
setTimeout(() => {
    console.log("Timeout");
}, 0);
```

Timer complete hone ke baad callback queue me callback wait karta hai.

---

# Q5. What is Microtask Queue?

Microtask Queue me mainly Promise-related callbacks jaate hain.

Examples:

```javascript
Promise.then()
Promise.catch()
Promise.finally()
```

Example:

```javascript
Promise.resolve().then(() => {
    console.log("Promise");
});
```

Ye callback Microtask Queue me jayega.

---

# Q6. Microtask Queue vs Callback Queue

Ye interview ka **very important question** hai.

```text
Microtask Queue
      ↓
Higher Priority

Callback / Task Queue
      ↓
Lower Priority
```

Generally:

```text
Synchronous Code
       ↓
Microtasks
       ↓
Next Task / Timer / Callback
```

---

# Q7. Basic Event Loop Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Timeout
```

### Why?

Step 1:

```text
console.log("Start")
```

Synchronous code hai.

Output:

```text
Start
```

Step 2:

```text
setTimeout()
```

Timer Web API ko de diya jata hai.

Step 3:

```text
console.log("End")
```

Output:

```text
End
```

Step 4:

Timer complete hone ke baad callback queue me callback aata hai.

Event Loop callback ko Call Stack me bhejta hai.

Output:

```text
Timeout
```

Final:

```text
Start
End
Timeout
```

---

# Q8. Why does setTimeout(..., 0) not execute immediately?

Example:

```javascript
setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("Hello");
```

Output:

```text
Hello
Timeout
```

`0` milliseconds ka matlab ye nahi hai ki callback immediately execute hoga.

It means:

> Timer minimum delay ke baad callback ko eligible banata hai.

Callback ko Call Stack empty hone ka wait karna padta hai.

---

# Q9. Important Promise + setTimeout Question ⭐⭐⭐⭐⭐

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

### Execution

```text
1. Start
2. setTimeout → Task Queue
3. Promise.then → Microtask Queue
4. End
5. Microtask → Promise
6. Task → Timeout
```

---

# Q10. Why does Promise execute before setTimeout?

Because Promise callbacks are **microtasks**.

Microtasks generally have priority over the next task/callback.

```text
Call Stack
    ↓
Microtask Queue
    ↓
Task/Callback Queue
```

Isliye:

```text
Promise
```

pehle print hota hai.

---

# Q11. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

Output:

```text
A
C
B
```

### Why?

`A` and `C` synchronous code hain.

`B` Promise callback hai, jo Microtask Queue me jayega.

---

# Q12. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Flow:

```text
A
↓
setTimeout
↓
Promise
↓
D
↓
Microtask → C
↓
Task → B
```

---

# Q13. Event Loop with async/await

```javascript
async function test() {

    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

test();

console.log("D");
```

Output:

```text
C
A
D
B
```

### Why?

```text
C → synchronous
A → synchronous
await → function continuation delayed
D → synchronous
B → microtask
```

---

# Q14. Important Output Question ⭐⭐⭐⭐⭐

```javascript
async function test() {

    console.log("1");

    await Promise.resolve();

    console.log("2");
}

test();

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Output:

```text
1
4
2
3
```

### Reason

`await` ke baad ka code microtask continuation ke form me schedule hota hai.

Sequence:

```text
1
↓
await
↓
Promise continuation scheduled
↓
3rd-party Promise callback scheduled
↓
4
↓
2
↓
3
```

---

# Q15. Event Loop Flow

Complete basic flow:

```text
       JavaScript Code
              ↓
         Call Stack
              ↓
       Execute Sync Code
              ↓
       Is Stack Empty?
              ↓
             Yes
              ↓
      Microtask Queue
              ↓
      Execute Microtasks
              ↓
      Task / Callback Queue
              ↓
      Execute Next Task
              ↓
        Event Loop repeats
```

---

# Q16. Does Event Loop execute JavaScript code?

Event Loop khud JavaScript code execute nahi karta.

Its main job is to coordinate when queued callbacks can move to the Call Stack.

Simple interview answer:

> Event Loop monitors the Call Stack and queues, and coordinates execution of asynchronous callbacks when the stack is available.

---

# Q17. Is JavaScript Single Threaded?

### Yes, JavaScript execution is single-threaded.

Generally ek JavaScript Call Stack hota hai.

But browser/Node.js environment asynchronous operations ko handle karne ke liye additional runtime mechanisms provide karta hai.

Interview me simple answer:

> JavaScript is single-threaded, but its runtime provides asynchronous APIs that allow non-blocking operations.

---

# Q18. Is Event Loop blocking?

Event Loop khud blocking nahi hai.

JavaScript ka long-running synchronous code Call Stack ko block kar sakta hai.

Example:

```javascript
for (let i = 0; i < 10000000000; i++) {
    // Heavy work
}
```

Jab tak ye execute hoga, Call Stack busy rahega.

Isliye queued callbacks immediately execute nahi kar paayenge.

---

# Q19. What is Blocking Code?

Blocking code wo code hai jo Call Stack ko long time tak busy rakhta hai.

Example:

```javascript
function heavyTask() {

    for (let i = 0; i < 10000000000; i++) {
    }

}

heavyTask();
```

Agar stack busy hai:

```text
Call Stack
    ↓
BUSY
    ↓
Callbacks wait
```

---

# Q20. What is Non-Blocking Code?

Non-blocking operations JavaScript ko doosra work continue karne dete hain.

Example:

```javascript
setTimeout(() => {
    console.log("Done");
}, 2000);

console.log("Continue");
```

Output:

```text
Continue
Done
```

JavaScript timer ke wait me block nahi hota.

---

# Q21. Event Loop in Node.js

Node.js me Event Loop asynchronous operations ko manage karne me important role play karta hai.

MERN backend me:

```text
Client Request
      ↓
Node.js
      ↓
Event Loop
      ↓
Async operation
      ↓
Database / File / Network
      ↓
Callback / Promise
      ↓
Response
```

Example:

```javascript
app.get("/users", async (req, res) => {

    const users = await User.find();

    res.json(users);

});
```

Database operation complete hone ka wait karte waqt Node.js runtime other work handle kar sakta hai.

---

# Q22. Event Loop and MongoDB

MERN backend me:

```javascript
const users = await User.find();
```

Ye database operation hai.

High-level concept:

```text
Request
   ↓
Express
   ↓
User.find()
   ↓
Database operation
   ↓
Promise
   ↓
await
   ↓
Result
   ↓
Response
```

Isliye Node.js asynchronous I/O ke liye efficient hai.

---

# Q23. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

setTimeout(() => {
    console.log("3");
}, 0);

console.log("4");
```

Output:

```text
1
4
2
3
```

Synchronous code pehle complete hoga.

Phir timer callbacks order me execute ho sakte hain.

---

# Q24. Important Output Question ⭐⭐⭐⭐⭐

```javascript
console.log("1");

Promise.resolve().then(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });
});

console.log("4");
```

Output:

```text
1
4
2
3
```

### Why?

```text
1 → sync
4 → sync
2 → microtask
3 → newly queued microtask
```

Microtask queue drain hone tak microtasks execute hote rehte hain.

---

# Q25. Microtask Starvation

Agar continuously microtasks add hote rahein, tasks/timers ko delay ho sakta hai.

Example concept:

```javascript
function loop() {

    Promise.resolve().then(() => {

        console.log("Microtask");

        loop();

    });
}

loop();
```

Aise code se event loop continuously microtasks process karta reh sakta hai.

Isse timers aur other tasks starve ho sakte hain.

---

# Q26. Event Loop Interview Trick

### Question:

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

### Answer:

```text
Start
End
Promise
Timeout
```

### Interview Explanation:

> First synchronous code executes. Then the microtask queue is processed, so the Promise callback runs before the timer callback.

---

# Q27. Event Loop vs Call Stack

| Call Stack                       | Event Loop                       |
| -------------------------------- | -------------------------------- |
| Executes current JavaScript code | Coordinates queued work          |
| Uses LIFO                        | Monitors stack and queues        |
| Functions are pushed/popped      | Decides when callbacks can run   |
| Executes synchronous code        | Helps coordinate async callbacks |

---

# Q28. Microtask Queue vs Task Queue

| Microtask Queue                    | Task/Callback Queue               |
| ---------------------------------- | --------------------------------- |
| Promise callbacks                  | setTimeout callbacks              |
| `.then()`                          | DOM events                        |
| `.catch()`                         | Other tasks                       |
| `.finally()`                       | Timer callbacks                   |
| Usually processed before next task | Runs after microtasks are drained |

---

# Q29. Event Loop Interview Answer

### Question:

> Explain Event Loop in JavaScript.

### Best Answer:

> "JavaScript is single-threaded, so it has one main Call Stack for executing JavaScript code. Asynchronous operations are handled by the JavaScript runtime. When their callbacks become ready, they are placed into appropriate queues. The Event Loop monitors the Call Stack and moves queued callbacks for execution when the stack is available. Promise callbacks are handled as microtasks and are generally processed before the next task such as a timer callback."

---

# Q30. Event Loop One-Line Definition

```text
Event Loop = mechanism that coordinates the Call Stack and asynchronous task queues.
```

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is Event Loop?
2. Why is Event Loop needed?
3. What is Call Stack?
4. What is Callback Queue?
5. What is Microtask Queue?
6. What are Web APIs?
7. Is JavaScript single-threaded?
8. Does Event Loop make JavaScript multithreaded?
9. Why does Promise execute before setTimeout?
10. Why does setTimeout(..., 0) not execute immediately?
11. What is blocking code?
12. What is non-blocking code?
13. How does async/await work with Event Loop?
14. What happens when await is encountered?
15. What is microtask priority?
16. What is Microtask Starvation?
17. Event Loop in Node.js?
18. How does Node.js handle asynchronous operations?
19. Explain Event Loop with setTimeout.
20. Explain Event Loop with Promise.
21. Explain Event Loop with async/await.
22. Predict output of Promise + setTimeout.
```

---

# Quick Revision

```text
JavaScript
    ↓
Single Thread
    ↓
Call Stack
    ↓
Synchronous Code
    ↓
Async Operation
    ↓
Runtime / Web APIs
    ↓
Queue
    ↓
Event Loop
    ↓
Call Stack
```

### Priority

```text
Synchronous Code
        ↓
Microtask Queue
        ↓
Task / Callback Queue
```

### Remember

```text
Promise.then()
Promise.catch()
Promise.finally()
        ↓
Microtask

setTimeout()
        ↓
Task / Callback
```

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye especially ye strong karo:

```text
⭐⭐⭐⭐⭐

Call Stack
    ↓
Web APIs / Node Runtime
    ↓
Microtask Queue
    ↓
Task Queue
    ↓
Event Loop
    ↓
Promise
    ↓
async/await
    ↓
setTimeout
    ↓
API Calls
    ↓
MongoDB / Mongoose
```

# Final Interview Trick

Agar interviewer code de:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Pehle ye identify karo:

```text
A → Synchronous
B → Task
C → Microtask
D → Synchronous
```

Then order:

```text
A
D
C
B
```

### Golden Rule

> **Synchronous code → Microtasks → Next Task**

Isi rule se majority ke Event Loop output questions solve ho jayenge.
