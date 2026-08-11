# JavaScript `reduce()` – Interview Questions & Answers

## What is `reduce()`?

`reduce()` JavaScript ka array method hai jo array ke **multiple elements ko process karke ek single value** me convert karta hai.

Ye single value ho sakti hai:

* Number
* String
* Object
* Array
* Boolean
* Any other value

### Simple Definition

> `reduce()` is used to reduce an array into a single accumulated value.

---

# Basic Syntax

```javascript
const result = array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
```

### Main Parts

```text
accumulator   → result ko store karta hai
currentValue  → current element
initialValue  → accumulator ki starting value
```

---

# Basic Example – Sum ⭐⭐⭐⭐⭐

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

---

# Dry Run

Array:

```text
[1, 2, 3, 4]
```

Initial:

```text
acc = 0
```

### Step 1

```text
acc = 0
num = 1

0 + 1 = 1
```

### Step 2

```text
acc = 1
num = 2

1 + 2 = 3
```

### Step 3

```text
acc = 3
num = 3

3 + 3 = 6
```

### Step 4

```text
acc = 6
num = 4

6 + 4 = 10
```

Final:

```text
10
```

Flow:

```text
0
↓
0 + 1 = 1
↓
1 + 2 = 3
↓
3 + 3 = 6
↓
6 + 4 = 10
```

---

# Q1. Why do we use `reduce()`?

Common uses:

```text
1. Sum
2. Product
3. Maximum / Minimum
4. Count elements
5. Group data
6. Convert array into object
7. Shopping cart total
8. Flatten arrays
9. Calculate statistics
10. Data transformation
```

---

# Q2. What does `reduce()` return?

`reduce()` **single accumulated value** return karta hai.

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce(
    (acc, num) => acc + num,
    0
);

console.log(result);
```

Output:

```text
6
```

---

# Q3. What is Accumulator?

Accumulator wo value hai jo har iteration ke baad updated result ko store karta hai.

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, num) => {
    return acc + num;
}, 0);
```

Yahan:

```text
acc → accumulator
num → current element
```

---

# Q4. What is Current Value?

Current value array ka current element hota hai.

```javascript
const numbers = [10, 20, 30];

numbers.reduce((acc, num) => {
    console.log(num);
    return acc + num;
}, 0);
```

Output:

```text
10
20
30
```

---

# Q5. What is Initial Value?

Initial value accumulator ki starting value hoti hai.

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce(
    (acc, num) => acc + num,
    10
);

console.log(result);
```

Output:

```text
16
```

Calculation:

```text
10 + 1 = 11
11 + 2 = 13
13 + 3 = 16
```

---

# Q6. Reduce Without Initial Value

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((acc, num) => {
    return acc + num;
});

console.log(result);
```

Output:

```text
10
```

Yahan first element initial accumulator ban jata hai:

```text
acc = 1
num = 2
```

Then:

```text
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

### Best Practice

Agar possible ho, clear initial value provide karna better hai:

```javascript
.reduce((acc, num) => acc + num, 0)
```

---

# Q7. Reduce for Product

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce(
    (acc, num) => acc * num,
    1
);

console.log(result);
```

Output:

```text
24
```

Calculation:

```text
1 × 1 = 1
1 × 2 = 2
2 × 3 = 6
6 × 4 = 24
```

---

# Q8. Find Maximum Using Reduce

```javascript
const numbers = [10, 50, 20, 80, 30];

const max = numbers.reduce((max, num) => {
    return num > max ? num : max;
}, numbers[0]);

console.log(max);
```

Output:

```text
80
```

---

# Q9. Find Minimum Using Reduce

```javascript
const numbers = [10, 50, 20, 80, 30];

const min = numbers.reduce((min, num) => {
    return num < min ? num : min;
}, numbers[0]);

console.log(min);
```

Output:

```text
10
```

---

# Q10. Count Elements

```javascript
const numbers = [10, 20, 30, 40];

const count = numbers.reduce((acc) => {
    return acc + 1;
}, 0);

console.log(count);
```

Output:

```text
4
```

Simple alternative:

```javascript
numbers.length
```

---

# Q11. Count Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const count = numbers.reduce((acc, num) => {

    if (num % 2 === 0) {
        return acc + 1;
    }

    return acc;

}, 0);

console.log(count);
```

Output:

```text
3
```

---

# Q12. Count Odd Numbers

```javascript
const numbers = [1, 2, 3, 4, 5];

const count = numbers.reduce((acc, num) => {

    if (num % 2 !== 0) {
        return acc + 1;
    }

    return acc;

}, 0);

console.log(count);
```

Output:

```text
3
```

---

# Q13. `reduce()` to Create an Object ⭐⭐⭐⭐⭐

Very important interview question.

Suppose:

```javascript
const users = [
    "Ritesh",
    "Rahul",
    "Aman"
];
```

Object banana:

```javascript
const result = users.reduce((acc, user, index) => {

    acc[index] = user;

    return acc;

}, {});

console.log(result);
```

Output:

```text
{
    0: "Ritesh",
    1: "Rahul",
    2: "Aman"
}
```

---

# Q14. Count Frequency of Elements ⭐⭐⭐⭐⭐

Very common interview question.

```javascript
const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

const count = fruits.reduce((acc, fruit) => {

    acc[fruit] = (acc[fruit] || 0) + 1;

    return acc;

}, {});

console.log(count);
```

Output:

```text
{
    apple: 3,
    banana: 2,
    orange: 1
}
```

### How?

For `"apple"`:

```text
acc.apple = 0 + 1
```

Next `"apple"`:

```text
acc.apple = 1 + 1
```

Next:

```text
acc.apple = 2 + 1
```

Final:

```text
apple: 3
```

---

# Q15. Reduce with Objects ⭐⭐⭐⭐⭐

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Rahul",
        age: 25
    },
    {
        name: "Aman",
        age: 20
    }
];

const totalAge = users.reduce(
    (acc, user) => acc + user.age,
    0
);

console.log(totalAge);
```

Output:

```text
67
```

Calculation:

```text
22 + 25 + 20 = 67
```

---

# Q16. Shopping Cart Total ⭐⭐⭐⭐⭐

MERN interview ke liye very important.

```javascript
const cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
];

const total = cart.reduce((acc, item) => {

    return acc + item.price * item.quantity;

}, 0);

console.log(total);
```

Output:

```text
54000
```

Calculation:

```text
Laptop
50000 × 1 = 50000

Mouse
1000 × 2 = 2000

Keyboard
2000 × 1 = 2000

Total
50000 + 2000 + 2000 = 54000
```

---

# Q17. Group Objects by Category ⭐⭐⭐⭐⭐

```javascript
const products = [
    {
        name: "iPhone",
        category: "mobile"
    },
    {
        name: "Samsung",
        category: "mobile"
    },
    {
        name: "Dell",
        category: "laptop"
    }
];

const result = products.reduce((acc, product) => {

    if (!acc[product.category]) {
        acc[product.category] = [];
    }

    acc[product.category].push(product);

    return acc;

}, {});

console.log(result);
```

Output conceptually:

```text
{
    mobile: [
        { name: "iPhone", category: "mobile" },
        { name: "Samsung", category: "mobile" }
    ],

    laptop: [
        { name: "Dell", category: "laptop" }
    ]
}
```

---

# Q18. Flatten Array Using Reduce

```javascript
const numbers = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const result = numbers.reduce((acc, arr) => {

    return acc.concat(arr);

}, []);

console.log(result);
```

Output:

```text
[1, 2, 3, 4, 5, 6]
```

Modern JavaScript me simple alternative:

```javascript
numbers.flat();
```

---

# Q19. `reduce()` + `filter()`

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers
    .filter(num => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);

console.log(sum);
```

Output:

```text
12
```

Flow:

```text
[1,2,3,4,5,6]
        ↓
filter even
        ↓
[2,4,6]
        ↓
reduce
        ↓
12
```

---

# Q20. `reduce()` + `map()`

```javascript
const numbers = [1, 2, 3];

const result = numbers
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);

console.log(result);
```

Output:

```text
12
```

Flow:

```text
[1,2,3]
   ↓ map ×2
[2,4,6]
   ↓ reduce
12
```

---

# Q21. `map()` vs `filter()` vs `reduce()` ⭐⭐⭐⭐⭐

| Method     | Purpose    | Return       |
| ---------- | ---------- | ------------ |
| `map()`    | Transform  | New array    |
| `filter()` | Select     | New array    |
| `reduce()` | Accumulate | Single value |

Easy trick:

```text
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

Example:

```text
map
[1,2,3] → [2,4,6]

filter
[1,2,3] → [2,3]

reduce
[1,2,3] → 6
```

---

# Q22. What are `reduce()` callback arguments?

Callback ko commonly 4 arguments milte hain:

```text
1. accumulator
2. currentValue
3. currentIndex
4. array
```

Example:

```javascript
const numbers = [10, 20, 30];

numbers.reduce((acc, value, index, array) => {

    console.log(acc);
    console.log(value);
    console.log(index);
    console.log(array);

    return acc + value;

}, 0);
```

---

# Q23. Reduce Empty Array

Important interview question.

```javascript
const numbers = [];

const result = numbers.reduce(
    (acc, num) => acc + num,
    0
);

console.log(result);
```

Output:

```text
0
```

Because initial value `0` diya hai.

---

# Q24. Reduce Empty Array Without Initial Value

```javascript
const numbers = [];

const result = numbers.reduce(
    (acc, num) => acc + num
);

console.log(result);
```

Output:

```text
TypeError
```

Reason:

Empty array me first element available nahi hai jo accumulator ban sake.

---

# Q25. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce(
    (acc, num) => acc + num,
    0
);

console.log(result);
```

Output:

```text
6
```

---

# Q26. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce(
    (acc, num) => acc * num,
    1
);

console.log(result);
```

Output:

```text
6
```

---

# Q27. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce(
    (acc, num) => acc + num,
    10
);

console.log(result);
```

Output:

```text
20
```

Calculation:

```text
10 + 1 = 11
11 + 2 = 13
13 + 3 = 16
16 + 4 = 20
```

---

# Q28. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce(
    (acc, num) => acc + num
);

console.log(result);
```

Output:

```text
6
```

Here:

```text
acc = 1
num = 2

acc = 3
num = 3

acc = 6
```

---

# Q29. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce(
    (acc, num) => {

        if (num % 2 === 0) {
            return acc + num;
        }

        return acc;

    },
    0
);

console.log(result);
```

Output:

```text
6
```

Because:

```text
2 + 4 = 6
```

---

# Q30. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const fruits = ["apple", "apple", "banana"];

const result = fruits.reduce((acc, fruit) => {

    acc[fruit] = (acc[fruit] || 0) + 1;

    return acc;

}, {});

console.log(result);
```

Output:

```text
{
    apple: 2,
    banana: 1
}
```

---

# Q31. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce(
    (acc, num) => acc.concat(num * 2),
    []
);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

Yahan accumulator array hai.

---

# Q32. Can `reduce()` return an array?

Yes.

`reduce()` kisi bhi type ka accumulated value return kar sakta hai.

Example:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((acc, num) => {

    if (num % 2 === 0) {
        acc.push(num);
    }

    return acc;

}, []);

console.log(result);
```

Output:

```text
[2, 4]
```

---

# Q33. Can `reduce()` return an object?

Yes.

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, num) => {

    acc[num] = num * 2;

    return acc;

}, {});

console.log(result);
```

Output:

```text
{
    1: 2,
    2: 4,
    3: 6
}
```

---

# Q34. Important: `reduce()` does not mean only number

Beginners often think:

```text
reduce() → sum only
```

Wrong ❌

`reduce()` can create:

```text
Number
String
Array
Object
Boolean
```

Example:

```javascript
const result = [1, 2, 3].reduce(
    (acc, num) => acc + num,
    ""
);

console.log(result);
```

Output:

```text
"123"
```

---

# Q35. MERN Interview – Cart Total

Question:

> Calculate total price of all products in a shopping cart.

Answer:

```javascript
const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

console.log(total);
```

Output:

```text
54000
```

---

# Q36. MERN Interview – Group Users

```javascript
const users = [
    { name: "Ritesh", role: "developer" },
    { name: "Rahul", role: "designer" },
    { name: "Aman", role: "developer" }
];

const grouped = users.reduce((acc, user) => {

    if (!acc[user.role]) {
        acc[user.role] = [];
    }

    acc[user.role].push(user);

    return acc;

}, {});

console.log(grouped);
```

Result:

```text
{
    developer: [
        { name: "Ritesh", role: "developer" },
        { name: "Aman", role: "developer" }
    ],

    designer: [
        { name: "Rahul", role: "designer" }
    ]
}
```

---

# Q37. Interview Answer: What is reduce()?

### Best Answer

> "`reduce()` is a higher-order array method that processes each element and accumulates the result into a single value. The accumulator can be a number, string, object, array, or another data type."

---

# Q38. What is the difference between `reduce()` and `forEach()`?

### `reduce()`

Returns accumulated result:

```javascript
const sum = numbers.reduce(
    (acc, num) => acc + num,
    0
);
```

### `forEach()`

Does not return an accumulated result:

```javascript
let sum = 0;

numbers.forEach(num => {
    sum += num;
});
```

Easy:

```text
reduce()
↓
Result build karta hai

forEach()
↓
Side effect/action ke liye
```

---

# Q39. What is the difference between `reduce()` and `filter()`?

### `filter()`

Elements select karta hai:

```javascript
const result = numbers.filter(num => num > 2);
```

Result:

```text
[3, 4]
```

### `reduce()`

Elements ko accumulate karta hai:

```javascript
const result = numbers.reduce(
    (acc, num) => acc + num,
    0
);
```

Result:

```text
10
```

---

# Q40. What is the difference between `reduce()` and `map()`?

### `map()`

```text
Array → New Array
```

### `reduce()`

```text
Array → Accumulated Value
```

Example:

```javascript
const numbers = [1, 2, 3];

const mapped = numbers.map(num => num * 2);

const reduced = numbers.reduce(
    (acc, num) => acc + num,
    0
);
```

Result:

```text
mapped  → [2, 4, 6]
reduced → 6
```

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is reduce()?
2. Why do we use reduce()?
3. What is accumulator?
4. What is currentValue?
5. What is initialValue?
6. What does reduce() return?
7. Reduce with initial value vs without initial value?
8. What happens with empty array?
9. How to calculate sum using reduce()?
10. How to calculate product?
11. How to find maximum?
12. How to find minimum?
13. How to count elements?
14. How to count frequency?
15. How to group objects?
16. How to convert array into object?
17. How to flatten an array?
18. How to calculate shopping cart total?
19. Can reduce() return an array?
20. Can reduce() return an object?
21. reduce() vs map()?
22. reduce() vs filter()?
23. reduce() vs forEach()?
24. map + filter + reduce?
25. Real-world MERN use of reduce()?
26. Predict reduce() output questions.
```

---

# Quick Revision

```text
reduce()
    ↓
Array
    ↓
Accumulator
    ↓
Process every element
    ↓
Update accumulator
    ↓
Final accumulated value
```

### Syntax

```javascript
const result = arr.reduce(
    (accumulator, currentValue) => {
        return updatedAccumulator;
    },
    initialValue
);
```

### Sum

```javascript
const sum = [1, 2, 3, 4].reduce(
    (acc, num) => acc + num,
    0
);
```

Output:

```text
10
```

### Product

```javascript
const product = [1, 2, 3, 4].reduce(
    (acc, num) => acc * num,
    1
);
```

Output:

```text
24
```

---

# One-Line Interview Revision

> **`reduce()` processes all array elements and accumulates them into a single final value.**

# MERN Interview Focus ⭐⭐⭐⭐⭐

```text
reduce()
   ↓
Array Sum
   ↓
Cart Total
   ↓
Count Frequency
   ↓
Group Data
   ↓
Array → Object
   ↓
Flatten Array
   ↓
API Data Transformation
   ↓
map + filter + reduce
   ↓
React / MERN Real-world Logic
```
