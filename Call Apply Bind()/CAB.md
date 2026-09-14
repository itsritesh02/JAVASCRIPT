## 9. `call()`, `apply()` and `bind()`

### What are `call()`, `apply()` and `bind()`?

`call()`, `apply()` and `bind()` are used to control the value of `this` inside a function.

The main difference is how they handle function execution and arguments.

---

### Example: `call()`, `apply()` and `bind()` Together

```js
const user = {
    name: "Ritesh"
};

function introduce(city, role) {
    console.log("Name:", this.name);
    console.log("City:", city);
    console.log("Role:", role);
}

// call()
introduce.call(user, "Mohali", "MERN Developer");

// apply()
introduce.apply(user, ["Mohali", "MERN Developer"]);

// bind()
const newFunction = introduce.bind(user, "Mohali", "MERN Developer");

newFunction();