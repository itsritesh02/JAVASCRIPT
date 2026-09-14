## 3. Scope Chain

### What is Scope Chain?

Scope Chain is the mechanism JavaScript uses to find a variable.

When JavaScript cannot find a variable in the current scope, it searches in the outer scope, then the next outer scope, and finally the global scope.

---

### Example 1: Scope Chain

```js
let name = "Ritesh";

function outer() {
    let age = 25;

    function inner() {
        console.log(name);
        console.log(age);
    }

    inner();
}

outer();