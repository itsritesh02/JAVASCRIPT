## 24. Callback Function in JavaScript

### What is a Callback?

A **callback function** is a function that is passed as an argument to another function and is called later.

Simple words:

> Function ko kisi doosre function ke andar argument ke form me pass karna = Callback.

---

### Example 1: Basic Callback

```js
function greet(name, callback) {
  console.log("Hello " + name);

  callback();
}

function message() {
  console.log("Welcome to JavaScript");
}

greet("Ritesh", message);