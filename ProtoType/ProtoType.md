## 10. Prototype

### What is Prototype?

In JavaScript, every object can have a **prototype**.

A prototype is an object from which another object can inherit properties and methods.

In simple words:

> Prototype allows objects to share properties and methods.

---

### Example 1: Prototype Method

```js
function User(name) {
    this.name = name;
}

User.prototype.greet = function () {
    console.log("Hello " + this.name);
};

const user1 = new User("Ritesh");
const user2 = new User("Rahul");

user1.greet();
user2.greet();


## 11. Prototype Chain

### What is Prototype Chain?

Prototype Chain is the mechanism JavaScript uses to find a property or method when it is not available directly on an object.

In simple words:

> JavaScript first checks the object itself. If the property is not found, it checks its prototype, then the prototype's prototype, and so on.

This process continues until JavaScript reaches `null`.

---

### Example 1: Simple Prototype Chain

```js
const user = {
    name: "Ritesh"
};

console.log(user.name);
console.log(user.toString);


## 12. Prototypal Inheritance

### What is Prototypal Inheritance?

Prototypal inheritance means one object can inherit properties and methods from another object using its prototype.

In simple words:

> One object can use the properties and methods of another object.

---

### Example 1: Simple Prototypal Inheritance

```js
const user = {
    name: "Ritesh",

    greet: function () {
        console.log("Hello " + this.name);
    }
};

const employee = Object.create(user);

employee.role = "MERN Developer";

console.log(employee.name);
console.log(employee.role);

employee.greet();