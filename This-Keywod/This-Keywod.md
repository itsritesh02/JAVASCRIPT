## 8. `this` Keyword

### What is `this`?

`this` refers to the object that is associated with the current function call.

In simple words:

> `this` tells us which object is calling the function.

---

### Example 1: Object Method

```js
const user = {
    name: "Ritesh",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();nn