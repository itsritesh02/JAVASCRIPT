# JavaScript Functions – Interview Questions & Answers

## Q1. What is a Function?

### Answer

A function is a reusable block of code that is used to perform a specific task.

Function ko ek baar define karke multiple times call kar sakte hain.

### Example

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Output

```text
Hello
```

### Interview me bolo

> "Function is a reusable block of code that performs a specific task. We can define it once and call it multiple times."

---

# Q2. What is the difference between Parameter and Argument?

### Answer

**Parameter** function definition ke andar hota hai.

**Argument** function call ke time actual value hoti hai.

### Example

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Ritesh");
```

Yahan:

```text
name → Parameter
"Ritesh" → Argument
```

### Interview me bolo

> "Parameter is the variable defined in the function definition, while argument is the actual value passed during the function call."

---

# Q3. What is return in JavaScript?

### Answer

`return` statement function se value bahar bhejne ke liye use hota hai.

### Example

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output

```text
30
```

### Interview me bolo

> "Return is used to send a value from a function back to the place where the function was called."

---

# Q4. Difference between return and console.log()?

### Answer

`console.log()` value ko console me print karta hai.

`return` value ko function ke bahar bhejta hai.

### Example

```javascript
function add(a, b) {
    console.log(a + b);
}

let result = add(10, 20);

console.log(result);
```

Output

```text
30
undefined
```

Because function ne koi value return nahi ki.

### Correct return example

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output

```text
30
```

### Interview me bolo

> "console.log is used for displaying a value, while return sends the value back from the function."

---

# Q5. What is a Function Declaration?

### Answer

Jab `function` keyword ke saath directly function define karte hain, use function declaration kehte hain.

### Example

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Output

```text
Hello
```

### Interview me bolo

> "A function declaration is a function defined using the function keyword followed by the function name."

---

# Q6. What is Function Expression?

### Answer

Jab function ko kisi variable me store karte hain, use function expression kehte hain.

### Example

```javascript
let greet = function() {
    console.log("Hello");
};

greet();
```

Output

```text
Hello
```

### Interview me bolo

> "A function expression is a function assigned to a variable."

---

# Q7. Difference between Function Declaration and Function Expression?

### Answer

### Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

Function declaration hoisted hoti hai.

Isliye:

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

### Function Expression

```javascript
let greet = function() {
    console.log("Hello");
};
```

Function expression ko initialization se pehle access nahi karna chahiye.

### Interview me bolo

> "Function declarations are hoisted, while function expressions are not usable before their initialization."

---

# Q8. What is an Arrow Function?

### Answer

Arrow function JavaScript me function likhne ka shorter syntax hai.

### Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```

### Short Form

```javascript
const add = (a, b) => a + b;
```

### Interview me bolo

> "Arrow functions provide a shorter syntax for writing functions and they also have different behavior for this."

---

# Q9. What is a Callback Function?

### Answer

Jab ek function ko doosre function ke argument ke roop me pass karte hain, usko callback function kehte hain.

### Example

```javascript
function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function message() {
    console.log("Welcome");
}

greet("Ritesh", message);
```

Output

```text
Hello Ritesh
Welcome
```

Yahan:

```text
message → Callback Function
```

### Interview me bolo

> "A callback is a function passed as an argument to another function and executed later or when needed."

---

# Q10. What is a Higher Order Function?

### Answer

Aisa function jo:

1. Kisi function ko argument ke roop me receive kare
2. Ya kisi function ko return kare

Higher Order Function kehlata hai.

### Example

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

let result = calculate(10, 20, (a, b) => a + b);

console.log(result);
```

Output

```text
30
```

Yahan `calculate()` higher order function hai.

### Interview me bolo

> "A higher-order function is a function that accepts another function as an argument or returns a function."

---

# Q11. What is a Default Parameter?

### Answer

Agar function call ke time argument pass nahi kiya jata, to default parameter ki value use hoti hai.

### Example

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
```

Output

```text
Hello Guest
```

Agar value pass kare:

```javascript
greet("Ritesh");
```

Output

```text
Hello Ritesh
```

### Interview me bolo

> "Default parameters provide a default value when no argument is passed."

---

# Q12. What is Rest Parameter?

### Answer

Rest parameter multiple arguments ko ek array me collect karta hai.

Syntax:

```javascript
...args
```

### Example

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

### Practical Example

```javascript
function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));
```

Output

```text
60
```

### Interview me bolo

> "Rest parameters allow a function to accept multiple arguments and collect them into an array."

---

# Q13. What is IIFE?

### Answer

IIFE ka full form hai:

```text
Immediately Invoked Function Expression
```

Ye function define hote hi immediately execute ho jata hai.

### Example

```javascript
(function() {
    console.log("Hello");
})();
```

Output

```text
Hello
```

### Interview me bolo

> "IIFE is a function that is executed immediately after it is created."

---

# Q14. What is Closure?

### Answer

Closure tab create hota hai jab inner function apne outer function ke variables ko remember karta hai, even after outer function execute ho chuka ho.

### Example

```javascript
function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();
```

Output

```text
1
2
3
```

Yahan `inner()` function `count` variable ko remember kar raha hai.

### Interview me bolo

> "A closure is created when an inner function remembers and accesses variables from its outer lexical scope even after the outer function has finished execution."

---

# Q15. What is Recursion?

### Answer

Jab koi function khud ko call karta hai, use recursion kehte hain.

Recursion me **base condition** hona bahut important hai.

### Example

```javascript
function countDown(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    countDown(n - 1);
}

countDown(5);
```

Output

```text
5
4
3
2
1
```

### Interview me bolo

> "Recursion is a technique where a function calls itself until a base condition is reached."

---

# Q16. What is a Pure Function?

### Answer

Pure function:

* Same input → Same output
* Outside state ko modify nahi karta

### Example

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(10, 20));
```

Output

```text
30
30
```

Same input par same output mil raha hai.

### Interview me bolo

> "A pure function always returns the same output for the same input and does not produce side effects."

---

# Q17. Can a Function Return Another Function?

### Answer

Yes.

JavaScript me function ko value ki tarah treat kar sakte hain, isliye ek function doosra function return kar sakta hai.

### Example

```javascript
function outer() {

    function inner() {
        console.log("Hello");
    }

    return inner;
}

let result = outer();

result();
```

Output

```text
Hello
```

---

# Q18. Can a Function be Passed as an Argument?

### Answer

Yes.

JavaScript functions first-class citizens hain.

Isliye function ko:

* variable me store kar sakte hain
* argument ke roop me pass kar sakte hain
* return kar sakte hain

### Example

```javascript
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

Output

```text
Hello
```

---

# Q19. What are First-Class Functions?

### Answer

JavaScript me functions ko normal values ki tarah treat kiya ja sakta hai.

Functions ko:

* Variable me store kar sakte hain
* Argument ke roop me pass kar sakte hain
* Function se return kar sakte hain

### Example

```javascript
const greet = function() {
    console.log("Hello");
};

greet();
```

### Interview me bolo

> "In JavaScript, functions are first-class citizens because they can be stored in variables, passed as arguments, and returned from other functions."

---

# Q20. What happens if a function does not return anything?

### Answer

Agar function explicitly koi value return nahi karta, to JavaScript `undefined` return karta hai.

### Example

```javascript
function test() {
    console.log("Hello");
}

let result = test();

console.log(result);
```

Output

```text
Hello
undefined
```

---

# Q21. Can a Function have Multiple return statements?

### Answer

Yes.

Lekin ek function call me first executed `return` ke baad function immediately stop ho jata hai.

### Example

```javascript
function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(20));
```

Output

```text
Adult
```

---

# Q22. What is Function Scope?

### Answer

Function ke andar declare kiya gaya variable normally function ke bahar directly access nahi kiya ja sakta.

### Example

```javascript
function test() {

    let message = "Hello";

    console.log(message);
}

test();
```

Output

```text
Hello
```

But:

```javascript
function test() {
    let message = "Hello";
}

console.log(message);
```

Ye error dega because `message` function ke scope ke andar hai.

---

# Q23. What is Function Hoisting?

### Answer

JavaScript function declarations ko execution se pehle hoist karti hai.

Isliye function declaration ko declaration se pehle call kar sakte hain.

### Example

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

### Interview me bolo

> "Function declarations are hoisted, so they can be called before their declaration in the code."

---

# Q24. Difference between Normal Function and Arrow Function?

### Answer

Main differences:

| Normal Function                         | Arrow Function                       |
| --------------------------------------- | ------------------------------------ |
| `function` keyword use hota hai         | `=>` use hota hai                    |
| Apna `this` ho sakta hai                | Apna `this` nahi hota                |
| `arguments` object available hota hai   | Apna `arguments` object nahi hota    |
| Constructor ke roop me use ho sakta hai | Constructor ke roop me use nahi hota |

Example:

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow:

```javascript
const add = (a, b) => a + b;
```

### Interview me bolo

> "Arrow functions provide shorter syntax and do not have their own this or arguments binding."

---

# Q25. Why are Functions important in JavaScript?

### Answer

Functions important hain because:

* Code reuse hota hai.
* Code organized rehta hai.
* Duplicate code kam hota hai.
* Testing easy hoti hai.
* Complex application ko small parts me divide kar sakte hain.
* Callbacks aur asynchronous programming me heavily use hote hain.

### Interview me bolo

> "Functions improve code reusability, readability, maintainability, and help us break complex problems into smaller tasks."

---

# Quick Interview Revision

| Question               | Short Answer                                      |
| ---------------------- | ------------------------------------------------- |
| Function?              | Reusable block of code                            |
| Parameter?             | Function definition ka variable                   |
| Argument?              | Function call ki actual value                     |
| Return?                | Value function se bahar bhejta hai                |
| Callback?              | Function passed as argument                       |
| Higher Order Function? | Function receive/return karta hai                 |
| Arrow Function?        | Short function syntax                             |
| Closure?               | Inner function outer variables remember karta hai |
| Recursion?             | Function calls itself                             |
| IIFE?                  | Immediately executed function                     |
| Rest?                  | Arguments ko array me collect karta hai           |
| Default Parameter?     | Argument missing ho to default value              |
| Pure Function?         | Same input → same output                          |
| Function Hoisting?     | Declaration ko before-call allow karta hai        |

---

# Interview Answer Formula

Agar interviewer kisi function concept ke baare me pooche, answer ka structure:

```text
1. Definition
      ↓
2. Simple Example
      ↓
3. Output
      ↓
4. Real Use
      ↓
5. Difference / Important Point
```

Example:

### Interviewer:

> What is a callback function?

### Answer:

> "A callback function is a function passed as an argument to another function. It is commonly used in asynchronous operations and array methods."

Then example:

```javascript
function processUser(name, callback) {

    console.log("User: " + name);

    callback();
}

processUser("Ritesh", () => {
    console.log("User processed");
});
```

Output

```text
User: Ritesh
User processed
```

---

# Final Interview Tip

Function ke liye ye concepts **must prepare** karo:

```text
Function Declaration
        ↓
Function Expression
        ↓
Arrow Function
        ↓
Parameter vs Argument
        ↓
Return
        ↓
Callback
        ↓
Higher Order Function
        ↓
Closure
        ↓
Hoisting
        ↓
IIFE
        ↓
Recursion
        ↓
Rest Parameter
        ↓
Default Parameter
```

> **1 year MERN Developer interview ke liye Function + Array Methods + Async JavaScript + Promise + API handling bahut important hain.**
