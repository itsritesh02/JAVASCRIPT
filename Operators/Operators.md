# JavaScript Operators – Interview Questions & Answers

## Q1. What are Operators in JavaScript?

### Answer

Operators are special symbols used to perform operations on values and variables.

Example:

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

Output

```text
30
```

Here `+` is an arithmetic operator.

### Interview me bolo

> "Operators are special symbols used to perform operations on values and variables."

---

# Q2. What are the different types of Operators?

### Answer

JavaScript me commonly ye operators use hote hain:

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Increment / Decrement Operators
* Ternary Operator
* `typeof` Operator
* `in` Operator
* `instanceof` Operator
* `delete` Operator
* Nullish Coalescing Operator
* Optional Chaining
* Spread Operator
* Rest Operator

### Interview me bolo

> "JavaScript provides different operators such as arithmetic, assignment, comparison, logical, ternary, and other operators like typeof, instanceof, nullish coalescing and optional chaining."

---

# Q3. What are Arithmetic Operators?

### Answer

Arithmetic operators mathematical calculations ke liye use hote hain.

Common arithmetic operators:

```text
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Remainder
**  Exponentiation
```

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

### Interview me bolo

> "Arithmetic operators are used to perform mathematical calculations such as addition, subtraction, multiplication, division, remainder and exponentiation."

---

# Q4. What is the difference between == and ===?

### Answer

Ye JavaScript ka **bahut important interview question** hai.

### `==`

Loose equality comparison karta hai.

Type conversion ho sakti hai.

```javascript
console.log(5 == "5");
```

Output

```text
true
```

### `===`

Strict equality comparison karta hai.

Value aur data type dono check karta hai.

```javascript
console.log(5 === "5");
```

Output

```text
false
```

Because:

```text
5   → number
"5" → string
```

### Interview me bolo

> "`==` performs loose equality and may perform type coercion, while `===` performs strict equality and checks both value and type. In most cases, we prefer `===`."

---

# Q5. What is the difference between != and !==?

### Answer

`!=` loose not equal comparison karta hai.

`!==` strict not equal comparison karta hai.

Example:

```javascript
console.log(5 != "5");
console.log(5 !== "5");
```

Output

```text
false
true
```

Reason:

```text
5 == "5"   → true
5 === "5"  → false
```

### Interview me bolo

> "`!=` performs loose inequality comparison, while `!==` performs strict inequality comparison."

---

# Q6. What are Assignment Operators?

### Answer

Assignment operators variable ko value assign ya update karne ke liye use hote hain.

Common operators:

```text
= 
+=
-=
*=
/=
%=
```

Example:

```javascript
let a = 10;

a += 5;

console.log(a);
```

Output

```text
15
```

`a += 5` same hai:

```javascript
a = a + 5;
```

### Interview me bolo

> "Assignment operators are used to assign or update values stored in variables."

---

# Q7. What is the difference between = and ==?

### Answer

`=` assignment ke liye use hota hai.

`==` comparison ke liye use hota hai.

Example:

```javascript
let a = 10;

console.log(a == 10);
```

Output

```text
true
```

### Interview me bolo

> "`=` is an assignment operator, while `==` is a comparison operator."

---

# Q8. What are Comparison Operators?

### Answer

Comparison operators do values ko compare karte hain.

Result always `true` ya `false` hota hai.

Common comparison operators:

```text
==
===
!=
!==
>
<
>=
<=
```

Example:

```javascript
console.log(10 > 5);
console.log(10 === 10);
console.log(5 < 2);
```

Output

```text
true
true
false
```

### Interview me bolo

> "Comparison operators compare two values and return a Boolean result, either true or false."

---

# Q9. What are Logical Operators?

### Answer

Logical operators multiple conditions ko combine karne ke liye use hote hain.

Three main logical operators:

```text
&&  AND
||  OR
!   NOT
```

Example:

```javascript
let age = 22;
let hasId = true;

console.log(age >= 18 && hasId);
```

Output

```text
true
```

---

# Q10. How does && operator work?

### Answer

`&&` ko AND operator kehte hain.

Normally dono conditions/operands truthy hone chahiye.

Example:

```javascript
console.log(true && true);
console.log(true && false);
console.log(false && true);
```

Output

```text
true
false
false
```

### Important

`&&` sirf Boolean result hi nahi deta; JavaScript me ye operands ki actual value bhi return kar sakta hai.

Example:

```javascript
console.log("Hello" && "World");
```

Output

```text
World
```

### Interview me bolo

> "The AND operator returns a falsy value when it finds one; otherwise it returns the last truthy operand."

---

# Q11. How does || operator work?

### Answer

`||` ko OR operator kehte hain.

Ye first truthy value return karta hai.

Example:

```javascript
console.log(false || "Hello");
```

Output

```text
Hello
```

Example:

```javascript
console.log("Ritesh" || "Guest");
```

Output

```text
Ritesh
```

### Interview me bolo

> "The OR operator returns the first truthy operand, and if all operands are falsy, it returns the last operand."

---

# Q12. What does ! operator do?

### Answer

`!` Boolean value ko reverse karta hai.

Example:

```javascript
console.log(!true);
console.log(!false);
```

Output

```text
false
true
```

### Interview me bolo

> "The NOT operator reverses the Boolean value of an expression."

---

# Q13. What is Short-Circuit Evaluation?

### Answer

JavaScript `&&` aur `||` me unnecessary expressions ko execute nahi karta.

### `&&`

```javascript
false && console.log("Hello");
```

Output

```text
Nothing
```

Because first value `false` hai.

### `||`

```javascript
true || console.log("Hello");
```

Output

```text
Nothing
```

Because first value already `true` hai.

### Interview me bolo

> "Short-circuit evaluation means JavaScript stops evaluating an expression as soon as the final result is already known."

---

# Q14. What is the difference between && and ||?

### Answer

`&&` → AND

```javascript
console.log(true && false);
```

Output:

```text
false
```

`||` → OR

```javascript
console.log(true || false);
```

Output:

```text
true
```

### Interview me bolo

> "`&&` requires the operands to continue toward a truthy result, while `||` stops when it finds a truthy value."

---

# Q15. What are Increment and Decrement Operators?

### Answer

Increment operator `++` value ko 1 se increase karta hai.

Decrement operator `--` value ko 1 se decrease karta hai.

Example:

```javascript
let a = 5;

a++;

console.log(a);
```

Output

```text
6
```

---

# Q16. Difference between a++ and ++a?

### Answer

### Post-Increment

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

Pehle old value use hoti hai, phir increment.

### Pre-Increment

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

Pehle increment hota hai, phir value use hoti hai.

### Interview me bolo

> "In post-increment, the current value is used first and then incremented. In pre-increment, the value is incremented first and then used."

---

# Q17. Difference between a-- and --a?

### Answer

Same concept decrement me apply hota hai.

### Post-Decrement

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

### Pre-Decrement

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

# Q18. What is the Ternary Operator?

### Answer

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

### Interview me bolo

> "The ternary operator is a shorthand way of writing a simple if-else condition."

---

# Q19. What is typeof Operator?

### Answer

`typeof` kisi value ka data type check karta hai.

Example:

```javascript
console.log(typeof 10);
console.log(typeof "Hello");
console.log(typeof true);
```

Output

```text
number
string
boolean
```

### Interview me bolo

> "The typeof operator is used to determine the data type of a value."

---

# Q20. What is typeof null?

### Answer

```javascript
console.log(typeof null);
```

Output

```text
object
```

Ye JavaScript ka historical/legacy behavior hai.

Technically `null` ek primitive value hai, lekin `typeof null` `"object"` return karta hai.

### Interview me bolo

> "`typeof null` returns `object` because of a historical behavior in JavaScript."

---

# Q21. What are Truthy and Falsy Values?

### Answer

JavaScript me kuch values condition ke andar `false` ki tarah behave karti hain.

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

Baaki most values truthy hoti hain.

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

### Interview me bolo

> "Falsy values are values that behave like false in a Boolean context, such as false, 0, empty string, null, undefined and NaN."

---

# Q22. What is Nullish Coalescing Operator (??)?

### Answer

`??` fallback value tab return karta hai jab left side `null` ya `undefined` ho.

Example:

```javascript
let username = null;

let name = username ?? "Guest";

console.log(name);
```

Output

```text
Guest
```

Important:

```javascript
console.log(0 ?? 10);
```

Output

```text
0
```

Because `0` null ya undefined nahi hai.

### Interview me bolo

> "The nullish coalescing operator returns the right-hand value only when the left-hand value is null or undefined."

---

# Q23. Difference between ?? and ||?

### Answer

Ye **important MERN interview question** hai.

### OR

```javascript
console.log(0 || 10);
```

Output

```text
10
```

Because `0` falsy hai.

### Nullish Coalescing

```javascript
console.log(0 ?? 10);
```

Output

```text
0
```

Because `??` sirf `null` aur `undefined` check karta hai.

### Interview me bolo

> "`||` treats all falsy values as a reason to use the fallback, while `??` only uses the fallback for null or undefined."

---

# Q24. What is Optional Chaining (?.)?

### Answer

Optional chaining `?.` safely nested properties access karne ke liye use hoti hai.

Example:

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

Without optional chaining:

```javascript
console.log(user.address.city);
```

Error aa sakta hai because `address` undefined hai.

### Interview me bolo

> "Optional chaining allows us to safely access nested properties without throwing an error when an intermediate property is null or undefined."

---

# Q25. What is the Spread Operator?

### Answer

Spread operator `...` array ya object ki values ko expand karta hai.

### Array Example

```javascript
let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];

console.log(result);
```

Output

```text
[1, 2, 3, 4]
```

### Interview me bolo

> "The spread operator expands the elements of an iterable or the properties of an object."

---

# Q26. What is the Rest Operator?

### Answer

Rest parameter multiple values ko ek array me collect karta hai.

Example:

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

### Interview me bolo

> "The rest parameter collects multiple arguments into a single array."

---

# Q27. Difference between Spread and Rest?

### Answer

Dono `...` syntax use karte hain, but purpose different hai.

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

### Interview me bolo

> "Spread expands values, while rest collects multiple values into an array."

---

# Q28. What is the `in` Operator?

### Answer

`in` operator check karta hai ki property object ke andar exist karti hai ya nahi.

Example:

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

### Interview me bolo

> "The in operator checks whether a property exists in an object or its prototype chain."

---

# Q29. What is instanceof Operator?

### Answer

`instanceof` check karta hai ki object kisi particular constructor/class ka instance hai ya nahi.

Example:

```javascript
let arr = [];

console.log(arr instanceof Array);
```

Output

```text
true
```

### Interview me bolo

> "The instanceof operator checks whether an object is an instance of a particular constructor or class."

---

# Q30. What is the delete Operator?

### Answer

`delete` object ki property remove karne ke liye use hota hai.

Example:

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

### Interview me bolo

> "The delete operator removes a property from an object."

---

# Q31. What is Operator Precedence?

### Answer

Jab expression me multiple operators hote hain, JavaScript precedence rules ke according decide karta hai ki kaunsa operation pehle hoga.

Example:

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

Agar parentheses use kare:

```javascript
let result = (10 + 5) * 2;

console.log(result);
```

Output

```text
30
```

### Interview me bolo

> "Operator precedence determines the order in which operators are evaluated in an expression."

---

# Q32. What is Type Coercion?

### Answer

Jab JavaScript automatically ek data type ko doosre data type me convert karti hai, use type coercion kehte hain.

Example:

```javascript
console.log("10" + 5);
```

Output

```text
105
```

String ke saath `+` hone par value string me concatenate ho gayi.

Another example:

```javascript
console.log("10" - 5);
```

Output

```text
5
```

Yahan string `"10"` number me convert ho gayi.

### Interview me bolo

> "Type coercion is the automatic conversion of one data type to another by JavaScript."

---

# Q33. What is the difference between `"10" + 5` and `"10" - 5`?

### Answer

### `+`

```javascript
console.log("10" + 5);
```

Output:

```text
105
```

`+` string concatenation kar deta hai.

### `-`

```javascript
console.log("10" - 5);
```

Output:

```text
5
```

`-` numeric operation perform karta hai, so string number me convert ho jati hai.

### Interview me bolo

> "The plus operator can perform string concatenation, while the minus operator converts numeric strings to numbers for arithmetic."

---

# Q34. What is Unary Plus (+)?

### Answer

Unary `+` kisi value ko number me convert karne ki koshish karta hai.

Example:

```javascript
console.log(+"10");
```

Output

```text
10
```

Check type:

```javascript
console.log(typeof +"10");
```

Output

```text
number
```

---

# Q35. What is NaN?

### Answer

`NaN` ka meaning hai:

```text
Not-a-Number
```

Ye tab mil sakta hai jab numeric operation valid number produce na kare.

Example:

```javascript
console.log("Hello" - 5);
```

Output

```text
NaN
```

### Important

Interesting point:

```javascript
console.log(typeof NaN);
```

Output

```text
number
```

### Interview me bolo

> "NaN stands for Not-a-Number and represents an invalid numeric result. Its typeof is number."

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
console.log(10 + "20");
```

Output

```text
1020
```

---

## Question 3

```javascript
console.log("10" - 5);
```

Output

```text
5
```

---

## Question 4

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

## Question 5

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
console.log(false || "Hello");
```

Output

```text
Hello
```

---

## Question 8

```javascript
console.log("Hello" && "World");
```

Output

```text
World
```

---

## Question 9

```javascript
console.log(!0);
```

Output

```text
true
```

---

## Question 10

```javascript
console.log(typeof null);
```

Output

```text
object
```

---

## Question 11

```javascript
console.log(typeof NaN);
```

Output

```text
number
```

---

## Question 12

```javascript
console.log(2 + 3 * 4);
```

Output

```text
14
```

Reason:

```text
3 * 4 = 12
2 + 12 = 14
```

---

# Quick Interview Revision

| Question     | Short Answer            |   |    |
| ------------ | ----------------------- | - | -- |
| `=`          | Assignment              |   |    |
| `==`         | Loose equality          |   |    |
| `===`        | Strict equality         |   |    |
| `!=`         | Loose inequality        |   |    |
| `!==`        | Strict inequality       |   |    |
| `&&`         | AND                     |   |    |
| `            |                         | ` | OR |
| `!`          | NOT                     |   |    |
| `++`         | Increment               |   |    |
| `--`         | Decrement               |   |    |
| `?:`         | Ternary                 |   |    |
| `typeof`     | Data type check         |   |    |
| `??`         | null/undefined fallback |   |    |
| `?.`         | Safe property access    |   |    |
| `...`        | Spread / Rest           |   |    |
| `in`         | Property existence      |   |    |
| `instanceof` | Instance check          |   |    |
| `delete`     | Object property delete  |   |    |
| `%`          | Remainder               |   |    |
| `**`         | Exponentiation          |   |    |

---

# Most Important for 1-Year MERN Interview

## Must Know ⭐⭐⭐⭐⭐

```text
== vs ===
        ↓
&& vs ||
        ↓
Truthy / Falsy
        ↓
Type Coercion
        ↓
++ vs ++a
        ↓
Ternary
        ↓
typeof
        ↓
?? vs ||
        ↓
Optional Chaining
        ↓
Spread vs Rest
```

## Good to Know ⭐⭐⭐⭐

```text
Operator Precedence
in
instanceof
delete
NaN
Unary +
```

---

# Interview Answer Formula

Agar interviewer operator ke baare me pooche:

```text
Definition
    ↓
Syntax
    ↓
Simple Example
    ↓
Output
    ↓
Reason
    ↓
Real-world Use
```

Example:

### Interviewer:

> What is the difference between `==` and `===`?

### Answer:

> "`==` is loose equality and can perform type coercion, while `===` is strict equality and checks both value and data type. That's why I generally prefer `===` in JavaScript."

Example:

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

---

# Final Interview Tip

Operators me ye questions **pakka prepare** karo:

```text
1. == vs ===
2. != vs !==
3. = vs ==
4. && vs ||
5. Short Circuit
6. Truthy / Falsy
7. Type Coercion
8. ++a vs a++
9. Ternary Operator
10. typeof
11. typeof null
12. NaN
13. ?? vs ||
14. Optional Chaining
15. Spread vs Rest
16. Operator Precedence
```

> **Operators ke interview me sirf definition nahi, output predict karna aur reason explain karna bhi important hai.**
