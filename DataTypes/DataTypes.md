# JavaScript Data Types – Interview Questions & Answers

## Q1. What are Data Types in JavaScript?

### Answer

Data type batata hai ki variable ke andar kis type ki value stored hai.

Example:

```javascript
let age = 22;
let name = "Ritesh";
let isDeveloper = true;
```

Yahan:

```text
age          → Number
name         → String
isDeveloper  → Boolean
```

### Interview me bolo

> "A data type defines the kind of value stored in a variable."

---

# Q2. How many Data Types are there in JavaScript?

JavaScript me **8 main data types** hote hain.

### Primitive Data Types

```text
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
```

### Non-Primitive / Reference Type

```text
8. Object
```

Arrays aur functions bhi JavaScript me objects ke special forms hain.

### Interview me bolo

> "JavaScript has seven primitive data types: string, number, bigint, boolean, undefined, null and symbol. Objects are non-primitive reference types."

---

# Q3. What are Primitive Data Types?

### Answer

Primitive data types single/simple values represent karte hain.

JavaScript ke primitive types:

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

Example:

```javascript
let name = "Ritesh";       // String
let age = 22;              // Number
let big = 123n;            // BigInt
let active = true;         // Boolean
let x;                     // Undefined
let y = null;              // Null
let id = Symbol("id");     // Symbol
```

---

# Q4. What is String?

### Answer

String text ko represent karta hai.

String ko quotes ke andar likhte hain.

```javascript
let name = "Ritesh";

console.log(name);
console.log(typeof name);
```

Output

```text
Ritesh
string
```

Different ways:

```javascript
let a = "Hello";
let b = 'Hello';
let c = `Hello`;
```

### Interview me bolo

> "A string is a sequence of characters used to represent text."

---

# Q5. What is Number?

### Answer

JavaScript me `Number` integers aur decimal numbers dono ko represent karta hai.

```javascript
let age = 22;
let price = 99.99;

console.log(typeof age);
console.log(typeof price);
```

Output

```text
number
number
```

Example:

```javascript
let a = 10;
let b = 10.5;
let c = -20;
```

Sabka type:

```text
number
```

### Important

JavaScript me separate `int` aur `float` data types nahi hote.

### Interview me bolo

> "JavaScript uses the Number type for both integers and floating-point numbers."

---

# Q6. What is Boolean?

### Answer

Boolean ke only two values hote hain:

```text
true
false
```

Example:

```javascript
let isLoggedIn = true;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);
```

Output

```text
true
boolean
```

### Interview me bolo

> "Boolean represents a logical value and can be either true or false."

---

# Q7. What is Undefined?

### Answer

Jab variable declare ho lekin usko value assign na ki gayi ho, uski value `undefined` hoti hai.

```javascript
let age;

console.log(age);
console.log(typeof age);
```

Output

```text
undefined
undefined
```

### Interview me bolo

> "Undefined usually means a variable has been declared but has not been assigned a value."

---

# Q8. What is Null?

### Answer

`null` intentionally empty ya no-value ko represent karta hai.

```javascript
let user = null;

console.log(user);
```

Output

```text
null
```

Example:

```javascript
let selectedUser = null;
```

Iska meaning:

> Abhi koi user selected nahi hai.

### Interview me bolo

> "Null represents an intentional absence of a value."

---

# Q9. Difference between null and undefined?

### Very Important ⭐⭐⭐⭐⭐

### undefined

Value normally assign nahi hui.

```javascript
let a;

console.log(a);
```

Output:

```text
undefined
```

### null

Developer intentionally empty value set karta hai.

```javascript
let b = null;

console.log(b);
```

Output:

```text
null
```

### Interview me bolo

> "`undefined` usually means a value has not been assigned, while `null` is an intentional absence of value."

---

# Q10. What is typeof null?

### Answer

```javascript
console.log(typeof null);
```

Output:

```text
object
```

Ye JavaScript ka historical behavior hai.

Technically `null` primitive value hai.

### Interview me bolo

> "`typeof null` returns `object` because of a historical behavior in JavaScript."

---

# Q11. What is BigInt?

### Answer

BigInt bahut bade integer values ko represent karne ke liye use hota hai.

Number ke end me `n` lagate hain.

```javascript
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);
```

Output:

```text
123456789012345678901234567890n
bigint
```

### Example

```javascript
let a = 100n;
let b = 200n;

console.log(a + b);
```

Output:

```text
300n
```

### Important

BigInt aur Number ko directly mix nahi kar sakte:

```javascript
console.log(10n + 5);
```

Error aayega.

### Interview me bolo

> "BigInt is used to represent integers larger than the safe range of the Number type."

---

# Q12. What is Symbol?

### Answer

Symbol ek unique primitive value create karta hai.

```javascript
let id = Symbol("id");

console.log(typeof id);
```

Output:

```text
symbol
```

Example:

```javascript
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);
```

Output:

```text
false
```

Even same description hone ke baad bhi symbols unique hote hain.

### Interview me bolo

> "Symbol is a primitive data type used to create unique identifiers."

---

# Q13. What is Object?

### Answer

Object multiple related properties ko key-value pairs me store karta hai.

```javascript
let user = {
    name: "Ritesh",
    age: 22,
    city: "Punjab"
};

console.log(user);
```

Output:

```text
{
    name: "Ritesh",
    age: 22,
    city: "Punjab"
}
```

### Interview me bolo

> "An object is a collection of key-value pairs used to represent structured data."

---

# Q14. What is an Array?

### Answer

Array multiple values ko ordered collection me store karta hai.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

### Important

JavaScript me:

```javascript
typeof []
```

ka result:

```text
object
```

Isliye array check karne ke liye:

```javascript
Array.isArray(fruits);
```

use karte hain.

---

# Q15. What is a Function Data Type?

### Answer

JavaScript me function ko `typeof` karne par:

```javascript
function greet() {
    console.log("Hello");
}

console.log(typeof greet);
```

Output:

```text
function
```

Technically functions objects hote hain, lekin `typeof` unke liye `"function"` return karta hai.

### Interview me bolo

> "Functions are objects internally, but typeof returns 'function' for callable functions."

---

# Q16. What is typeof Operator?

### Answer

`typeof` kisi value ka type check karne ke liye use hota hai.

Examples:

```javascript
console.log(typeof "Hello");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
```

Output:

```text
string
number
boolean
undefined
object
```

---

# Q17. What is the difference between Primitive and Reference Types?

### Primitive

Examples:

```text
string
number
boolean
undefined
null
bigint
symbol
```

Primitive values generally directly represented as values and assignment/copying gives another value.

### Reference / Object

Examples:

```text
Object
Array
Function
```

Objects are reference values.

### Example

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output:

```text
10
20
```

Primitive value copy hui.

---

# Q18. How do Objects behave when copied?

```javascript
let user1 = {
    name: "Ritesh"
};

let user2 = user1;

user2.name = "Aman";

console.log(user1.name);
```

Output:

```text
Aman
```

### Why?

`user1` aur `user2` same object ko reference kar rahe hain.

Conceptually:

```text
user1 ──┐
        ↓
      Object
        ↑
user2 ──┘
```

### Interview me bolo

> "Objects are reference values, so assigning one object variable to another copies the reference rather than creating an independent object."

---

# Q19. What is Dynamic Typing?

### Answer

JavaScript dynamically typed language hai.

Iska matlab variable ka type runtime par determine ho sakta hai aur same variable ko different type ki value assign kar sakte hain.

Example:

```javascript
let value = 10;

console.log(typeof value);

value = "Hello";

console.log(typeof value);

value = true;

console.log(typeof value);
```

Output:

```text
number
string
boolean
```

### Interview me bolo

> "JavaScript is dynamically typed, meaning variables are not permanently tied to one data type."

---

# Q20. Is JavaScript Strongly Typed or Dynamically Typed?

### Answer

JavaScript **dynamically typed** language hai.

Example:

```javascript
let value = 10;

value = "Hello";
```

Allowed hai.

### Interview me bolo

> "JavaScript is dynamically typed, so a variable can hold values of different types during runtime."

---

# Q21. What is Type Conversion?

### Answer

Jab hum manually ek data type ko doosre type me convert karte hain, use type conversion kehte hain.

Example:

```javascript
let value = "100";

let number = Number(value);

console.log(number);
console.log(typeof number);
```

Output:

```text
100
number
```

---

# Q22. What is Type Coercion?

### Answer

JavaScript jab automatically data type convert karti hai, use type coercion kehte hain.

Example:

```javascript
console.log("10" + 5);
```

Output:

```text
105
```

Yahan number `5` string me convert ho gaya.

Another example:

```javascript
console.log("10" - 5);
```

Output:

```text
5
```

Yahan `"10"` number me convert ho gaya.

### Interview me bolo

> "Type coercion is the automatic conversion of one data type into another by JavaScript."

---

# Q23. What is NaN?

### Answer

`NaN` ka full form hai:

```text
Not-a-Number
```

Invalid numeric operation ke result me aa sakta hai.

Example:

```javascript
let result = "Hello" - 5;

console.log(result);
```

Output:

```text
NaN
```

Interesting:

```javascript
console.log(typeof NaN);
```

Output:

```text
number
```

### Interview me bolo

> "NaN represents an invalid numeric result, and its type is number."

---

# Q24. What is Infinity?

### Answer

JavaScript me `Infinity` ek special numeric value hai.

Example:

```javascript
console.log(10 / 0);
```

Output:

```text
Infinity
```

Check:

```javascript
console.log(typeof Infinity);
```

Output:

```text
number
```

---

# Q25. What are Truthy and Falsy Values?

### Falsy Values

Common falsy values:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Example:

```javascript
if (0) {
    console.log("Hello");
}
```

Output:

```text
Nothing
```

Because `0` falsy hai.

### Truthy

Most other values truthy hote hain.

Example:

```javascript
if ("Hello") {
    console.log("Hello");
}
```

Output:

```text
Hello
```

### Interview me bolo

> "Falsy values behave like false in a Boolean context. Examples include false, 0, empty string, null, undefined and NaN."

---

# Q26. Is an Empty Array Truthy or Falsy?

### Answer

Empty array `[]` **truthy** hota hai.

```javascript
if ([]) {
    console.log("Truthy");
}
```

Output:

```text
Truthy
```

---

# Q27. Is an Empty Object Truthy or Falsy?

### Answer

Empty object `{}` bhi **truthy** hota hai.

```javascript
if ({}) {
    console.log("Truthy");
}
```

Output:

```text
Truthy
```

### Important Interview Trick ⭐⭐⭐⭐⭐

```text
[] → truthy
{} → truthy
"" → falsy
0  → falsy
```

---

# Q28. What is the difference between null and false?

### null

Means intentional absence of value.

```javascript
let user = null;
```

### false

Boolean value hai.

```javascript
let isLoggedIn = false;
```

Types:

```javascript
console.log(typeof null);
console.log(typeof false);
```

Output:

```text
object
boolean
```

---

# Q29. What is the difference between undefined and null?

### Short Answer

```text
undefined → value not assigned
null      → intentionally empty
```

Example:

```javascript
let a;
let b = null;

console.log(a);
console.log(b);
```

Output:

```text
undefined
null
```

---

# Q30. What is the difference between == and === for Data Types?

### `==`

Type coercion kar sakta hai.

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

### `===`

Value aur type dono check karta hai.

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

### Interview me bolo

> "`==` can perform type coercion, while `===` checks both value and type without implicit type conversion."

---

# Tricky Output Questions

## Q1.

```javascript
console.log(typeof 10);
```

Output:

```text
number
```

---

## Q2.

```javascript
console.log(typeof "10");
```

Output:

```text
string
```

---

## Q3.

```javascript
console.log(typeof true);
```

Output:

```text
boolean
```

---

## Q4.

```javascript
console.log(typeof undefined);
```

Output:

```text
undefined
```

---

## Q5.

```javascript
console.log(typeof null);
```

Output:

```text
object
```

---

## Q6.

```javascript
console.log(typeof []);
```

Output:

```text
object
```

---

## Q7.

```javascript
console.log(typeof {});
```

Output:

```text
object
```

---

## Q8.

```javascript
console.log(typeof function() {});
```

Output:

```text
function
```

---

## Q9.

```javascript
console.log(typeof NaN);
```

Output:

```text
number
```

---

## Q10.

```javascript
console.log(typeof Infinity);
```

Output:

```text
number
```

---

## Q11.

```javascript
console.log(5 + "5");
```

Output:

```text
55
```

---

## Q12.

```javascript
console.log(5 - "2");
```

Output:

```text
3
```

---

## Q13.

```javascript
console.log(Boolean(0));
console.log(Boolean(1));
```

Output:

```text
false
true
```

---

## Q14.

```javascript
console.log(Boolean(""));
console.log(Boolean("Hello"));
```

Output:

```text
false
true
```

---

## Q15.

```javascript
console.log(Boolean([]));
console.log(Boolean({}));
```

Output:

```text
true
true
```

---

# Data Types Quick Revision

| Data Type | Example        | `typeof`      |
| --------- | -------------- | ------------- |
| String    | `"Hello"`      | `"string"`    |
| Number    | `10`           | `"number"`    |
| BigInt    | `10n`          | `"bigint"`    |
| Boolean   | `true`         | `"boolean"`   |
| Undefined | `undefined`    | `"undefined"` |
| Null      | `null`         | `"object"`    |
| Symbol    | `Symbol()`     | `"symbol"`    |
| Object    | `{}`           | `"object"`    |
| Array     | `[]`           | `"object"`    |
| Function  | `function(){}` | `"function"`  |

---

# Most Important Interview Questions ⭐⭐⭐⭐⭐

```text
1. What are Data Types?
2. What are Primitive Data Types?
3. What are Reference Types?
4. How many primitive data types?
5. What is String?
6. What is Number?
7. What is Boolean?
8. What is Undefined?
9. What is Null?
10. null vs undefined
11. What is BigInt?
12. What is Symbol?
13. What is Object?
14. Array vs Object
15. Why typeof null is object?
16. Why typeof [] is object?
17. What is Dynamic Typing?
18. Type Conversion vs Type Coercion
19. What is NaN?
20. What is Infinity?
21. Truthy vs Falsy
22. Is [] truthy?
23. Is {} truthy?
24. Primitive vs Reference
25. == vs ===
```

---

# Easy Revision Trick

```text
PRIMITIVE
    ↓
String
Number
BigInt
Boolean
Undefined
Null
Symbol

REFERENCE
    ↓
Object
    ↓
Array
Function
```

### Remember

```text
"Hello" → String
10      → Number
10n     → BigInt
true    → Boolean
         → Undefined
null    → Null
Symbol  → Symbol
{}      → Object
[]      → Object
```

---

# Best Interview Answer

### Interviewer:

> What are the data types in JavaScript?

### Answer:

> "JavaScript has seven primitive data types: String, Number, BigInt, Boolean, Undefined, Null and Symbol. It also has objects as non-primitive reference types. Arrays and functions are special kinds of objects."

---

# Final Interview Focus

For a **1-year MERN developer**, these topics strongly prepare karo:

```text
⭐⭐⭐⭐⭐

Primitive vs Reference
        ↓
null vs undefined
        ↓
typeof
        ↓
typeof null
        ↓
typeof []
        ↓
Type Conversion
        ↓
Type Coercion
        ↓
NaN
        ↓
Truthy / Falsy
        ↓
Dynamic Typing
        ↓
== vs ===
```

> **Data Types me interviewer mostly output-based questions aur `null`, `undefined`, `typeof`, type coercion, truthy/falsy ke tricky cases pooch sakta hai.**
