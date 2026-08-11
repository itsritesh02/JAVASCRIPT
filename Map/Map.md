# JavaScript `map()` – Interview Questions & Answers

## What is `map()`?

`map()` JavaScript ka array method hai jo array ke **har element par function execute** karta hai aur **ek new array return** karta hai.

### Simple Definition

> `map()` is used to transform each element of an array and returns a new array.

---

# Basic Syntax

```javascript
const result = array.map((element) => {
    return newValue;
});
```

Example:

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

---

# Q1. Why do we use `map()`?

`map()` ka use array ke elements ko **transform** karne ke liye hota hai.

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num + 10);

console.log(result);
```

Output:

```text
[11, 12, 13]
```

---

# Q2. Does `map()` modify the original array?

Generally, `map()` original array ko modify nahi karta.

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3]
[2, 4, 6]
```

So:

```text
numbers → original array
result  → new array
```

---

# Q3. What does `map()` return?

`map()` **new array** return karta hai.

Example:

```javascript
const numbers = [10, 20, 30];

const result = numbers.map((num) => num / 10);

console.log(result);
```

Output:

```text
[1, 2, 3]
```

---

# Q4. What happens if we don't return anything?

Example:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
    num * 2;
});

console.log(result);
```

Output:

```text
[undefined, undefined, undefined]
```

Because callback ne kuch return nahi kiya.

Correct:

```javascript
const result = numbers.map((num) => {
    return num * 2;
});
```

---

# Q5. `map()` with Arrow Function

Short syntax:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

# Q6. `map()` callback ke arguments

`map()` callback ko commonly 3 arguments mil sakte hain:

```text
1. element
2. index
3. array
```

Example:

```javascript
const numbers = [10, 20, 30];

numbers.map((num, index, arr) => {

    console.log(num);
    console.log(index);
    console.log(arr);

});
```

---

# Q7. `map()` with index

```javascript
const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.map((fruit, index) => {

    return `${index}: ${fruit}`;

});

console.log(result);
```

Output:

```text
[
    "0: Apple",
    "1: Banana",
    "2: Mango"
]
```

---

# Q8. `map()` with Objects ⭐⭐⭐⭐⭐

MERN interview ke liye very important.

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Rahul",
        age: 23
    }
];

const names = users.map((user) => {
    return user.name;
});

console.log(names);
```

Output:

```text
["Ritesh", "Rahul"]
```

---

# Q9. Transform Objects using `map()`

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    },
    {
        name: "Rahul",
        age: 23
    }
];

const result = users.map((user) => {

    return {
        name: user.name,
        isAdult: user.age >= 18
    };

});

console.log(result);
```

Output:

```text
[
    {
        name: "Ritesh",
        isAdult: true
    },
    {
        name: "Rahul",
        isAdult: true
    }
]
```

---

# Q10. `map()` vs `forEach()`

Very important ⭐⭐⭐⭐⭐

### `map()`

```javascript
const result = numbers.map(num => num * 2);
```

Returns:

```text
New Array
```

### `forEach()`

```javascript
numbers.forEach(num => {
    console.log(num * 2);
});
```

Returns:

```text
undefined
```

### Interview Answer

> `map()` is used when we want to transform an array and get a new array. `forEach()` is generally used when we just want to perform an action for each element.

---

# Q11. `map()` vs `filter()`

### `map()`

Transformation ke liye:

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

### `filter()`

Condition ke basis par elements select karne ke liye:

```javascript
const result = numbers.filter(num => num > 1);

console.log(result);
```

Output:

```text
[2, 3]
```

### Easy Trick

```text
map()
↓
Transform

filter()
↓
Select
```

---

# Q12. Can we use `map()` with strings?

Directly string par `map()` nahi hota.

Wrong:

```javascript
const name = "Ritesh";

name.map(char => char.toUpperCase());
```

String ko array me convert kar sakte hain:

```javascript
const name = "Ritesh";

const result = [...name].map(char => char.toUpperCase());

console.log(result);
```

Output:

```text
["R", "I", "T", "E", "S", "H"]
```

---

# Q13. `map()` with Array of Numbers

```javascript
const numbers = [2, 4, 6, 8];

const squares = numbers.map(num => num * num);

console.log(squares);
```

Output:

```text
[4, 16, 36, 64]
```

---

# Q14. Convert Strings to Numbers

```javascript
const numbers = ["10", "20", "30"];

const result = numbers.map(num => Number(num));

console.log(result);
```

Output:

```text
[10, 20, 30]
```

---

# Q15. `map()` with `parseInt()` – Important ⭐⭐⭐⭐⭐

Ye interview me tricky question ho sakta hai.

```javascript
const numbers = ["10", "20", "30"];

const result = numbers.map(parseInt);

console.log(result);
```

Unexpected output:

```text
[10, NaN, NaN]
```

Why?

`map()` callback ko:

```text
value, index, array
```

milta hai.

`parseInt()` second argument ko radix samajhta hai.

Conceptually:

```javascript
parseInt("10", 0)
parseInt("20", 1)
parseInt("30", 2)
```

Isliye unexpected result aata hai.

Correct:

```javascript
const result = numbers.map(num => parseInt(num, 10));

console.log(result);
```

Output:

```text
[10, 20, 30]
```

---

# Q16. Can `map()` be chained?

### Yes ✅

Example:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers
    .map(num => num * 2)
    .map(num => num + 1);

console.log(result);
```

Output:

```text
[3, 5, 7, 9]
```

Flow:

```text
[1,2,3,4]
     ↓ map ×2
[2,4,6,8]
     ↓ map +1
[3,5,7,9]
```

---

# Q17. `map()` + `filter()`

Very important ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(num => num > 2)
    .map(num => num * 2);

console.log(result);
```

Output:

```text
[6, 8, 10]
```

Flow:

```text
[1,2,3,4,5]
      ↓
filter > 2
      ↓
[3,4,5]
      ↓
map × 2
      ↓
[6,8,10]
```

---

# Q18. `map()` + `filter()` with Objects

MERN me very important.

```javascript
const users = [
    { name: "Ritesh", age: 22 },
    { name: "Rahul", age: 16 },
    { name: "Aman", age: 25 }
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

---

# Q19. `map()` in React ⭐⭐⭐⭐⭐

React me lists render karne ke liye `map()` bahut commonly use hota hai.

Example:

```javascript
const users = [
    "Ritesh",
    "Rahul",
    "Aman"
];

function App() {

    return (
        <div>

            {users.map((user, index) => (
                <p key={index}>
                    {user}
                </p>
            ))}

        </div>
    );
}
```

Yahan:

```text
users array
    ↓
map()
    ↓
React elements
```

---

# Q20. Why is `key` used with React map()?

React list rendering me `key` prop React ko elements ko identify karne me help karta hai.

Example:

```javascript
users.map(user => (
    <div key={user.id}>
        {user.name}
    </div>
))
```

Best practice:

> Stable unique ID ko key ke liye prefer karo.

Example:

```javascript
key={user.id}
```

---

# Q21. Should we use array index as React key?

Possible hai:

```javascript
key={index}
```

Lekin dynamic lists me generally **stable unique ID** better hai.

Better:

```javascript
key={user.id}
```

Avoid index when list me:

* items add/remove hote hain
* reorder hote hain
* item positions change hoti hain

---

# Q22. Can `map()` change the original object?

`map()` new array return karta hai, but agar callback me existing object ko directly mutate kar diya, to original nested object bhi change ho sakta hai.

Example:

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    }
];

const result = users.map(user => {

    user.age = 23;

    return user;
});

console.log(users[0].age);
```

Output:

```text
23
```

Reason:

`map()` ne new array banaya, but same object reference use hua.

---

# Q23. How to avoid object mutation in map()?

Spread operator use kar sakte hain.

```javascript
const users = [
    {
        name: "Ritesh",
        age: 22
    }
];

const result = users.map(user => {

    return {
        ...user,
        age: 23
    };

});

console.log(users[0].age);
console.log(result[0].age);
```

Output:

```text
22
23
```

---

# Q24. Does `map()` skip empty slots?

Sparse arrays ke empty slots par callback invoke nahi hota, aur result me corresponding slot empty reh sakta hai.

Example:

```javascript
const arr = [1, , 3];

const result = arr.map(num => num * 2);

console.log(result);
```

Ye dense array ki tarah `[2, undefined, 6]` zaroori nahi banata; sparse slot preserve ho sakta hai.

Interview me basic arrays ke liye is edge case ko usually ignore kar sakte ho.

---

# Q25. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => {

    return num * 2;

});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

# Q26. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => {
    console.log(num);
});

console.log(result);
```

Output:

```text
1
2
3
[undefined, undefined, undefined]
```

Because callback me `return` nahi hai.

---

# Q27. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num, index) => {

    return num + index;

});

console.log(result);
```

Calculation:

```text
1 + 0 = 1
2 + 1 = 3
3 + 2 = 5
```

Output:

```text
[1, 3, 5]
```

---

# Q28. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => num);

console.log(numbers === result);
```

Output:

```text
false
```

Why?

`map()` new array create karta hai.

---

# Q29. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => {

    return num * 2;

});

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

Original array unchanged hai.

---

# Q30. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const users = [
    { name: "Ritesh", age: 22 },
    { name: "Rahul", age: 25 }
];

const names = users.map(user => user.name);

console.log(names);
```

Output:

```text
["Ritesh", "Rahul"]
```

---

# Q31. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers
    .map(num => num * 2)
    .filter(num => num > 4);

console.log(result);
```

Flow:

```text
[1,2,3,4]
   ↓ map ×2
[2,4,6,8]
   ↓ filter >4
[6,8]
```

Output:

```text
[6, 8]
```

---

# Q32. `map()` vs `reduce()`

### map()

Multiple values ko transform karke **new array** deta hai.

```javascript
const result = [1, 2, 3].map(num => num * 2);
```

Output:

```text
[2,4,6]
```

### reduce()

Array ko generally **single value** me reduce karta hai.

```javascript
const result = [1, 2, 3].reduce(
    (sum, num) => sum + num,
    0
);
```

Output:

```text
6
```

### Easy Trick

```text
map()
↓
Array → New Array

reduce()
↓
Array → Single Value
```

---

# Q33. `map()` vs `forEach()` vs `filter()`

| Method      | Purpose         | Return      |
| ----------- | --------------- | ----------- |
| `map()`     | Transform       | New array   |
| `forEach()` | Perform action  | `undefined` |
| `filter()`  | Select elements | New array   |

Example:

```text
map
[1,2,3] → [2,4,6]

filter
[1,2,3] → [2,3]  // condition based

forEach
[1,2,3] → side effect
```

---

# Q34. When should you use `map()`?

Use `map()` when:

```text
1. Har element ko transform karna ho
2. New array chahiye
3. API data ko reshape karna ho
4. React me list render karni ho
5. Object properties extract karni ho
```

---

# Q35. When should you NOT use `map()`?

Agar sirf side effect perform karna hai aur new array nahi chahiye, generally `forEach()` more appropriate hai.

Example:

```javascript
users.forEach(user => {
    console.log(user.name);
});
```

Instead of:

```javascript
users.map(user => {
    console.log(user.name);
});
```

---

# MERN Example – API Data

Suppose API se:

```javascript
const users = [
    {
        _id: "101",
        name: "Ritesh",
        email: "ritesh@example.com"
    },
    {
        _id: "102",
        name: "Rahul",
        email: "rahul@example.com"
    }
];
```

Sirf names chahiye:

```javascript
const names = users.map(user => user.name);

console.log(names);
```

Output:

```text
["Ritesh", "Rahul"]
```

---

# MERN Example – Data Transformation

```javascript
const users = [
    {
        _id: "101",
        name: "Ritesh",
        age: 22
    }
];

const result = users.map(user => ({
    id: user._id,
    username: user.name
}));

console.log(result);
```

Output:

```text
[
    {
        id: "101",
        username: "Ritesh"
    }
]
```

---

# React Example

```javascript
const products = [
    {
        id: 1,
        name: "Laptop"
    },
    {
        id: 2,
        name: "Mobile"
    }
];
```

Render:

```javascript
function Products() {

    return (
        <div>

            {products.map(product => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}

        </div>
    );
}
```

---

# Interview Answer: What is map()?

### Best Answer

> "`map()` is a higher-order array method in JavaScript used to transform every element of an array. It executes a callback for each existing element and returns a new array. It does not normally modify the original array, although the callback can still mutate referenced objects if we explicitly do so."

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is map()?
2. Why do we use map()?
3. What does map() return?
4. Does map() modify the original array?
5. map() vs forEach()?
6. map() vs filter()?
7. map() vs reduce()?
8. What arguments does map callback receive?
9. What happens if we don't return from map()?
10. Can map() be chained?
11. How to use map() with objects?
12. How is map() used in React?
13. Why is key used with map() in React?
14. Why should stable IDs be preferred over array index as key?
15. Can map() mutate objects?
16. What is shallow copying with map()?
17. map() with Promise?
18. map() + Promise.all()?
19. Explain map(parseInt) issue.
20. Predict map() output questions.
```

---

# Quick Revision

```text
map()
  ↓
Takes Array
  ↓
Runs callback for each element
  ↓
Transforms elements
  ↓
Returns New Array
```

### Syntax

```javascript
const result = arr.map((element, index, array) => {
    return newValue;
});
```

### Example

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

# One-Line Interview Revision

```text
map() → transform every element → returns a new array
```

# MERN Interview Focus ⭐⭐⭐⭐⭐

```text
map()
  ↓
Array Transformation
  ↓
Object Transformation
  ↓
API Data
  ↓
React List Rendering
  ↓
key prop
  ↓
map + filter
  ↓
map + reduce
  ↓
map + Promise.all()
  ↓
Output Questions
```
