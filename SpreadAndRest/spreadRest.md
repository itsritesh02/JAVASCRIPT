JavaScript Spread & Rest Operators

📌 Overview

JavaScript me Spread (...) aur Rest (...) operators same three dots syntax use karte hain, lekin dono ka purpose different hota hai.

Spread → values ko expand / unpack karta hai.

Rest → multiple values ko collect karta hai.

Easy Trick

Spread → Expand
Rest   → Collect

1. Spread Operator

Definition

Spread operator (...) kisi iterable ke elements ya object ki properties ko expand/unpack karta hai.

It is commonly used with:

Arrays

Objects

Function arguments

Strings

Syntax

...value

2. Spread with Arrays

const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);

Output

[1, 2, 3]

Here ...numbers array ke elements ko expand karta hai.

Conceptually:

numbers
[1, 2, 3]

      ↓ Spread

1, 2, 3

3. Merge Two Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = [...arr1, ...arr2];

console.log(result);

Output

[1, 2, 3, 4, 5, 6]

Alternative

const result = arr1.concat(arr2);

4. Add Elements Using Spread

const numbers = [2, 3, 4];

const result = [1, ...numbers, 5];

console.log(result);

Output

[1, 2, 3, 4, 5]

5. Copy an Array

const original = [10, 20, 30];

const copy = [...original];

console.log(copy);

Spread creates a shallow copy of the array.

Important

const copy = original;

This does not create a separate array. Both variables point to the same array.

6. Spread with Objects

Spread can copy object properties.

const user = {
    name: "Ritesh",
    age: 22
};

const copy = {
    ...user
};

console.log(copy);

Output

{
    name: "Ritesh",
    age: 22
}

7. Merge Two Objects

const user = {
    name: "Ritesh"
};

const details = {
    age: 22,
    city: "Punjab"
};

const result = {
    ...user,
    ...details
};

console.log(result);

Output

{
    name: "Ritesh",
    age: 22,
    city: "Punjab"
}

8. Property Override

If the same property exists in multiple objects, the last value wins.

const user = {
    name: "Ritesh",
    age: 22
};

const updatedUser = {
    ...user,
    age: 25
};

console.log(updatedUser);

Output

{
    name: "Ritesh",
    age: 25
}

So:

22 → overwritten by → 25

9. Spread with Function Arguments

Spread can convert an array into individual function arguments.

const numbers = [10, 20, 30];

console.log(Math.max(...numbers));

Output

30

Without spread:

Math.max(10, 20, 30);

Concept:

[10, 20, 30]
      ↓
10, 20, 30

10. Spread with Strings

Strings are iterable, so they can be spread into an array.

const name = "Ritesh";

const letters = [...name];

console.log(letters);

Output

["R", "i", "t", "e", "s", "h"]

11. Rest Operator

Definition

Rest operator (...) multiple values ko collect karke ek single array ya remaining properties ko ek object me store karta hai.

Rest is commonly used with:

Function parameters

Array destructuring

Object destructuring

12. Rest with Function Parameters

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);

Output

[10, 20, 30]

Here:

...numbers

all arguments ko numbers array me collect karta hai.

13. Rest Parameter with Normal Parameters

function test(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

test(10, 20, 30, 40, 50);

Output

10
20
[30, 40, 50]

Explanation:

a    → 10
b    → 20
rest → [30, 40, 50]

Important Rule

Rest parameter last parameter hona chahiye.

Correct:

function test(a, b, ...rest) {
}

Incorrect:

function test(...rest, a, b) {
}

14. Rest with Array Destructuring

const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);

Output

10
[20, 30, 40]

Explanation:

first → 10
rest  → [20, 30, 40]

Rest remaining elements ko collect karta hai.

15. Rest with Object Destructuring

const user = {
    name: "Ritesh",
    age: 22,
    city: "Punjab"
};

const { name, ...details } = user;

console.log(name);
console.log(details);

Output

Ritesh

{
    age: 22,
    city: "Punjab"
}

Here:

name    → "Ritesh"
details → { age: 22, city: "Punjab" }

16. Spread vs Rest

Feature

Spread

Rest

Syntax

...

...

Meaning

Expand

Collect

Array

Unpacks elements

Collects remaining elements

Object

Copies/merges properties

Collects remaining properties

Function

Passes array values as arguments

Collects arguments into array

Example

fn(...arr)

function fn(...args)

Remember

Spread → Expand
Rest   → Collect

17. Spread in React ⭐⭐⭐⭐⭐

Spread is heavily used in React for immutable state updates.

Example:

const [user, setUser] = useState({
    name: "Ritesh",
    age: 22
});

Update only age:

setUser({
    ...user,
    age: 23
});

The existing properties are copied and age is updated.

18. Spread with React Arrays

const [users, setUsers] = useState([
    "Ritesh",
    "Rahul"
]);

Add a new user:

setUsers([
    ...users,
    "Aman"
]);

Result:

["Ritesh", "Rahul", "Aman"]

19. Rest in MERN / Express

Rest can be used to remove sensitive fields from an object.

const user = {
    name: "Ritesh",
    email: "ritesh@gmail.com",
    password: "secret123"
};

const { password, ...safeUser } = user;

console.log(safeUser);

Output

{
    name: "Ritesh",
    email: "ritesh@gmail.com"
}

This pattern is useful when preparing safe API responses.

20. API Response Example

const { password, ...userData } = user;

res.json(userData);

Now password is not included in the response object.

Note: In real applications, sensitive data should ideally not be selected from the database or should be excluded at the data-access layer where appropriate. This example demonstrates the JavaScript pattern.

21. Shallow Copy ⭐⭐⭐⭐⭐

Spread creates a shallow copy.

Example:

const user = {
    name: "Ritesh",
    address: {
        city: "Punjab"
    }
};

const copy = {
    ...user
};

The top-level object is copied, but nested objects can still share references.

copy.address.city = "Delhi";

console.log(user.address.city);

Output

Delhi

Why?

user.address
      ↓
same nested object
      ↑
copy.address

22. Spread vs Object.assign()

Both can copy/merge objects.

Spread

const result = {
    ...obj1,
    ...obj2
};

Object.assign()

const result = Object.assign(
    {},
    obj1,
    obj2
);

Spread syntax is generally concise and easy to read.

23. Rest vs Arguments Object

Old style

function sum() {
    console.log(arguments);
}

Rest parameter

function sum(...numbers) {
    console.log(numbers);
}

Rest parameters are cleaner and give you a real array.

24. Important Output Questions

Question 1

const a = [1, 2, 3];

const b = [...a];

console.log(b);

Answer

[1, 2, 3]

Question 2

const a = [1, 2];
const b = [3, 4];

console.log([...a, ...b]);

Answer

[1, 2, 3, 4]

Question 3

function test(...args) {
    console.log(args);
}

test(1, 2, 3, 4);

Answer

[1, 2, 3, 4]

Question 4

const numbers = [10, 20, 30, 40];

const [a, ...b] = numbers;

console.log(a);
console.log(b);

Answer

10
[20, 30, 40]

Question 5

const user = {
    name: "Ritesh",
    age: 22,
    city: "Punjab"
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);

Answer

Ritesh
{
    age: 22,
    city: "Punjab"
}

Question 6

const user = {
    name: "Ritesh",
    age: 22
};

const updated = {
    ...user,
    age: 25
};

console.log(updated.age);

Answer

25

Question 7

function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));

Answer

10

25. Common Interview Mistakes

Mistake 1: Thinking Spread and Rest are different syntax

Both use:

...

Their context and purpose determine whether it is spread or rest.

Mistake 2: Putting Rest before another parameter

Wrong:

function test(...args, name) {}

Correct:

function test(name, ...args) {}

Mistake 3: Thinking Spread creates a deep copy

Spread creates a shallow copy.

const copy = { ...user };

Nested objects may still share references.

Mistake 4: Confusing Spread with Rest

fn(...arr);

This is Spread because values are expanded.

function fn(...args) {}

This is Rest because values are collected.

26. Interview Questions

Basic

What is the spread operator?

What is the rest operator?

Why do both use ...?

What is the difference between spread and rest?

Where can spread be used?

Where can rest be used?

Arrays

How do you copy an array using spread?

How do you merge two arrays?

How do you add an element using spread?

How can you pass array elements as function arguments?

Objects

How do you copy an object?

How do you merge two objects?

How do you update one object property using spread?

What happens when duplicate properties exist?

What is a shallow copy?

Rest

What is a rest parameter?

Why must the rest parameter be last?

How do you use rest with array destructuring?

How do you use rest with object destructuring?

What is the difference between rest and arguments?

React / MERN

How is spread used in React state?

How do you add an item to a React state array?

How can rest be used to exclude a property?

How can spread be used to merge API data?

Why is immutable updating important in React?

27. Interview-Ready Answers

Q1. What is Spread Operator?

Answer:

The spread operator uses three dots (...) to expand or unpack elements of an iterable or properties of an object. It is commonly used for copying, merging, and updating arrays and objects.

Q2. What is Rest Operator?

Answer:

The rest parameter uses three dots (...) to collect multiple values into a single array. It is commonly used in function parameters and destructuring.

Q3. Difference Between Spread and Rest?

Answer:

Both use the same three-dot syntax, but spread expands values while rest collects values.

Example:

// Spread
const arr = [1, 2, 3];
console.log(...arr);

// Rest
function test(...args) {
    console.log(args);
}

Q4. What is Shallow Copy?

Answer:

A shallow copy creates a new top-level array or object, but nested objects can still share the same references.

Q5. Why is Spread Used in React?

Answer:

Spread is commonly used to create a new array or object while preserving existing values, which helps us perform immutable state updates.

Example:

setUser({
    ...user,
    age: 23
});

28. Quick Revision

Spread

const copy = [...arr];

Expand / Copy

Array Merge

const result = [...a, ...b];

Object Copy

const copy = { ...user };

Object Update

const updated = {
    ...user,
    age: 25
};

Function Spread

Math.max(...numbers);

Rest Parameter

function test(...args) {
    console.log(args);
}

Array Rest

const [first, ...rest] = numbers;

Object Rest

const { password, ...safeUser } = user;

⭐ One-Line Revision

Spread expands/unpacks values, while Rest collects multiple values into one variable.

🎯 Interview Priority

Focus especially on:

Spread vs Rest

Array/Object copying

Array/Object merging

Property overriding

Rest parameters

Destructuring with Rest

Shallow copy

React state updates

MERN/API use cases

Output-based questions