# JavaScript Objects – Interview Questions & Answers

## What is an Object?

Object JavaScript me data ko **key-value pairs** me store karne ke liye use hota hai.

Example:

```javascript
const user = {
    name: "Ritesh",
    age: 22,
    city: "Delhi"
};

console.log(user);
```

Output:

```text
{
    name: "Ritesh",
    age: 22,
    city: "Delhi"
}
```

Simple definition:

> An object is a collection of key-value pairs used to represent related data.

---

# Create an Object

```javascript
const person = {
    name: "Ritesh",
    age: 22,
    developer: true
};

console.log(person);
```

---

# Object Properties

Object ke andar jo key-value pairs hote hain unhe **properties** kehte hain.

```javascript
const user = {
    name: "Ritesh",
    age: 22
};
```

Yahan:

```text
name → property
age  → property
```

Values:

```text
"Ritesh" → value
22       → value
```

---

# Access Object Properties

Object properties ko mainly 2 ways se access kar sakte hain.

## 1. Dot Notation

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

console.log(user.name);
```

Output:

```text
Ritesh
```

---

## 2. Bracket Notation

```javascript
console.log(user["name"]);
```

Output:

```text
Ritesh
```

---

# Dot Notation vs Bracket Notation

### Dot

```javascript
user.name
```

### Bracket

```javascript
user["name"]
```

Bracket notation tab useful hota hai jab property ka naam variable me ho.

Example:

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

const key = "name";

console.log(user[key]);
```

Output:

```text
Ritesh
```

---

# Add Property

Object me new property add kar sakte hain.

```javascript
const user = {
    name: "Ritesh"
};

user.age = 22;

console.log(user);
```

Output:

```text
{
    name: "Ritesh",
    age: 22
}
```

---

# Update Property

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

user.age = 23;

console.log(user.age);
```

Output:

```text
23
```

---

# Delete Property

`delete` operator se property remove kar sakte hain.

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

delete user.age;

console.log(user);
```

Output:

```text
{
    name: "Ritesh"
}
```

---

# Check Property

## `in` Operator

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

console.log("name" in user);
```

Output:

```text
true
```

---

# Object.keys()

Object ki saari keys return karta hai.

```javascript
const user = {
    name: "Ritesh",
    age: 22,
    city: "Delhi"
};

console.log(Object.keys(user));
```

Output:

```text
["name", "age", "city"]
```

---

# Object.values()

Object ki saari values return karta hai.

```javascript
console.log(Object.values(user));
```

Output:

```text
["Ritesh", 22, "Delhi"]
```

---

# Object.entries()

Key-value pairs ko arrays ke form me return karta hai.

```javascript
console.log(Object.entries(user));
```

Output:

```text
[
    ["name", "Ritesh"],
    ["age", 22],
    ["city", "Delhi"]
]
```

---

# Object.keys() Example

Object ko loop karne ke liye:

```javascript
const user = {
    name: "Ritesh",
    age: 22,
    city: "Delhi"
};

Object.keys(user).forEach((key) => {

    console.log(key);

});
```

Output:

```text
name
age
city
```

---

# Object.values() Example

```javascript
Object.values(user).forEach((value) => {

    console.log(value);

});
```

Output:

```text
Ritesh
22
Delhi
```

---

# Object.entries() Example

```javascript
Object.entries(user).forEach(([key, value]) => {

    console.log(key, value);

});
```

Output:

```text
name Ritesh
age 22
city Delhi
```

---

# Nested Object

Object ke andar another object store kar sakte hain.

```javascript
const user = {

    name: "Ritesh",

    address: {
        city: "Delhi",
        pincode: 110001
    }

};
```

Access:

```javascript
console.log(user.address.city);
```

Output:

```text
Delhi
```

---

# Nested Array in Object

```javascript
const user = {

    name: "Ritesh",

    skills: [
        "JavaScript",
        "React",
        "Node.js"
    ]

};

console.log(user.skills[0]);
```

Output:

```text
JavaScript
```

---

# Object Method

Object ke andar function ko **method** kehte hain.

```javascript
const user = {

    name: "Ritesh",

    greet: function() {

        console.log("Hello");

    }

};

user.greet();
```

Output:

```text
Hello
```

---

# Object Method with `this`

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
this → user
```

---

# Shorthand Method

Modern JavaScript me method ko short form me likh sakte hain.

Instead of:

```javascript
const user = {

    greet: function() {
        console.log("Hello");
    }

};
```

Write:

```javascript
const user = {

    greet() {
        console.log("Hello");
    }

};
```

---

# Object Destructuring

Object se properties ko directly variables me extract kar sakte hain.

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Output:

```text
Ritesh
22
```

---

# Rename During Destructuring

```javascript
const user = {
    name: "Ritesh"
};

const { name: userName } = user;

console.log(userName);
```

Output:

```text
Ritesh
```

---

# Default Value in Destructuring

```javascript
const user = {
    name: "Ritesh"
};

const { name, age = 22 } = user;

console.log(age);
```

Output:

```text
22
```

---

# Nested Destructuring

```javascript
const user = {

    name: "Ritesh",

    address: {
        city: "Delhi"
    }

};

const {
    address: { city }
} = user;

console.log(city);
```

Output:

```text
Delhi
```

---

# Spread Operator with Objects

Spread operator object ko copy/merge karne ke liye commonly use hota hai.

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

const newUser = {
    ...user
};

console.log(newUser);
```

---

# Merge Objects

```javascript
const user = {
    name: "Ritesh"
};

const details = {
    age: 22
};

const result = {
    ...user,
    ...details
};

console.log(result);
```

Output:

```text
{
    name: "Ritesh",
    age: 22
}
```

---

# Update Object Using Spread

React/MERN me very important ⭐⭐⭐⭐⭐

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

const updatedUser = {
    ...user,
    age: 23
};

console.log(updatedUser);
```

Output:

```text
{
    name: "Ritesh",
    age: 23
}
```

---

# Object.assign()

Objects ko copy ya merge karne ke liye `Object.assign()` use kar sakte hain.

```javascript
const user = {
    name: "Ritesh"
};

const details = {
    age: 22
};

const result = Object.assign({}, user, details);

console.log(result);
```

Output:

```text
{
    name: "Ritesh",
    age: 22
}
```

---

# Shallow Copy

Spread operator aur `Object.assign()` generally **shallow copy** create karte hain.

Example:

```javascript
const user = {

    name: "Ritesh",

    address: {
        city: "Delhi"
    }

};

const copy = {
    ...user
};
```

Top-level properties copy hoti hain.

Nested object ka reference same ho sakta hai.

---

# Important Shallow Copy Example ⭐⭐⭐⭐⭐

```javascript
const user = {

    name: "Ritesh",

    address: {
        city: "Delhi"
    }

};

const copy = {
    ...user
};

copy.address.city = "Mumbai";

console.log(user.address.city);
```

Output:

```text
Mumbai
```

Why?

Because nested `address` object ka reference same hai.

---

# Deep Copy

Deep copy nested objects ko bhi independently copy karti hai.

Modern JavaScript me:

```javascript
const copy = structuredClone(user);
```

Example:

```javascript
const user = {

    name: "Ritesh",

    address: {
        city: "Delhi"
    }

};

const copy = structuredClone(user);

copy.address.city = "Mumbai";

console.log(user.address.city);
```

Output:

```text
Delhi
```

---

# JSON Deep Copy

Older/common technique:

```javascript
const copy = JSON.parse(
    JSON.stringify(user)
);
```

Lekin ye general-purpose deep clone nahi hai.

Ye kuch JavaScript values, jaise functions, `undefined`, special objects etc., ko preserve nahi karta.

Modern code me compatible data ke liye `structuredClone()` better choice hai.

---

# Object Reference

Objects reference values hote hain.

Example:

```javascript
const user1 = {
    name: "Ritesh"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
```

Output:

```text
Rahul
```

Because:

```text
user1
   ↓
same object ← user2
```

---

# Object Comparison

Important interview question ⭐⭐⭐⭐⭐

```javascript
const a = {
    name: "Ritesh"
};

const b = {
    name: "Ritesh"
};

console.log(a === b);
```

Output:

```text
false
```

Why?

Dono objects ka content same hai, lekin dono separate object references hain.

---

# Same Reference Example

```javascript
const a = {
    name: "Ritesh"
};

const b = a;

console.log(a === b);
```

Output:

```text
true
```

Because both variables same object ko refer kar rahe hain.

---

# Object.freeze()

`Object.freeze()` object ko freeze karta hai.

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

Object.freeze(user);

user.age = 23;

console.log(user.age);
```

Strict mode ke outside assignment silently fail ho sakta hai.

Output:

```text
22
```

Important:

`Object.freeze()` shallow hota hai.

Nested objects automatically deeply freeze nahi hote.

---

# Object.seal()

`Object.seal()`:

* Existing properties ko update karne deta hai.
* New properties add nahi karne deta.
* Existing properties delete nahi karne deta.

Example:

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

Object.seal(user);

user.age = 23;

console.log(user.age);
```

Output:

```text
23
```

---

# freeze vs seal

| `Object.freeze()` | `Object.seal()` |
| ----------------- | --------------- |
| Add ❌             | Add ❌           |
| Delete ❌          | Delete ❌        |
| Update ❌          | Update ✅        |
| Shallow           | Shallow         |

---

# Optional Chaining

Nested property access me useful.

```javascript
const user = {};

console.log(user.address?.city);
```

Output:

```text
undefined
```

Without optional chaining:

```javascript
user.address.city
```

error de sakta hai because `address` undefined hai.

---

# Nullish Coalescing

Default value dene ke liye:

```javascript
const user = {
    name: null
};

const name = user.name ?? "Guest";

console.log(name);
```

Output:

```text
Guest
```

Important:

`??` specifically `null` ya `undefined` ke case me fallback deta hai.

---

# Computed Property Names

Variable ki value ko object key bana sakte hain.

```javascript
const key = "name";

const user = {
    [key]: "Ritesh"
};

console.log(user.name);
```

Output:

```text
Ritesh
```

---

# Dynamic Object Property

```javascript
const key = "age";

const user = {};

user[key] = 22;

console.log(user);
```

Output:

```text
{
    age: 22
}
```

---

# Object.fromEntries()

Key-value pairs se object create kar sakte hain.

```javascript
const entries = [
    ["name", "Ritesh"],
    ["age", 22]
];

const user = Object.fromEntries(entries);

console.log(user);
```

Output:

```text
{
    name: "Ritesh",
    age: 22
}
```

---

# Object.hasOwn()

Check karta hai ki property object ki **own property** hai ya nahi.

```javascript
const user = {
    name: "Ritesh"
};

console.log(Object.hasOwn(user, "name"));
```

Output:

```text
true
```

---

# `for...in` Loop

Object ki enumerable keys par iterate karne ke liye:

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

for (const key in user) {

    console.log(key, user[key]);

}
```

Output:

```text
name Ritesh
age 22
```

---

# Object vs Array

| Object           | Array              |
| ---------------- | ------------------ |
| Key-value data   | Ordered collection |
| `{}`             | `[]`               |
| Named properties | Numeric indexes    |
| `user.name`      | `arr[0]`           |
| `Object.keys()`  | Array methods      |

---

# Object vs Map

Interview me pucha ja sakta hai.

### Object

```javascript
const user = {
    name: "Ritesh"
};
```

### Map

```javascript
const users = new Map();

users.set("name", "Ritesh");
```

Map specifically key-value collections ke liye designed hai aur keys ke liye broader types support karta hai.

Object application data/records ke liye bahut common hai.

---

# Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

const { name } = user;

console.log(name);
```

Output:

```text
Ritesh
```

---

# Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {
    name: "Ritesh"
};

const copy = {
    ...user,
    name: "Rahul"
};

console.log(user.name);
console.log(copy.name);
```

Output:

```text
Ritesh
Rahul
```

Original object change nahi hua.

---

# Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {
    name: "Ritesh"
};

const copy = user;

copy.name = "Rahul";

console.log(user.name);
```

Output:

```text
Rahul
```

Because both same reference ko point kar rahe hain.

---

# Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {
    name: "Ritesh"
};

console.log(Object.keys(user).length);
```

Output:

```text
1
```

---

# Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {
    name: "Ritesh",
    age: 22
};

console.log("name" in user);
console.log("city" in user);
```

Output:

```text
true
false
```

---

# Important Output Question ⭐⭐⭐⭐⭐

```javascript
const user = {
    name: "Ritesh",
    address: {
        city: "Delhi"
    }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city);
```

Output:

```text
Mumbai
```

Reason:

```text
Spread copy
    ↓
Shallow copy
    ↓
Nested address reference same
```

---

# MERN Interview: Objects ka Use

MERN applications me objects bahut important hain.

### API Request

```javascript
const user = {
    name: "Ritesh",
    email: "ritesh@example.com"
};
```

### JSON Response

```javascript
res.json({
    success: true,
    user: user
});
```

### React State

```javascript
const [user, setUser] = useState({
    name: "Ritesh",
    age: 22
});
```

### Updating State

```javascript
setUser({
    ...user,
    age: 23
});
```

### MongoDB Document

Conceptually:

```javascript
{
    name: "Ritesh",
    email: "ritesh@example.com",
    skills: ["React", "Node.js"]
}
```

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is an Object?
2. What are properties and methods?
3. How to access object properties?
4. Dot notation vs bracket notation?
5. How to add/update/delete properties?
6. What is Object.keys()?
7. What is Object.values()?
8. What is Object.entries()?
9. What is object destructuring?
10. What is nested object?
11. What is spread operator with objects?
12. What is Object.assign()?
13. What is shallow copy?
14. What is deep copy?
15. Difference between shallow and deep copy?
16. What is object reference?
17. Why are two identical objects not equal with ===?
18. What is Object.freeze()?
19. What is Object.seal()?
20. Difference between freeze and seal?
21. What is optional chaining?
22. What is computed property?
23. What is Object.fromEntries()?
24. What is Object.hasOwn()?
25. Object vs Array?
26. Object vs Map?
27. How are objects used in React?
28. How are objects used in Express/MERN?
29. How do you update an object without mutating it?
30. Predict output of object reference questions.
```

---

# Quick Revision

```text
Object
  ↓
Key + Value
```

```javascript
const user = {
    name: "Ritesh",
    age: 22
};
```

### Access

```javascript
user.name
user["name"]
```

### Add

```javascript
user.city = "Delhi";
```

### Update

```javascript
user.age = 23;
```

### Delete

```javascript
delete user.age;
```

### Keys

```javascript
Object.keys(user);
```

### Values

```javascript
Object.values(user);
```

### Entries

```javascript
Object.entries(user);
```

### Destructuring

```javascript
const { name, age } = user;
```

### Copy

```javascript
const copy = { ...user };
```

### Deep Clone

```javascript
const copy = structuredClone(user);
```

### Important

```text
Objects → Reference values
Spread → Shallow copy
structuredClone → Deep clone for supported data
```

# One-Line Interview Revision

> **Object stores data in key-value pairs. Dot/bracket notation access properties, destructuring extracts values, spread creates a shallow copy, and objects are reference values.**

# MERN Interview Focus ⭐⭐⭐⭐⭐

```text
Objects
   ↓
Destructuring
   ↓
Spread Operator
   ↓
Shallow vs Deep Copy
   ↓
Object Reference
   ↓
Object.keys / values / entries
   ↓
Optional Chaining
   ↓
React State
   ↓
API JSON
   ↓
MongoDB Documents
```
