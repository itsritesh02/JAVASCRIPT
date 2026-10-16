
# Destructuring in JavaScript

## Interview Question
What is destructuring in JavaScript?

## Interview Answer
Destructuring is a JavaScript feature that allows us to extract values from arrays or properties from objects and store them in variables easily.

There are two types:
1. Array Destructuring
2. Object Destructuring

## 1. Array Destructuring

It is used to extract values from an array and assign them to variables.

### Example

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

### Explanation
- `a` gets the first value.
- `b` gets the second value.
- `c` gets the third value.

## 2. Object Destructuring

It is used to extract properties from an object and assign them to variables.

### Example

```javascript
const user = {
  name: "Ritesh",
  age: 25
};

const { name, age } = user;

console.log(name); // Ritesh
console.log(age);  // 25
```

### Explanation
- `name` gets the value of `user.name`.
- `age` gets the value of `user.age`.
- In object destructuring, variable names usually match the property names.

## 3. Difference

| Array Destructuring | Object Destructuring |
|---|---|
| Uses square brackets `[]` | Uses curly braces `{}` |
| Values are extracted by position | Values are extracted by property name |
| `const [a, b] = arr` | `const { name } = user` |

## Short Interview Answer

Destructuring is a JavaScript feature used to extract values from arrays or properties from objects and assign them to variables in a simple way. It makes code shorter and easier to read.
