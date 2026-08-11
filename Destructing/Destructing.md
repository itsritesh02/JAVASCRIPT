# JavaScript `forEach()` – Interview Questions & Answers

## What is `forEach()`?

`forEach()` JavaScript ka array method hai jo array ke **har element par ek function execute** karta hai.

### Simple Definition

> `forEach()` is used to execute a function once for each element of an array.

---

# Basic Syntax

```javascript
array.forEach((element, index, array) => {
    // code
});
```

Usually hum sirf `element` use karte hain:

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

---

# Q1. Why do we use `forEach()`?

`forEach()` ka use array ke **har element par koi action perform** karne ke liye hota hai.

Example:

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
    console.log(fruit);
});
```

Output:

```text
Apple
Banana
Mango
```

---

# Q2. Does `forEach()` return a new array?

❌ Nahi.

`forEach()` normally `undefined` return karta hai.

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
    console.log(num);
});

console.log(result);
```

Output:

```text
1
2
3
undefined
```

### Important

```text
forEach()
   ↓
Function execute
   ↓
undefined
```

---

# Q3. `forEach()` vs `map()` ⭐⭐⭐⭐⭐

Very important interview question.

### `forEach()`

Action perform karta hai:

```javascript
const numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num * 2);
});
```

Output:

```text
2
4
6
```

### `map()`

New array return karta hai:

```javascript
const result = numbers.map((num) => {
    return num * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

### Easy Trick

```text
forEach()
↓
DO SOMETHING

map()
↓
CREATE NEW ARRAY
```

---

# Q4. `forEach()` Callback ke Arguments

`forEach()` callback ko 3 arguments milte hain:

```text
1. element
2. index
3. array
```

Example:

```javascript
const numbers = [10, 20, 30];

numbers.forEach((num, index, arr) => {

    console.log("Value:", num);
    console.log("Index:", index);
    console.log("Array:", arr);

});
```

---

# Q5. Element kya hota hai?

Element current array value hoti hai.

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

Yahan:

```text
num = 10
num = 20
num = 30
```

---

# Q6. Index kya hota hai?

Index current element ka position hota hai.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Banana
2 Mango
```

Remember:

> Array indexing `0` se start hoti hai.

---

# Q7. Third Argument – Array

```javascript
const numbers = [10, 20, 30];

numbers.forEach((num, index, arr) => {
    console.log(arr);
});
```

Output:

```text
[10, 20, 30]
[10, 20, 30]
[10, 20, 30]
```

Har iteration me same original array reference milta hai.

---

# Q8. `forEach()` ka Dry Run ⭐⭐⭐⭐⭐

```javascript
const numbers = [10, 20, 30];

numbers.forEach((num) => {
    console.log(num);
});
```

### Step 1

```text
num = 10
print 10
```

### Step 2

```text
num = 20
print 20
```

### Step 3

```text
num = 30
print 30
```

Final Output:

```text
10
20
30
```

---

# Q9. Sum using `forEach()`

```javascript
const numbers = [10, 20, 30, 40];

let sum = 0;

numbers.forEach((num) => {
    sum += num;
});

console.log(sum);
```

Output:

```text
100
```

Flow:

```text
sum = 0

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100
```

---

# Q10. Even Numbers using `forEach()`

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((num) => {

    if (num % 2 === 0) {
        console.log(num);
    }

});
```

Output:

```text
2
4
6
```

---

# Q11. Odd Numbers using `forEach()`

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {

    if (num % 2 !== 0) {
        console.log(num);
    }

});
```

Output:

```text
1
3
5
```

---

# Q12. Modify Array using `forEach()`

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((num, index) => {
    numbers[index] = num * 2;
});

console.log(numbers);
```

Output:

```text
[2, 4, 6, 8]
```

⚠️ Yahan original array modify ho raha hai.

---

# Q13. `forEach()` with Objects ⭐⭐⭐⭐⭐

MERN interviews ke liye important.

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Rahul",
        age: 25
    }
];

users.forEach((user) => {
    console.log(user.name);
});
```

Output:

```text
Ritesh
Rahul
```

---

# Q14. `forEach()` with Object Properties

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Rahul",
        age: 25
    }
];

users.forEach((user) => {
    console.log(
        user.name + " is " + user.age + " years old"
    );
});
```

Output:

```text
Ritesh is 22 years old
Rahul is 25 years old
```

---

# Q15. `forEach()` for API Data

Suppose API se users aaye:

```javascript
const users = [
    { id: 1, name: "Ritesh" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
];

users.forEach((user) => {
    console.log(user.id, user.name);
});
```

Output:

```text
1 Ritesh
2 Rahul
3 Aman
```

---

# Q16. `forEach()` with HTML/DOM

Browser JavaScript me:

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
    console.log(fruit);
});
```

DOM ke saath bhi use ho sakta hai:

```javascript
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.style.color = "red";
});
```

---

# Q17. Can we use `break` inside `forEach()`?

❌ Directly `break` use nahi kar sakte.

Wrong:

```javascript
numbers.forEach((num) => {

    if (num === 3) {
        break;
    }

});
```

Ye SyntaxError dega.

### Alternative

Agar loop ko break karna hai to normal `for` loop use karo:

```javascript
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] === 3) {
        break;
    }

    console.log(numbers[i]);
}
```

---

# Q18. Can we use `continue` inside `forEach()`?

Direct `continue` bhi use nahi kar sakte.

Instead:

```javascript
numbers.forEach((num) => {

    if (num === 3) {
        return;
    }

    console.log(num);
});
```

Yahan `return` current callback execution ko skip karta hai.

---

# Q19. Can we use `return` inside `forEach()`?

Yes, but important point:

`return` **sirf current callback se return** karta hai.

Example:

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {

    if (num === 3) {
        return;
    }

    console.log(num);
});
```

Output:

```text
1
2
4
```

`3` skip ho gaya.

But `forEach()` loop completely stop nahi hua.

---

# Q20. `forEach()` with `async/await` ⭐⭐⭐⭐⭐

Ye interview me poocha ja sakta hai.

Example:

```javascript
const users = [1, 2, 3];

users.forEach(async (id) => {
    const response = await fetch(
        `https://example.com/users/${id}`
    );

    console.log(await response.json());
});
```

Important:

> `forEach()` `async/await` ko sequentially wait nahi karta.

Agar asynchronous operations ko properly wait karna ho, commonly:

```javascript
for (const id of users) {
    const response = await fetch(
        `https://example.com/users/${id}`
    );

    console.log(await response.json());
}
```

Ya parallel operations ke liye:

```javascript
await Promise.all(
    users.map(async (id) => {
        const response = await fetch(
            `https://example.com/users/${id}`
        );

        return response.json();
    })
);
```

---

# Q21. `forEach()` vs `for` Loop

### `for`

```javascript
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

### `forEach()`

```javascript
numbers.forEach((num) => {
    console.log(num);
});
```

| Feature         | `for`              | `forEach()`     |
| --------------- | ------------------ | --------------- |
| Array iteration | ✅                  | ✅               |
| `break`         | ✅                  | ❌               |
| `continue`      | ✅                  | ❌               |
| `return`        | Function dependent | Callback only   |
| Index           | Manually           | Automatically   |
| Readability     | Good               | Usually cleaner |

---

# Q22. `forEach()` vs `filter()` ⭐⭐⭐⭐⭐

### `forEach()`

Action perform karta hai:

```javascript
numbers.forEach(num => {
    console.log(num);
});
```

### `filter()`

Elements select karta hai:

```javascript
const result = numbers.filter(num => num > 10);
```

Easy:

```text
forEach()
↓
DO SOMETHING

filter()
↓
SELECT ELEMENTS
```

---

# Q23. `forEach()` vs `reduce()` ⭐⭐⭐⭐⭐

### `forEach()`

```javascript
let sum = 0;

numbers.forEach(num => {
    sum += num;
});
```

### `reduce()`

```javascript
const sum = numbers.reduce(
    (acc, num) => acc + num,
    0
);
```

Difference:

```text
forEach()
↓
Manually result variable maintain

reduce()
↓
Accumulator automatically maintain
```

---

# Q24. `forEach()` vs `map()` vs `filter()` vs `reduce()`

| Method      | Purpose        | Returns      |
| ----------- | -------------- | ------------ |
| `forEach()` | Perform action | `undefined`  |
| `map()`     | Transform      | New array    |
| `filter()`  | Select         | New array    |
| `reduce()`  | Accumulate     | Single value |

### Easy Interview Trick

```text
forEach()
↓
ACTION

map()
↓
TRANSFORM

filter()
↓
SELECT

reduce()
↓
ACCUMULATE
```

---

# Q25. Does `forEach()` modify original array?

Depends on what callback ke andar kar rahe ho.

Normally:

```javascript
const numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num);
});

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

Lekin agar explicitly modify karo:

```javascript
const numbers = [1, 2, 3];

numbers.forEach((num, index) => {
    numbers[index] = num * 2;
});

console.log(numbers);
```

Output:

```text
[2, 4, 6]
```

So:

> `forEach()` itself array ko automatically mutate nahi karta, but callback ke andar mutation possible hai.

---

# Q26. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
    return num * 2;
});

console.log(result);
```

Output:

```text
undefined
```

Because `forEach()` return value collect nahi karta.

---

# Q27. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [10, 20, 30];

numbers.forEach((num, index) => {
    console.log(index, num);
});
```

Output:

```text
0 10
1 20
2 30
```

---

# Q28. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {

    if (num % 2 === 0) {
        console.log(num);
    }

});
```

Output:

```text
2
4
```

---

# Q29. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

numbers.forEach((num) => {

    if (num === 2) {
        return;
    }

    console.log(num);
});
```

Output:

```text
1
3
```

Important:

`return` ne sirf `2` wali callback execution skip ki.

---

# Q30. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

let sum = 0;

numbers.forEach((num) => {
    sum += num;
});

console.log(sum);
```

Output:

```text
6
```

---

# Q31. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
    console.log(num * 2);
});

console.log(result);
```

Output:

```text
2
4
6
undefined
```

---

# Q32. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {

    console.log(`${index}: ${fruit}`);

});
```

Output:

```text
0: Apple
1: Banana
2: Mango
```

---

# Q33. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

numbers.forEach((num) => {
    num = num * 2;
});

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

Why?

Because:

```javascript
num = num * 2;
```

sirf local callback variable ko change karta hai.

Original array change nahi hota.

---

# Q34. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const users = [
    { name: "Ritesh", age: 22 },
    { name: "Rahul", age: 25 }
];

users.forEach((user) => {
    user.age++;
});

console.log(users);
```

Output:

```text
[
    { name: "Ritesh", age: 23 },
    { name: "Rahul", age: 26 }
]
```

Reason:

Objects reference values hain, isliye object properties modify karne se original objects affect ho sakte hain.

---

# Q35. MERN Interview Example – Display Users

```javascript
const users = [
    { id: 1, name: "Ritesh" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
];

users.forEach((user) => {
    console.log(user.name);
});
```

Output:

```text
Ritesh
Rahul
Aman
```

---

# Q36. MERN Interview Example – Calculate Cart Total

```javascript
const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

let total = 0;

cart.forEach((item) => {
    total += item.price;
});

console.log(total);
```

Output:

```text
53000
```

Note:

`reduce()` is often cleaner for this kind of accumulation:

```javascript
const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
);
```

---

# Q37. Interview Answer: What is `forEach()`?

### Best Answer

> "`forEach()` is a higher-order array method used to execute a callback function once for every element of an array. It is mainly used when we want to perform an action on each element and it returns `undefined`."

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is forEach()?
2. Why do we use forEach()?
3. Does forEach() return anything?
4. What are the callback arguments?
5. What is the difference between forEach() and map()?
6. What is the difference between forEach() and filter()?
7. What is the difference between forEach() and reduce()?
8. Can we use break inside forEach()?
9. Can we use continue inside forEach()?
10. Can we use return inside forEach()?
11. Does forEach() modify the original array?
12. How does forEach() work with objects?
13. Can forEach() be used with async/await?
14. Why doesn't forEach() wait for async callbacks?
15. How to calculate sum using forEach()?
16. How to calculate cart total?
17. How to iterate API response?
18. Output-based forEach() questions.
```

---

# Quick Revision

```text
forEach()
    ↓
Array
    ↓
Each Element
    ↓
Execute Callback
    ↓
Next Element
    ↓
No New Array
    ↓
undefined
```

### Syntax

```javascript
array.forEach((element, index, array) => {
    // code
});
```

### Example

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

---

# One-Line Interview Revision

> **`forEach()` executes a callback function for every array element and returns `undefined`.**

# MERN Interview Focus ⭐⭐⭐⭐⭐

```text
forEach()
   ↓
API Data Iteration
   ↓
Objects Iteration
   ↓
Cart Processing
   ↓
DOM Manipulation
   ↓
Data Logging
   ↓
Array Traversal
   ↓
Understand map/filter/reduce
   ↓
Async/Await Difference
```
