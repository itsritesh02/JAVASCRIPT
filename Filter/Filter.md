# JavaScript `filter()` – Interview Questions & Answers

## What is `filter()`?

`filter()` JavaScript ka array method hai jo array ke elements me se **condition satisfy karne wale elements ko select** karta hai aur **ek new array return** karta hai.

### Simple Definition

> `filter()` is used to select elements from an array based on a condition.

---

# Basic Syntax

```javascript
const result = array.filter((element) => {
    return condition;
});
```

Example:

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

---

# Q1. Why do we use `filter()`?

`filter()` ka use array me se **specific elements ko select** karne ke liye hota hai.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(num => num > 2);

console.log(result);
```

Output:

```text
[3, 4, 5]
```

---

# Q2. What does `filter()` return?

`filter()` hamesha **new array** return karta hai.

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.filter(num => num > 1);

console.log(result);
```

Output:

```text
[2, 3]
```

---

# Q3. Does `filter()` modify the original array?

Nahi.

`filter()` original array ko modify nahi karta.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter(num => num > 2);

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3, 4]
[3, 4]
```

---

# Q4. `filter()` condition kaise work karti hai?

Callback:

```javascript
num => num > 2
```

Agar condition:

```text
true
```

hai → element new array me jayega.

Agar:

```text
false
```

hai → element reject ho jayega.

Example:

```text
1 > 2 → false ❌
2 > 2 → false ❌
3 > 2 → true  ✅
4 > 2 → true  ✅
```

Result:

```text
[3, 4]
```

---

# Q5. `filter()` with Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter(num => num % 2 === 0);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

# Q6. `filter()` with Odd Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter(num => num % 2 !== 0);

console.log(result);
```

Output:

```text
[1, 3, 5]
```

---

# Q7. `filter()` with Strings

```javascript
const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

const result = fruits.filter(fruit => fruit.length > 5);

console.log(result);
```

Output:

```text
["Banana", "Orange"]
```

---

# Q8. `filter()` with Objects ⭐⭐⭐⭐⭐

MERN interview ke liye very important.

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Rahul",
        age: 16
    },
    {
        name: "Aman",
        age: 25
    }
];

const result = users.filter(user => user.age >= 18);

console.log(result);
```

Output:

```text
[
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Aman",
        age: 25
    }
]
```

---

# Q9. Filter Active Users

Common MERN/API example:

```javascript
const users = [
    {
        name: "Ritesh",
        active: true
    },
    {
        name: "Rahul",
        active: false
    },
    {
        name: "Aman",
        active: true
    }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
```

Output:

```text
[
    {
        name: "Ritesh",
        active: true
    },
    {
        name: "Aman",
        active: true
    }
]
```

---

# Q10. Filter Products by Price

```javascript
const products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mobile",
        price: 20000
    },
    {
        name: "Mouse",
        price: 1000
    }
];

const result = products.filter(product => product.price > 10000);

console.log(result);
```

Output:

```text
[
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mobile",
        price: 20000
    }
]
```

---

# Q11. Filter by Multiple Conditions

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22,
        active: true
    },
    {
        name: "Rahul",
        age: 25,
        active: false
    },
    {
        name: "Aman",
        age: 30,
        active: true
    }
];

const result = users.filter(
    user => user.age > 20 && user.active
);

console.log(result);
```

Output:

```text
[
    {
        name: "Ritesh",
        age: 22,
        active: true
    },
    {
        name: "Aman",
        age: 30,
        active: true
    }
]
```

---

# Q12. `filter()` Callback Arguments

`filter()` callback ko commonly 3 arguments milte hain:

```text
1. element
2. index
3. array
```

Example:

```javascript
const numbers = [10, 20, 30];

numbers.filter((num, index, arr) => {

    console.log(num);
    console.log(index);
    console.log(arr);

    return num > 10;

});
```

---

# Q13. What happens if filter callback returns truthy/falsy?

`filter()` condition ke result ko truthy/falsy ke basis par decide karta hai.

Example:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter(num => num);

console.log(result);
```

Output:

```text
[1, 2, 3, 4]
```

Because all numbers truthy hain.

Example:

```javascript
const numbers = [0, 1, false, 2, "", 3];

const result = numbers.filter(value => value);

console.log(result);
```

Output:

```text
[1, 2, 3]
```

---

# Q14. Filter Falsy Values

JavaScript me common falsy values:

```text
false
0
""
null
undefined
NaN
```

Example:

```javascript
const values = [
    0,
    1,
    false,
    2,
    "",
    3,
    null
];

const result = values.filter(Boolean);

console.log(result);
```

Output:

```text
[1, 2, 3]
```

---

# Q15. `filter()` vs `map()` ⭐⭐⭐⭐⭐

### `filter()`

Elements ko select karta hai.

```javascript
const result = numbers.filter(num => num > 2);
```

Output:

```text
[3, 4]
```

### `map()`

Elements ko transform karta hai.

```javascript
const result = numbers.map(num => num * 2);
```

Output:

```text
[2, 4, 6, 8]
```

### Easy Trick

```text
filter()
↓
SELECT

map()
↓
TRANSFORM
```

---

# Q16. `filter()` vs `forEach()`

### filter()

New array return karta hai.

```javascript
const result = numbers.filter(num => num > 2);
```

### forEach()

Sirf callback execute karta hai.

```javascript
numbers.forEach(num => {
    console.log(num);
});
```

| Method      | Purpose         | Return      |
| ----------- | --------------- | ----------- |
| `filter()`  | Select elements | New array   |
| `forEach()` | Perform action  | `undefined` |

---

# Q17. `filter()` vs `find()` ⭐⭐⭐⭐⭐

Very important interview question.

### `filter()`

Saare matching elements return karta hai.

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter(num => num > 20);

console.log(result);
```

Output:

```text
[30, 40]
```

### `find()`

Sirf **first matching element** return karta hai.

```javascript
const result = numbers.find(num => num > 20);

console.log(result);
```

Output:

```text
30
```

### Easy Trick

```text
filter()
↓
ALL matches

find()
↓
FIRST match
```

---

# Q18. What if no element matches?

`filter()` empty array return karta hai.

```javascript
const numbers = [1, 2, 3];

const result = numbers.filter(num => num > 10);

console.log(result);
```

Output:

```text
[]
```

---

# Q19. What if no element matches in `find()`?

`find()`:

```text
undefined
```

return karta hai.

Example:

```javascript
const result = numbers.find(num => num > 10);

console.log(result);
```

Output:

```text
undefined
```

---

# Q20. Can `filter()` be chained?

Yes ✅

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(num => num > 2)
    .filter(num => num < 5);

console.log(result);
```

Output:

```text
[3, 4]
```

---

# Q21. `filter()` + `map()` ⭐⭐⭐⭐⭐

Very important for MERN.

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Rahul",
        age: 16
    },
    {
        name: "Aman",
        age: 25
    }
];

const result = users
    .filter(user => user.age >= 18)
    .map(user => user.name);

console.log(result);
```

Output:

```text
["Ritesh", "Aman"]
```

Flow:

```text
users
  ↓
filter age >= 18
  ↓
Adult users
  ↓
map name
  ↓
["Ritesh", "Aman"]
```

---

# Q22. `filter()` + `map()` + `reduce()`

Interview level example:

```javascript
const products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mobile",
        price: 20000
    },
    {
        name: "Mouse",
        price: 1000
    }
];

const total = products
    .filter(product => product.price > 10000)
    .map(product => product.price)
    .reduce((sum, price) => sum + price, 0);

console.log(total);
```

Output:

```text
70000
```

Flow:

```text
Products
   ↓
price > 10000
   ↓
Laptop, Mobile
   ↓
[50000, 20000]
   ↓
reduce
   ↓
70000
```

---

# Q23. `filter()` in React ⭐⭐⭐⭐⭐

React me data ko condition ke basis par display karne ke liye use kar sakte hain.

```javascript
const products = [
    {
        id: 1,
        name: "Laptop",
        available: true
    },
    {
        id: 2,
        name: "Mobile",
        available: false
    }
];

const availableProducts =
    products.filter(product => product.available);
```

Then:

```javascript
availableProducts.map(product => (
    <div key={product.id}>
        {product.name}
    </div>
));
```

---

# Q24. `filter()` with Search

MERN/React applications me common example:

```javascript
const users = [
    { name: "Ritesh" },
    { name: "Rahul" },
    { name: "Aman" }
];

const search = "ri";

const result = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
);

console.log(result);
```

Output:

```text
[
    {
        name: "Ritesh"
    }
]
```

---

# Q25. Remove an Item Using `filter()`

React state me common pattern:

```javascript
const users = [
    { id: 1, name: "Ritesh" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
];

const result = users.filter(user => user.id !== 2);

console.log(result);
```

Output:

```text
[
    { id: 1, name: "Ritesh" },
    { id: 3, name: "Aman" }
]
```

This is useful because original array mutate nahi hota.

---

# Q26. Remove Duplicate Values

Simple unique values ke liye:

```javascript
const numbers = [1, 2, 2, 3, 3, 4];

const result = numbers.filter(
    (num, index) => numbers.indexOf(num) === index
);

console.log(result);
```

Output:

```text
[1, 2, 3, 4]
```

Note:

Large arrays ke liye `Set` usually more efficient/simple approach hai.

---

# Q27. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(num => num % 2 === 0);

console.log(result);
```

Output:

```text
[2, 4]
```

---

# Q28. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [10, 20, 30];

const result = numbers.filter(num => num > 100);

console.log(result);
```

Output:

```text
[]
```

---

# Q29. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.filter(num => num);

console.log(result);
```

Output:

```text
[1, 2, 3]
```

---

# Q30. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [0, 1, false, 2, "", 3];

const result = numbers.filter(Boolean);

console.log(result);
```

Output:

```text
[1, 2, 3]
```

---

# Q31. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter(num => num > 2);

console.log(numbers === result);
```

Output:

```text
false
```

Because `filter()` new array return karta hai.

---

# Q32. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const users = [
    { name: "Ritesh", age: 22 },
    { name: "Rahul", age: 17 }
];

const result = users.filter(user => user.age >= 18);

console.log(result.length);
```

Output:

```text
1
```

---

# Q33. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 10);

console.log(result);
```

Flow:

```text
[1,2,3,4,5]
     ↓
even
     ↓
[2,4]
     ↓
×10
     ↓
[20,40]
```

Output:

```text
[20, 40]
```

---

# Q34. Does `filter()` mutate objects?

`filter()` new array banata hai, but returned objects same references ho sakte hain.

Example:

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    }
];

const result = users.filter(user => true);

result[0].age = 23;

console.log(users[0].age);
```

Output:

```text
23
```

Reason:

```text
filter()
   ↓
New Array
   ↓
Same Object References
```

---

# Q35. Interview Answer: What is filter()?

### Best Answer

> "`filter()` is a higher-order array method in JavaScript that creates a new array containing only the elements that satisfy a condition. It does not normally modify the original array, but the objects inside the resulting array can still reference the same objects as the original array."

---

# `filter()` vs `map()` vs `find()` vs `forEach()`

| Method      | Main Purpose   | Return                |
| ----------- | -------------- | --------------------- |
| `map()`     | Transform      | New array             |
| `filter()`  | Select         | New array             |
| `find()`    | First match    | Element / `undefined` |
| `forEach()` | Perform action | `undefined`           |

Easy trick:

```text
map()
↓
TRANSFORM

filter()
↓
SELECT

find()
↓
FIRST MATCH

forEach()
↓
ACTION
```

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is filter()?
2. Why do we use filter()?
3. What does filter() return?
4. Does filter() modify original array?
5. How does filter() condition work?
6. filter() vs map()?
7. filter() vs find()?
8. filter() vs forEach()?
9. What happens if no element matches?
10. What are filter() callback arguments?
11. Can filter() be chained?
12. How to filter objects?
13. How to filter active users?
14. How to filter products by price?
15. How to implement search using filter()?
16. How to remove an item using filter()?
17. How to remove duplicates using filter()?
18. How does filter() work with truthy/falsy values?
19. Can filter() mutate objects?
20. filter() + map() interview questions?
21. filter() + reduce() interview questions?
22. How is filter() used in React?
```

---

# Quick Revision

```text
filter()
   ↓
Array
   ↓
Condition
   ↓
true  → Keep
false → Remove
   ↓
New Array
```

### Syntax

```javascript
const result = arr.filter((element, index, array) => {
    return condition;
});
```

### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(num => num > 2);

console.log(result);
```

Output:

```text
[3, 4, 5]
```

---

# One-Line Interview Revision

> **`filter()` selects elements that satisfy a condition and returns them in a new array.**

# MERN Interview Focus ⭐⭐⭐⭐⭐

```text
filter()
   ↓
Select Data
   ↓
API Data Filtering
   ↓
Search
   ↓
Active/Inactive Users
   ↓
Product Filtering
   ↓
Remove Item
   ↓
React Rendering
   ↓
filter + map
   ↓
filter + reduce
```
