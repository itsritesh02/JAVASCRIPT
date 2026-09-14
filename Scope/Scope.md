## 6. Lexical Scope

### What is Lexical Scope?

Lexical Scope means a function can access variables based on **where the function is written in the code**.

In simple words:

> A function can access variables from its own scope and its outer scope.

---

### Example 1: Basic Lexical Scope

```js
let name = "Ritesh";

function greet() {
    console.log(name);
}

greet();