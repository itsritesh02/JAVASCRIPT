# JavaScript Arrow Functions – Interview Questions & Answers

## Q1. What is an Arrow Function?

### Answer

Arrow function JavaScript me function likhne ka shorter aur modern syntax hai.

Normal function:

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Output:

```javascript
console.log(add(10, 20));
```

```text
30
```

### Interview me bolo

> "An arrow function is a shorter syntax for writing functions in JavaScript. It also has different `this` behavior compared to regular functions."

---

# Q2. Basic Syntax of Arrow Function

```javascript
const functionName = (parameters) => {
    // code
};
```

Example:

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

Output:

```text
Hello
```

---

# Q3. Arrow Function with Parameters

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

Output:

```text
30
```

---

# Q4. Arrow Function with One Parameter

Agar sirf **one parameter** hai, parentheses optional hain.

```javascript
const square = x => {
    return x * x;
};

console.log(square(5));
```

Output:

```text
25
```

Ye bhi valid hai:

```javascript
const square = (x) => {
    return x * x;
};
```

### Interview Tip

Readability ke liye parentheses use karna common hai:

```javascript
const square = (x) => x * x;
```

---

# Q5. Arrow Function without Parameters

Agar koi parameter nahi hai to `()` required hai.

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

Output:

```text
Hello
```

Ye invalid hai:

```javascript
const greet = => {
    console.log("Hello");
};
```

---

# Q6. Arrow Function with Multiple Parameters

Multiple parameters ke liye parentheses required hain.

```javascript
const add = (a, b) => {
    return a + b;
};
```

Example:

```javascript
console.log(add(5, 10));
```

Output:

```text
15
```

---

# Q7. What is Implicit Return?

Arrow function me agar sirf ek expression return karna ho, to `{}` aur `return` likhne ki zarurat nahi hoti.

Example:

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

Output:

```text
30
```

Ye internally conceptually:

```javascript
const add = (a, b) => {
    return a + b;
};
```

jaisa behave karta hai.

### Interview me bolo

> "Arrow functions support implicit return when the function body contains a single expression without curly braces."

---

# Q8. Explicit Return vs Implicit Return

## Explicit Return

```javascript
const add = (a, b) => {
    return a + b;
};
```

## Implicit Return

```javascript
const add = (a, b) => a + b;
```

Dono ka result same hai:

```javascript
console.log(add(2, 3));
```

Output:

```text
5
```

---

# Q9. Important: `{}` in Arrow Functions

Ye:

```javascript
const add = (a, b) => {
    return a + b;
};
```

block body hai.

Lekin:

```javascript
const add = (a, b) => a + b;
```

expression body hai.

### Important

Agar `{}` use kar rahe ho aur value return karni hai, to `return` likhna padega.

Wrong:

```javascript
const add = (a, b) => {
    a + b;
};
```

Output:

```text
undefined
```

Correct:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Output:

```text
5
```

---

# Q10. Arrow Function Returning an Object

Ye tricky interview question hai ⭐⭐⭐⭐⭐

Wrong:

```javascript
const getUser = () => {
    name: "Ritesh"
};
```

Ye object return nahi karega.

Correct:

```javascript
const getUser = () => ({
    name: "Ritesh"
});

console.log(getUser());
```

Output:

```text
{ name: "Ritesh" }
```

### Why?

Object ko parentheses me wrap karna padta hai:

```javascript
() => ({
    name: "Ritesh"
})
```

### Interview me bolo

> "When an arrow function implicitly returns an object, the object literal must be wrapped in parentheses."

---

# Q11. Arrow Function vs Normal Function

| Feature           | Normal Function   | Arrow Function                                          |
| ----------------- | ----------------- | ------------------------------------------------------- |
| Syntax            | Longer            | Shorter                                                 |
| `this`            | Own `this`        | Lexical `this`                                          |
| `arguments`       | Available         | Not own `arguments`                                     |
| Constructor       | Can use `new`     | Cannot use `new`                                        |
| `prototype`       | Has prototype     | No own prototype                                        |
| `call/apply/bind` | Can affect `this` | Cannot change lexical `this`                            |
| Methods           | Suitable          | Usually avoid for object methods needing dynamic `this` |

---

# Q12. What is `this` in Arrow Function?

### Very Important ⭐⭐⭐⭐⭐

Arrow function ka apna `this` nahi hota.

Ye surrounding lexical scope se `this` leta hai.

Example:

```javascript
const user = {
    name: "Ritesh",

    greet: function () {

        const arrow = () => {
            console.log(this.name);
        };

        arrow();
    }
};

user.greet();
```

Output:

```text
Ritesh
```

Arrow function ne `this` apne surrounding regular function se liya.

### Interview me bolo

> "Arrow functions don't have their own `this`; they capture `this` from the surrounding lexical scope."

---

# Q13. Normal Function ka `this` vs Arrow Function ka `this`

## Normal Function

```javascript
const user = {
    name: "Ritesh",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Ritesh
```

Yahan `this` object ko refer karta hai.

---

## Arrow Function

```javascript
const user = {
    name: "Ritesh",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
```

Arrow function object ka `this` nahi banata.

Isliye object methods ke liye arrow function use karte waqt `this` behavior carefully samajhna chahiye.

---

# Q14. Why are Arrow Functions useful in React?

### Answer

React me arrow functions frequently use hote hain because:

* Short syntax
* Callbacks ke liye convenient
* `this` ko lexical scope se capture karte hain

Example:

```javascript
const handleClick = () => {
    console.log("Button clicked");
};
```

Array methods:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

---

# Q15. Arrow Function with map()

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

---

# Q16. Arrow Function with filter()

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter((num) => num > 20);

console.log(result);
```

Output:

```text
[30, 40]
```

---

# Q17. Arrow Function with reduce()

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
```

Output:

```text
10
```

---

# Q18. Arrow Function as Callback

Callback ke andar arrow functions bahut commonly use hote hain.

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

1 second baad:

```text
Hello
```

---

# Q19. Can Arrow Functions be used as Constructors?

### Answer

**No.**

Arrow functions ko `new` ke saath use nahi kar sakte.

```javascript
const Person = (name) => {
    this.name = name;
};

const p = new Person("Ritesh");
```

Error:

```text
TypeError
```

### Interview me bolo

> "Arrow functions cannot be used as constructors because they do not have their own `prototype` and cannot be called with `new`."

---

# Q20. Does Arrow Function have its own `arguments`?

### Answer

No.

Arrow function ka apna `arguments` object nahi hota.

Normal function:

```javascript
function test() {
    console.log(arguments);
}

test(10, 20, 30);
```

Normal function me `arguments` available hai.

Arrow function:

```javascript
const test = () => {
    console.log(arguments);
};
```

Arrow function ke paas apna `arguments` nahi hota.

### Alternative

Rest parameter use karo:

```javascript
const test = (...args) => {
    console.log(args);
};

test(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

---

# Q21. What is Rest Parameter with Arrow Function?

```javascript
const sum = (...numbers) => {

    return numbers.reduce((acc, num) => acc + num, 0);

};

console.log(sum(1, 2, 3, 4));
```

Output:

```text
10
```

`...numbers` multiple arguments ko array me collect karta hai.

---

# Q22. Can Arrow Functions be Async?

### Answer

Yes.

```javascript
const getData = async () => {

    const response = await fetch("/api/users");

    const data = await response.json();

    return data;
};
```

React/Node.js me ye bahut common hai.

---

# Q23. Arrow Function with Default Parameters

```javascript
const greet = (name = "Guest") => {
    return `Hello ${name}`;
};

console.log(greet());
console.log(greet("Ritesh"));
```

Output:

```text
Hello Guest
Hello Ritesh
```

---

# Q24. Arrow Function with Destructuring

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

const printUser = ({ name, age }) => {
    console.log(name, age);
};

printUser(user);
```

Output:

```text
Ritesh 22
```

---

# Q25. What is lexical `this`?

### Answer

Arrow function `this` ko apne surrounding scope se inherit karta hai.

Example:

```javascript
function outer() {

    console.log(this);

    const arrow = () => {
        console.log(this);
    };

    arrow();
}
```

Arrow function ka `this` surrounding `outer()` function ke `this` se aata hai.

### Interview me bolo

> "Lexical this means the arrow function gets `this` from its surrounding scope instead of creating its own `this`."

---

# Tricky Interview Questions ⭐⭐⭐⭐⭐

## Q1.

```javascript
const add = (a, b) => a + b;

console.log(add(2, 3));
```

Output:

```text
5
```

---

## Q2.

```javascript
const add = (a, b) => {
    a + b;
};

console.log(add(2, 3));
```

Output:

```text
undefined
```

### Reason

Curly braces use kiye hain but `return` nahi hai.

---

## Q3.

```javascript
const square = x => x * x;

console.log(square(5));
```

Output:

```text
25
```

---

## Q4.

```javascript
const greet = () => "Hello";

console.log(greet());
```

Output:

```text
Hello
```

---

## Q5.

```javascript
const user = () => ({
    name: "Ritesh"
});

console.log(user());
```

Output:

```text
{ name: "Ritesh" }
```

---

## Q6.

```javascript
const user = () => {
    name: "Ritesh"
};

console.log(user());
```

Output:

```text
undefined
```

---

## Q7.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

## Q8.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter((num) => num % 2 === 0);

console.log(result);
```

Output:

```text
[2, 4]
```

---

# Arrow Functions – Most Important Interview Questions

```text
1. What is an arrow function?
2. Arrow function syntax?
3. Arrow vs normal function?
4. What is implicit return?
5. What is explicit return?
6. What is lexical this?
7. Does arrow function have its own this?
8. Can arrow function be used as constructor?
9. Does arrow function have arguments?
10. What is rest parameter?
11. Arrow function with map()
12. Arrow function with filter()
13. Arrow function with reduce()
14. Arrow function with async/await?
15. How to return an object from arrow function?
16. Why parentheses are needed around returned object?
17. Arrow function with default parameters?
18. Arrow function with destructuring?
```

---

# Quick Revision

```text
Arrow Function
      ↓
Short Function Syntax
      ↓
const add = (a, b) => a + b;
      ↓
Implicit Return
      ↓
No own `this`
      ↓
Lexical `this`
      ↓
No own `arguments`
      ↓
Cannot use `new`
      ↓
Very common with callbacks
      ↓
map()
filter()
reduce()
setTimeout()
Promises
React
```

---

# Best Interview Answer

### Interviewer:

> What is an arrow function and how is it different from a regular function?

### Answer:

> "An arrow function is a shorter syntax for defining functions in JavaScript. The main difference is that arrow functions don't have their own `this` or `arguments`; they inherit `this` from the surrounding lexical scope. They also cannot be used as constructors with `new`. Arrow functions are commonly used for callbacks and array methods like map, filter and reduce."

---

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye Arrow Functions me especially ye strong karo:

```text
⭐⭐⭐⭐⭐

Arrow Syntax
     ↓
Implicit Return
     ↓
Arrow vs Normal Function
     ↓
`this`
     ↓
Lexical `this`
     ↓
Callback Functions
     ↓
map / filter / reduce
     ↓
Async Arrow Functions
     ↓
Object Return
     ↓
Rest Parameters
```
