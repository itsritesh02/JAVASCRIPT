## 2. Temporal Dead Zone (TDZ)

### What is Temporal Dead Zone?

Temporal Dead Zone (TDZ) is the time between entering a scope and initializing a `let` or `const` variable.

During this period, we cannot access the variable.

---

### Example 1: let

```js
console.log(name);

let name = "Ritesh";

console.log(name);