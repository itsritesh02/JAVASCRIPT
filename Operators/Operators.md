# JavaScript Operators

## Definition

Operators are symbols used to perform operations on values and variables.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Output

```text
15
```

---

# Types of Operators

JavaScript me mainly ye operators use hote hain:

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Increment / Decrement Operators
* Ternary Operator
* `typeof` Operator
* Nullish Coalescing Operator
* Optional Chaining Operator
* Spread Operator
* Rest Operator

---

# Arithmetic Operators

Arithmetic operators mathematical calculations ke liye use hote hain.

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |
| `**`     | Power          |

Example:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

Output

```text
13
7
30
3.3333333333333335
1
1000
```

---

# Addition (+)

Adds two values.

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

Output

```text
30
```

---

# String Concatenation (+)

`+` operator strings ko join karne ke liye bhi use hota hai.

```javascript
let firstName = "Ritesh";
let lastName = "Kumar";

console.log(firstName + " " + lastName);
```

Output

```text
Ritesh Kumar
```

---

# Subtraction (-)

Subtracts one value from another.

```javascript
let a = 20;
let b = 10;

console.log(a - b);
```

Output

```text
10
```

---

# Multiplication (*)

Multiplies two values.

```javascript
let a = 10;
let b = 5;

console.log(a * b);
```

Output

```text
50
```

---

# Division (/)

Divides one value by another.

```javascript
let a = 20;
let b = 5;

console.log(a / b);
```

Output

```text
4
```

---

# Remainder (%)

Returns the remainder after division.

```javascript
let a = 10;
let b = 3;

console.log(a % b);
```

Output

```text
1
```

### Even / Odd Example

```javascript
let num = 10;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

Output

```text
Even
```

---

# Power (**)

Used to calculate power.

```javascript
let result = 2 ** 3;

console.log(result);
```

Output

```text
8
```

---

# Assignment Operators

Assignment operators variables ko value assign ya update karne ke liye use hote hain.

| Operator | Example  | Same As     |
| -------- | -------- | ----------- |
| `=`      | `a = 10` | `a = 10`    |
| `+=`     | `a += 5` | `a = a + 5` |
| `-=`     | `a -= 5` | `a = a - 5` |
| `*=`     | `a *= 5` | `a = a * 5` |
| `/=`     | `a /= 5` | `a = a / 5` |
| `%=`     | `a %= 5` | `a = a % 5` |

---

# Assignment (=)

Assigns a value to a variable.

```javascript
let age = 22;

console.log(age);
```

Output

```text
22
```

---

# Add and Assign (+=)

Adds a value and assigns the result.

```javascript
let a = 10;

a += 5;

console.log(a);
```

Output

```text
15
```

---

# Subtract and Assign (-=)

```javascript
let a = 10;

a -= 5;

console.log(a);
```

Output

```text
5
```

---

# Multiply and Assign (*=)

```javascript
let a = 10;

a *= 5;

console.log(a);
```

Output

```text
50
```

---

# Divide and Assign (/=)

```javascript
let a = 20;

a /= 5;

console.log(a);
```

Output

```text
4
```

---

# Comparison Operators

Comparison operators do values ko compare karte hain.

Result `true` ya `false` hota hai.

| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Equal                 |
| `===`    | Strict Equal          |
| `!=`     | Not Equal             |
| `!==`    | Strict Not Equal      |
| `>`      | Greater Than          |
| `<`      | Less Than             |
| `>=`     | Greater Than or Equal |
| `<=`     | Less Than or Equal    |

---

# Equal (==)

`==` values compare karta hai aur zarurat padne par type conversion karta hai.

```javascript
console.log(5 == "5");
```

Output

```text
true
```

---

# Strict Equal (===)

`===` value aur data type dono check karta hai.

```javascript
console.log(5 === "5");
```

Output

```text
false
```

Reason:

```text
5   → number
"5" → string
```

### Interview Point

* `==` → Loose Equality
* `===` → Strict Equality

Normally JavaScript me `===` prefer kiya jata hai.

---

# Not Equal (!=)

Checks whether two values are not equal.

```javascript
console.log(10 != 5);
```

Output

```text
true
```

---

# Strict Not Equal (!==)

Checks value and type strictly.

```javascript
console.log(10 !== "10");
```

Output

```text
true
```

---

# Greater Than (>)

```javascript
console.log(10 > 5);
```

Output

```text
true
```

---

# Less Than (<)

```javascript
console.log(5 < 10);
```

Output

```text
true
```

---

# Greater Than or Equal (>=)

```javascript
console.log(10 >= 10);
```

Output

```text
true
```

---

# Less Than or Equal (<=)

```javascript
console.log(10 <= 10);
```

Output

```text
true
```

---

# Logical Operators

Logical operators multiple conditions ko combine karne ke liye use hote hain.

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

---

# AND (&&)

Dono conditions true honi chahiye.

```javascript
let age = 22;
let hasId = true;

console.log(age >= 18 && hasId);
```

Output

```text
true
```

Example:

```javascript
let username = "Ritesh";
let password = "1234";

if (username === "Ritesh" && password === "1234") {
    console.log("Login Successful");
}
```

Output

```text
Login Successful
```

---

# OR (||)

At least one condition true honi chahiye.

```javascript
let isAdmin = false;
let isManager = true;

console.log(isAdmin || isManager);
```

Output

```text
true
```

---

# NOT (!)

Boolean value ko reverse karta hai.

```javascript
let isLoggedIn = true;

console.log(!isLoggedIn);
```

Output

```text
false
```

Example:

```javascript
console.log(!true);
```

Output

```text
false
```

---

# Increment Operator (++)

Value ko `1` se increase karta hai.

Do types:

* Pre-Increment
* Post-Increment

---

# Post-Increment (a++)

Pehle current value use hoti hai, phir increment hota hai.

```javascript
let a = 5;

console.log(a++);
console.log(a);
```

Output

```text
5
6
```

---

# Pre-Increment (++a)

Pehle increment hota hai, phir value use hoti hai.

```javascript
let a = 5;

console.log(++a);
console.log(a);
```

Output

```text
6
6
```

---

# Decrement Operator (--)

Value ko `1` se decrease karta hai.

---

# Post-Decrement (a--)

```javascript
let a = 5;

console.log(a--);
console.log(a);
```

Output

```text
5
4
```

---

# Pre-Decrement (--a)

```javascript
let a = 5;

console.log(--a);
console.log(a);
```

Output

```text
4
4
```

---

# Ternary Operator

Ternary operator `if...else` ka short form hai.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output

```text
Adult
```

---

# Ternary Example

```javascript
let marks = 80;

let result = marks >= 50 ? "Pass" : "Fail";

console.log(result);
```

Output

```text
Pass
```

---

# typeof Operator

`typeof` kisi value ka data type check karta hai.

```javascript
console.log(typeof 10);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
```

Output

```text
number
string
boolean
undefined
```

---

# typeof null

Important interview question.

```javascript
console.log(typeof null);
```

Output

```text
object
```

Ye JavaScript ka historical/legacy behavior hai.

---

# Truthy and Falsy Values

JavaScript me kuch values `false` ki tarah behave karti hain.

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
if ("Hello") {
    console.log("Truthy");
}
```

Output

```text
Truthy
```

---

# Nullish Coalescing Operator (??)

`??` tab right-side value return karta hai jab left-side value `null` ya `undefined` ho.

```javascript
let username = null;

let name = username ?? "Guest";

console.log(name);
```

Output

```text
Guest
```

---

# ?? vs ||

Important interview question.

### OR

```javascript
console.log(0 || 10);
```

Output

```text
10
```

Because `0` is falsy.

### Nullish Coalescing

```javascript
console.log(0 ?? 10);
```

Output

```text
0
```

Because `??` only checks `null` and `undefined`.

---

# Optional Chaining (?.)

Optional chaining safely nested properties access karne ke liye use hoti hai.

```javascript
let user = {
    name: "Ritesh"
};

console.log(user.address?.city);
```

Output

```text
undefined
```

Without `?.`:

```javascript
console.log(user.address.city);
```

Error aa sakta hai because `address` undefined hai.

---

# Spread Operator (...)

Spread operator values ko expand karta hai.

### Array Example

```javascript
let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b];

console.log(c);
```

Output

```text
[1, 2, 3, 4]
```

---

# Spread with Object

```javascript
let user = {
    name: "Ritesh",
    age: 22
};

let newUser = {
    ...user,
    city: "Delhi"
};

console.log(newUser);
```

Output

```text
{
    name: "Ritesh",
    age: 22,
    city: "Delhi"
}
```

---

# Rest Operator (...)

Rest operator multiple values ko ek array me collect karta hai.

```javascript
function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);
```

Output

```text
[10, 20, 30]
```

---

# Spread vs Rest

Both use `...`.

### Spread

Values ko expand karta hai.

```javascript
let arr = [1, 2, 3];

console.log(...arr);
```

Output

```text
1 2 3
```

### Rest

Values ko collect karta hai.

```javascript
function test(...values) {
    console.log(values);
}

test(1, 2, 3);
```

Output

```text
[1, 2, 3]
```

---

# in Operator

Checks whether a property exists in an object.

```javascript
let user = {
    name: "Ritesh",
    age: 22
};

console.log("name" in user);
```

Output

```text
true
```

---

# instanceof Operator

Checks whether an object is an instance of a particular class or constructor.

```javascript
let arr = [];

console.log(arr instanceof Array);
```

Output

```text
true
```

---

# delete Operator

Object ki property delete karta hai.

```javascript
let user = {
    name: "Ritesh",
    age: 22
};

delete user.age;

console.log(user);
```

Output

```text
{
    name: "Ritesh"
}
```

---

# Operator Precedence

Jab multiple operators ek expression me hote hain, JavaScript precedence ke according operations perform karta hai.

```javascript
let result = 10 + 5 * 2;

console.log(result);
```

Output

```text
20
```

Reason:

```text
5 * 2 = 10
10 + 10 = 20
```

Parentheses se priority change kar sakte hain.

```javascript
let result = (10 + 5) * 2;

console.log(result);
```

Output

```text
30
```

---

# Short-Circuit Evaluation

## &&

```javascript
false && console.log("Hello");
```

Output

```text
Nothing
```

First value falsy hai, isliye second expression execute nahi hota.

---

## ||

```javascript
true || console.log("Hello");
```

Output

```text
Nothing
```

First value truthy hai, isliye second expression execute nahi hota.

---

# Interview Questions

## Q1. What is an Operator?

An operator is a symbol used to perform an operation on values or variables.

---

## Q2. Difference between == and ===?

* `==` → Loose Equality
* `===` → Strict Equality
* `==` type conversion kar sakta hai.
* `===` value aur type dono check karta hai.

Example:

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

---

## Q3. Difference between && and ||?

* `&&` → AND
* `||` → OR

`&&` me required hai ki conditions/operands truthy hon.

`||` first truthy value return karta hai.

---

## Q4. Difference between a++ and ++a?

* `a++` → Pehle value use, phir increment.
* `++a` → Pehle increment, phir value use.

---

## Q5. What is Ternary Operator?

Ternary operator `if...else` ka short form hai.

```javascript
condition ? trueValue : falseValue;
```

---

## Q6. What is typeof?

`typeof` kisi value ka data type check karne ke liye use hota hai.

```javascript
console.log(typeof 10);
// number
```

---

## Q7. What is Spread Operator?

Spread operator array/object ki values ko expand karta hai.

```javascript
let arr2 = [...arr1];
```

---

## Q8. What is Rest Operator?

Rest operator multiple values ko ek array me collect karta hai.

```javascript
function test(...args) {
    console.log(args);
}
```

---

## Q9. Difference between Spread and Rest?

* Spread → Expand
* Rest → Collect

---

## Q10. Difference between ?? and ||?

* `||` → falsy values ke liye fallback de sakta hai.
* `??` → sirf `null` aur `undefined` ke liye fallback deta hai.

Example:

```javascript
console.log(0 || 10);  // 10
console.log(0 ?? 10);  // 0
```

---

## Q11. What are Falsy Values?

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

---

## Q12. What is Optional Chaining?

`?.` safely nested property access karne ke liye use hota hai.

```javascript
let user = {};

console.log(user.address?.city);
```

Output

```text
undefined
```

---

# Output Based Questions

## Question 1

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

Output

```text
true
false
```

---

## Question 2

```javascript
let a = 5;

console.log(a++);
console.log(a);
```

Output

```text
5
6
```

---

## Question 3

```javascript
let a = 5;

console.log(++a);
console.log(a);
```

Output

```text
6
6
```

---

## Question 4

```javascript
console.log(10 + "20");
```

Output

```text
1020
```

---

## Question 5

```javascript
console.log("10" - 5);
```

Output

```text
5
```

---

## Question 6

```javascript
console.log(0 || 100);
console.log(0 ?? 100);
```

Output

```text
100
0
```

---

## Question 7

```javascript
console.log(typeof null);
```

Output

```text
object
```

---

# Important Points

* `==` loose equality hai.
* `===` strict equality hai.
* Normally `===` prefer karo.
* `&&` AND operator hai.
* `||` OR operator hai.
* `!` value ko reverse karta hai.
* `a++` pehle value use karta hai, phir increment.
* `++a` pehle increment karta hai, phir value use karta hai.
* Ternary `if...else` ka short form hai.
* `typeof` data type check karta hai.
* `??` only `null` aur `undefined` ke liye fallback deta hai.
* `?.` safely nested properties access karta hai.
* Spread `...` values ko expand karta hai.
* Rest `...` values ko collect karta hai.
* `slice()` aur `splice()` Arrays ke methods hain, operators nahi.
* `&&` aur `||` short-circuit evaluation karte hain.

---

# Interview Priority

## Must Know ⭐⭐⭐⭐⭐

* `==` vs `===`
* `&&`
* `||`
* `!`
* `++` vs `--`
* Ternary
* `typeof`
* Truthy / Falsy
* `??`
* `?.`
* Spread
* Rest

## Good to Know ⭐⭐⭐

* `in`
* `instanceof`
* `delete`
* Operator precedence
* Unary `+` and `-`

## Low Priority

Bitwise operators:

```text
&
|
^
~
<<
>>
>>>
```

---

# Summary

* Operators values aur variables par operations perform karte hain.
* Arithmetic operators calculations ke liye use hote hain.
* Assignment operators values assign/update karte hain.
* Comparison operators values compare karte hain.
* Logical operators conditions combine karte hain.
* Increment/decrement values ko `1` se increase/decrease karte hain.
* Ternary operator simple `if...else` ke liye use hota hai.
* `typeof` data type check karta hai.
* `??` null/undefined ke liye fallback deta hai.
* `?.` safe property access deta hai.
* Spread values ko expand karta hai.
* Rest values ko collect karta hai.

---

# Interview Tip

Interview me sirf definition yaad mat karo.

Har operator ke liye:

1. Definition samjho.
2. Syntax yaad karo.
3. Example likho.
4. Output predict karo.
5. Reason explain karo.
6. Real project me use samjho.

### Main Goal

```text
Concept Samjho
      ↓
Code Likho
      ↓
Output Predict Karo
      ↓
Error Debug Karo
      ↓
Interviewer Ko Explain Karo
```

> **Concept + Coding + Explanation = Strong JavaScript Interview Preparation**
