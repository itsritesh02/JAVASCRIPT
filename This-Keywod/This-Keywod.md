# JavaScript `this` Keyword – Interview Questions & Answers

## What is `this`?

JavaScript me `this` ek special keyword hai jo **current execution context ke object/reference** ko point karta hai.

Simple words:

> `this` ki value mostly is baat par depend karti hai ki function **kaise call hua hai**.

### Important ⭐

`this` ko sirf function kahan likha gaya hai usse nahi, balki **function kaise invoke hua** usse samajhna important hai.

---

# Q1. What is `this` keyword?

Example:

```javascript
const user = {
    name: "Ritesh",

    greet: function() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Ritesh
```

Yahan:

```text
this
 ↓
user
```

So:

```javascript
this.name
```

means:

```javascript
user.name
```

---

# Q2. `this` in an Object Method

```javascript
const user = {

    name: "Ritesh",

    sayHello: function() {

        console.log(this.name);

    }
};

user.sayHello();
```

Output:

```text
Ritesh
```

Because method ko:

```javascript
user.sayHello()
```

ke through call kiya gaya.

So:

```text
this → user
```

---

# Q3. Important Rule

Agar normal function ko object ke through call kiya:

```javascript
object.method()
```

to:

```text
this → object
```

Example:

```javascript
const person = {

    name: "Ritesh",

    greet() {
        console.log(this);
    }

};

person.greet();
```

Yahan:

```text
this → person
```

---

# Q4. `this` in a Regular Function

Example:

```javascript
function show() {

    console.log(this);

}

show();
```

Iska exact behavior environment aur strict mode par depend karta hai.

### Browser non-strict mode:

```text
this → window
```

### Strict mode:

```text
this → undefined
```

Example:

```javascript
"use strict";

function show() {

    console.log(this);

}

show();
```

Output:

```text
undefined
```

---

# Q5. What is `this` in Global Scope?

Browser me:

```javascript
console.log(this);
```

Classic script ke global context me generally:

```text
window
```

mil sakta hai.

Lekin ES modules me top-level `this`:

```text
undefined
```

hota hai.

### Interview Tip ⭐

Global `this` ka answer environment/script/module context par depend karta hai.

---

# Q6. `this` in Arrow Function

Arrow function ka **apna `this` nahi hota**.

Arrow function apne surrounding lexical context ka `this` use karta hai.

Example:

```javascript
const user = {

    name: "Ritesh",

    greet: () => {
        console.log(this.name);
    }

};

user.greet();
```

Yahan arrow function `user` ka `this` nahi leta.

### Important

```text
Normal function
→ own this based on call

Arrow function
→ lexical this
```

---

# Q7. Normal Function vs Arrow Function

### Normal Function

```javascript
const user = {

    name: "Ritesh",

    greet: function() {
        console.log(this.name);
    }

};

user.greet();
```

Output:

```text
Ritesh
```

### Arrow Function

```javascript
const user = {

    name: "Ritesh",

    greet: () => {
        console.log(this.name);
    }

};

user.greet();
```

Usually:

```text
undefined
```

because arrow function ka `this` object method call se bind nahi hota.

---

# Q8. Why doesn't Arrow Function have its own `this`?

Arrow function `this` ko **lexically inherit** karta hai.

Example:

```javascript
const user = {

    name: "Ritesh",

    greet: function() {

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

Flow:

```text
user.greet()
      ↓
this → user
      ↓
arrow function
      ↓
arrow inherits this
      ↓
user
```

---

# Q9. `this` in Nested Regular Function

Important interview question ⭐⭐⭐⭐⭐

```javascript
const user = {

    name: "Ritesh",

    greet: function() {

        function inner() {

            console.log(this.name);

        }

        inner();
    }
};

user.greet();
```

`inner()` ko object ke through call nahi kiya gaya.

Isliye `inner` ka `this`, `greet` ke `this` ke equal automatically nahi hota.

Strict/non-strict mode ke according behavior differ kar sakta hai.

---

# Q10. How does Arrow Function solve this problem?

```javascript
const user = {

    name: "Ritesh",

    greet: function() {

        const inner = () => {

            console.log(this.name);

        };

        inner();
    }
};

user.greet();
```

Output:

```text
Ritesh
```

Because arrow function outer `greet()` ka `this` inherit karta hai.

---

# Q11. `this` with `call()`

`call()` ka use karke explicitly `this` set kar sakte hain.

```javascript
function greet() {

    console.log(this.name);

}

const user = {
    name: "Ritesh"
};

greet.call(user);
```

Output:

```text
Ritesh
```

Yahan:

```text
this → user
```

---

# Q12. `this` with `apply()`

`apply()` bhi explicitly `this` set karta hai.

```javascript
function greet(city) {

    console.log(this.name, city);

}

const user = {
    name: "Ritesh"
};

greet.apply(user, ["Delhi"]);
```

Output:

```text
Ritesh Delhi
```

Difference mainly arguments pass karne ke way me hai.

---

# Q13. `call()` vs `apply()`

### call()

Arguments individually:

```javascript
greet.call(user, "Delhi");
```

### apply()

Arguments array me:

```javascript
greet.apply(user, ["Delhi"]);
```

### Easy Trick

```text
call
→ comma-separated arguments

apply
→ array of arguments
```

---

# Q14. What is `bind()`?

`bind()` ek **new function** return karta hai jisme `this` permanently specified object se bind ho jata hai.

Example:

```javascript
function greet() {

    console.log(this.name);

}

const user = {
    name: "Ritesh"
};

const newFunction = greet.bind(user);

newFunction();
```

Output:

```text
Ritesh
```

---

# Q15. call vs apply vs bind

| Method    | Executes immediately?    | Arguments              |
| --------- | ------------------------ | ---------------------- |
| `call()`  | Yes                      | Individually           |
| `apply()` | Yes                      | Array                  |
| `bind()`  | No, new function returns | Individually/partially |

Example:

```javascript
greet.call(user, "Delhi");

greet.apply(user, ["Delhi"]);

const fn = greet.bind(user, "Delhi");
fn();
```

---

# Q16. `this` with Constructor Function

Constructor function ke saath `new` use karne par `this` newly created object ko refer karta hai.

```javascript
function User(name) {

    this.name = name;

}

const user = new User("Ritesh");

console.log(user.name);
```

Output:

```text
Ritesh
```

Flow:

```text
new User()
    ↓
new object created
    ↓
this → new object
    ↓
this.name = "Ritesh"
```

---

# Q17. `this` with Class

JavaScript class me:

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(this.name);

    }
}

const user = new User("Ritesh");

user.greet();
```

Output:

```text
Ritesh
```

Yahan `this` newly created object ko refer karta hai.

---

# Q18. `this` in Event Handler

Browser me normal event handler function me `this` commonly event target element ko refer karta hai.

Example:

```javascript
button.addEventListener("click", function() {

    console.log(this);

});
```

Yahan:

```text
this → button
```

commonly hota hai.

---

# Q19. Arrow Function in Event Handler

```javascript
button.addEventListener("click", () => {

    console.log(this);

});
```

Arrow function apna `this` create nahi karta.

Isliye `this` surrounding lexical context se aayega, button se automatically bind nahi hoga.

---

# Q20. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {

    name: "Ritesh",

    greet: function() {
        console.log(this.name);
    }

};

user.greet();
```

Output:

```text
Ritesh
```

Reason:

```text
user.greet()
     ↓
this = user
```

---

# Q21. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {

    name: "Ritesh",

    greet: () => {
        console.log(this.name);
    }

};

user.greet();
```

Output is generally:

```text
undefined
```

Reason:

Arrow function object method call se `this` bind nahi karta.

---

# Q22. Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {

    name: "Ritesh",

    greet: function() {

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

Because:

```text
greet()
 ↓
this = user
 ↓
arrow inherits this
 ↓
user
```

---

# Q23. Important Output Question

```javascript
const user1 = {
    name: "Ritesh"
};

const user2 = {
    name: "Rahul"
};

function greet() {

    console.log(this.name);

}

greet.call(user1);

greet.call(user2);
```

Output:

```text
Ritesh
Rahul
```

`call()` explicitly `this` change kar raha hai.

---

# Q24. Important Output Question

```javascript
const user = {

    name: "Ritesh",

    greet() {

        console.log(this.name);

    }

};

const fn = user.greet;

fn();
```

Yahan important concept hai:

```text
user.greet
```

ko variable me assign karne ke baad function ko:

```text
fn()
```

ke through call kiya gaya.

Object method call nahi raha.

Isliye `this` ab `user` automatically nahi hota.

Strict mode me:

```text
undefined
```

ho sakta hai.

---

# Q25. How to preserve `this`?

`bind()` use kar sakte hain.

```javascript
const user = {

    name: "Ritesh",

    greet() {

        console.log(this.name);

    }

};

const fn = user.greet.bind(user);

fn();
```

Output:

```text
Ritesh
```

---

# Q26. `this` in `setTimeout()`

Important interview question ⭐⭐⭐⭐⭐

```javascript
const user = {

    name: "Ritesh",

    greet() {

        setTimeout(function() {

            console.log(this.name);

        }, 1000);

    }

};

user.greet();
```

Normal callback function ka `this` automatically `user` nahi hota.

Strict mode me:

```text
undefined
```

ho sakta hai.

---

# Q27. Arrow Function with setTimeout()

```javascript
const user = {

    name: "Ritesh",

    greet() {

        setTimeout(() => {

            console.log(this.name);

        }, 1000);

    }

};

user.greet();
```

Output after 1 second:

```text
Ritesh
```

Why?

```text
greet()
 ↓
this = user
 ↓
arrow callback
 ↓
inherits this
 ↓
user
```

---

# Q28. Why is `this` important in React?

React class components me `this` historically important tha.

Example:

```javascript
class App extends React.Component {

    constructor() {

        super();

        this.state = {
            count: 0
        };

    }

    handleClick() {

        console.log(this.state.count);

    }
}
```

Agar method ka context lose ho jaye, `this` issue aa sakta hai.

Bind:

```javascript
this.handleClick = this.handleClick.bind(this);
```

Modern React functional components me `this` ka use bahut kam hota hai.

---

# Q29. `this` in React Functional Component

Functional components me:

```javascript
function App() {

    const name = "Ritesh";

    return <h1>{name}</h1>;
}
```

Yahan component logic ke liye `this` ki need nahi hoti.

Modern React mostly:

```text
Functional Components
Hooks
State
Props
```

use karta hai.

---

# Q30. `this` in JavaScript Class

```javascript
class Person {

    constructor(name) {

        this.name = name;

    }

    sayHello() {

        console.log(`Hello ${this.name}`);

    }
}

const person = new Person("Ritesh");

person.sayHello();
```

Output:

```text
Hello Ritesh
```

---

# Q31. Most Important Rule of `this`

### Normal Function

`this` is determined mainly by **how the function is called**.

### Arrow Function

`this` is determined lexically from the surrounding scope.

### Constructor with `new`

`this` refers to the newly created object.

### `call/apply/bind`

`this` can be explicitly controlled.

---

# Q32. Four Important Ways `this` Gets Determined

```text
1. Object Method
   ↓
   this = object

2. new
   ↓
   this = new object

3. call/apply/bind
   ↓
   explicitly set this

4. Arrow Function
   ↓
   lexical this
```

---

# Q33. `this` Quick Comparison

| Situation                       | `this`              |
| ------------------------------- | ------------------- |
| `obj.method()`                  | `obj`               |
| `new Constructor()`             | New object          |
| `func.call(obj)`                | `obj`               |
| `func.apply(obj)`               | `obj`               |
| `func.bind(obj)`                | Bound to `obj`      |
| Arrow function                  | Lexically inherited |
| Strict-mode plain function call | `undefined`         |

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is `this` keyword?
2. How is `this` determined?
3. What is `this` inside an object method?
4. What is `this` inside a normal function?
5. What is `this` inside an arrow function?
6. Why doesn't arrow function have its own `this`?
7. Difference between normal function and arrow function `this`.
8. What is call()?
9. What is apply()?
10. What is bind()?
11. Difference between call, apply and bind.
12. What is `this` with new?
13. What is `this` inside a class?
14. What is `this` inside setTimeout?
15. How does arrow function solve setTimeout `this` issue?
16. What happens when object method is assigned to a variable?
17. What is lexical `this`?
18. What is `this` in React?
19. Predict output involving `this`.
20. How can we explicitly control `this`?
```

---

# Quick Revision

```text
THIS KEYWORD
     ↓
Depends on execution/call context
```

### Normal Function

```text
How function is called
        ↓
determines this
```

### Arrow Function

```text
No own this
     ↓
Lexical this
```

### Object

```javascript
user.greet()
```

```text
this → user
```

### `new`

```javascript
new User()
```

```text
this → new object
```

### call/apply

```javascript
greet.call(user)
greet.apply(user)
```

```text
this → user
```

### bind

```javascript
const fn = greet.bind(user);
```

```text
this → user
```

---

# One-Line Interview Revision

```text
Normal function → this depends on how it is called.

Arrow function → this comes from surrounding lexical scope.

new → this is the new object.

call/apply/bind → this can be explicitly controlled.
```

# MERN Interview Focus ⭐⭐⭐⭐⭐

1-year MERN developer ke liye especially ye strong karo:

```text
Object Methods
      ↓
Normal Function this
      ↓
Arrow Function this
      ↓
Lexical this
      ↓
call()
      ↓
apply()
      ↓
bind()
      ↓
setTimeout()
      ↓
React
      ↓
Classes
      ↓
Output Questions
```
