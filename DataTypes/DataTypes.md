## 26. Data Types in JavaScript

### What are Data Types?

Data types tell us **what type of value a variable contains**.

JavaScript has two main categories:

1. Primitive Data Types
2. Non-Primitive Data Types

---

## 1. Primitive Data Types

There are **7 primitive data types** in JavaScript:

```text

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol


const name = "Ritesh";       // String
const age = 25;              // Number
const isLogin = true;        // Boolean
let city;                    // Undefined
const data = null;           // Null
const big = 123456789n;      // BigInt
const id = Symbol("id");     // Symbol

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLogin);
console.log(typeof city);
console.log(typeof data);
console.log(typeof big);
console.log(typeof id);



## 1. Primitive Data Types


Object
Array
Function
Date
Map
Set




const user = {
  name: "Ritesh",
  age: 25
};

const numbers = [10, 20, 30];

function greet() {
  console.log("Hello");
}

console.log(typeof user);
console.log(typeof numbers);
console.log(typeof greet);