JavaScript Spread & Rest Operators – Interview Notes

What are Spread and Rest?

Both use the same syntax:

...

But their purpose is different.

Spread

Spread operator expands or unpacks values.

... → Expand

Rest

Rest operator collects multiple values into a single variable.

... → Collect

Easy Trick ⭐

Spread → Expand
Rest   → Collect

1. Spread Operator with Array ⭐⭐⭐⭐⭐

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);

Output:

[1, 2, 3]

2. Combine Two Arrays

const a = [1, 2, 3];
const b = [4, 5, 6];

const result = [...a, ...b];

console.log(result);

Output:

[1, 2, 3, 4, 5, 6]

3. Add Elements Using Spread

const numbers = [2, 3, 4];

const result = [1, ...numbers, 5];

console.log(result);

Output:

[1, 2, 3, 4, 5]

4. Copy an Array ⭐⭐⭐⭐⭐

const original = [10, 20, 30];

const copy = [...original];

console.log(copy);

Spread se shallow copy banti hai.

5. Spread with Objects ⭐⭐⭐⭐⭐

const user = {
    name: "Ritesh",
    age: 22
};

const copy = {
    ...user
};

console.log(copy);

Output:

{
    name: "Ritesh",
    age: 22
}

6. Merge Two Objects

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

Output:

{
    name: "Ritesh",
    age: 22,
    city: "Punjab"
}

7. Update Object Using Spread ⭐⭐⭐⭐⭐

const user = {
    name: "Ritesh",
    age: 22
};

const updatedUser = {
    ...user,
    age: 23
};

console.log(updatedUser);

Output:

{
    name: "Ritesh",
    age: 23
}

8. Override Property ⭐⭐⭐⭐⭐

Last property wins.

const updated = {
    ...user,
    age: 25
};

Here age: 25 override karega.

9. Spread with Function Arguments ⭐⭐⭐⭐⭐

const numbers = [10, 20, 30];

console.log(Math.max(...numbers));

Output:

30

Spread array ko individual arguments me expand kar deta hai.

10. Spread with String

const name = "Ritesh";

const result = [...name];

console.log(result);

Output:

["R", "i", "t", "e", "s", "h"]

11. Rest Operator ⭐⭐⭐⭐⭐

Rest multiple values ko collect karta hai.

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);

Output:

[10, 20, 30]

12. Rest with Function ⭐⭐⭐⭐⭐

function sum(...numbers) {
    let total = 0;

    numbers.forEach((num) => {
        total += num;
    });

    return total;
}

console.log(sum(10, 20, 30));

Output:

60

13. Rest Parameter with Other Parameters

function test(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

test(10, 20, 30, 40, 50);

Output:

10
20
[30, 40, 50]

Important

Rest parameter last me hona chahiye.

Correct:

function test(a, b, ...rest) {}

Wrong:

function test(...rest, a, b) {}

14. Rest with Array Destructuring ⭐⭐⭐⭐⭐

const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);

Output:

10
[20, 30, 40]

15. Rest with Object Destructuring ⭐⭐⭐⭐⭐

const user = {
    name: "Ritesh",
    age: 22,
    city: "Punjab"
};

const { name, ...details } = user;

console.log(name);
console.log(details);

Output:

Ritesh
{
    age: 22,
    city: "Punjab"
}

16. Spread vs Rest ⭐⭐⭐⭐⭐

Both use:

...

Spread

const arr = [1, 2, 3];

console.log(...arr);

Expand

Rest

function test(...args) {}

Collect

Easy Trick

Spread → Expand
Rest   → Collect

17. React State Update ⭐⭐⭐⭐⭐

Spread React me bahut important hai.

const [user, setUser] = useState({
    name: "Ritesh",
    age: 22
});

setUser({
    ...user,
    age: 23
});

Previous object ki properties copy hoti hain aur age update hota hai.

18. React Array State Update

const [users, setUsers] = useState([
    "Ritesh",
    "Rahul"
]);

setUsers([
    ...users,
    "Aman"
]);

Result:

["Ritesh", "Rahul", "Aman"]

19. Express / MERN Example ⭐⭐⭐⭐⭐

Password ko response se remove karna:

const user = {
    name: "Ritesh",
    email: "ritesh@gmail.com",
    password: "123456"
};

const { password, ...safeUser } = user;

console.log(safeUser);

Output:

{
    name: "Ritesh",
    email: "ritesh@gmail.com"
}

20. API Response me Rest

const { password, ...userData } = user;

res.json(userData);

Password response me nahi jayega.

21. Important Output Question ⭐⭐⭐⭐⭐

const a = [1, 2, 3];

const b = [...a];

console.log(b);

Output:

[1, 2, 3]

22. Important Output Question ⭐⭐⭐⭐⭐

const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result);

Output:

[1, 2, 3, 4]

23. Important Output Question ⭐⭐⭐⭐⭐

function test(...args) {
    console.log(args);
}

test(1, 2, 3, 4);

Output:

[1, 2, 3, 4]

24. Important Output Question ⭐⭐⭐⭐⭐

const numbers = [10, 20, 30, 40];

const [a, ...b] = numbers;

console.log(a);
console.log(b);

Output:

10
[20, 30, 40]

25. Important Output Question ⭐⭐⭐⭐⭐

const user = {
    name: "Ritesh",
    age: 22,
    city: "Punjab"
};

const { name, ...rest } = user;

console.log(name);
console.log(rest);

Output:

Ritesh
{
    age: 22,
    city: "Punjab"
}

26. Important Output Question ⭐⭐⭐⭐⭐

function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));

Output:

10

27. Spread with Nested Objects – Important ⚠️

Spread creates a shallow copy, not a deep copy.

const user = {
    name: "Ritesh",
    address: {
        city: "Punjab"
    }
};

const copy = {
    ...user
};

copy.address.city = "Delhi";

console.log(user.address.city);

Output:

Delhi

Nested object ka reference same ho sakta hai.

28. Spread vs Object.assign()

Spread:

const result = {
    ...obj1,
    ...obj2
};

Object.assign:

const result = Object.assign(
    {},
    obj1,
    obj2
);

Spread syntax generally easier to read.

29. Rest vs Arguments Object

Old approach:

function sum() {
    console.log(arguments);
}

Modern approach:

function sum(...numbers) {
    console.log(numbers);
}

Rest parameter proper array deta hai aur cleaner syntax hai.

30. Most Important Interview Questions ⭐⭐⭐⭐⭐

What is spread operator?

What is rest operator?

Difference between spread and rest?

Why do we use spread with arrays?

How to merge two arrays using spread?

How to copy an array using spread?

How to merge objects using spread?

How to update an object using spread?

What is shallow copy?

What is rest parameter?

Can rest parameter come before another parameter?

How to use rest with array destructuring?

How to use rest with object destructuring?

How to pass array values as function arguments?

Spread vs Object.assign()?

Rest parameter vs arguments object?

How is spread used in React state?

How is spread used in Express/MERN?

How can rest remove sensitive fields from an object?

Predict output questions.

Interview Answer: What is Spread?

"The spread operator is used to expand or unpack elements of an iterable such as an array or properties of an object. It is commonly used for copying, merging, and updating arrays and objects."

Interview Answer: What is Rest?

"The rest parameter is used to collect multiple values into a single array. It is commonly used in function parameters and destructuring."

Interview Answer: Difference Between Spread and Rest

"Both use the same three-dot syntax, but spread expands values while rest collects remaining values."

Quick Revision

Spread

const a = [1, 2, 3];
const b = [...a];

Expand / Copy

Array Merge

const result = [...a, ...b];

Object Copy

const copy = {...user};

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

One-Line Interview Revision

Spread expands values, while Rest collects multiple values into one variable.

MERN Interview Focus ⭐⭐⭐⭐⭐

Spread
   ↓
React State Update
   ↓
Array/Object Copy
   ↓
Merge Data
   ↓
API Data Update
   ↓
Immutable Updates

Rest
   ↓
Function Arguments
   ↓
Destructuring
   ↓
Remove Object Properties
   ↓
API Response
   ↓
MERN Backend