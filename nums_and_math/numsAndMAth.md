# Numbers & Math

## Definition

The Number data type is used to store numeric values such as integers and decimal numbers.

The Math object provides built-in methods and properties to perform mathematical operations.

---

## Number Example

```javascript
let age = 22;
let price = 99.99;
```

---

## Number Methods

### toString()

Converts number to string.

```javascript
let num = 100;

console.log(num.toString());
```

Output

```
"100"
```

---

### toFixed()

Rounds a number to a fixed number of decimal places.

```javascript
let num = 99.4567;

console.log(num.toFixed(2));
```

Output

```
99.46
```

---

### toPrecision()

Formats a number with a specified total number of digits.

```javascript
let num = 123.456;

console.log(num.toPrecision(4));
```

Output

```
123.5
```

---

## Math Object

### Math.round()

Rounds to the nearest integer.

```javascript
console.log(Math.round(4.6));
```

Output

```
5
```

---

### Math.ceil()

Rounds up.

```javascript
console.log(Math.ceil(4.2));
```

Output

```
5
```

---

### Math.floor()

Rounds down.

```javascript
console.log(Math.floor(4.9));
```

Output

```
4
```

---

### Math.abs()

Returns absolute value.

```javascript
console.log(Math.abs(-20));
```

Output

```
20
```

---

### Math.max()

Returns the largest value.

```javascript
console.log(Math.max(10,20,30));
```

Output

```
30
```

---

### Math.min()

Returns the smallest value.

```javascript
console.log(Math.min(10,20,30));
```

Output

```
10
```

---

### Math.pow()

Returns power.

```javascript
console.log(Math.pow(2,3));
```

Output

```
8
```

---

### Math.sqrt()

Returns square root.

```javascript
console.log(Math.sqrt(64));
```

Output

```
8
```

---

### Math.random()

Returns a random number between 0 and 1.

```javascript
console.log(Math.random());
```

Example Output

```
0.547832
```

---

### Random Number (1-10)

```javascript
let random = Math.floor(Math.random() * 10) + 1;

console.log(random);
```

Output

```
7
```

(Output changes every time.)

---

## Interview Questions

### Q1. What is Number in JavaScript?

A Number is a primitive data type used to store integer and floating-point values.

---

### Q2. What is Math object?

The Math object provides built-in mathematical methods and constants.

---

### Q3. Difference between Math.floor() and Math.ceil()?

Math.floor() → Rounds down.

Math.ceil() → Rounds up.

---

### Q4. How do you generate a random number between 1 and 10?

```javascript
Math.floor(Math.random() * 10) + 1
```

---

## Important Points

✔ Number is a Primitive Data Type.

✔ Math is a built-in object.

✔ Frequently used methods:

- Math.round()
- Math.floor()
- Math.ceil()
- Math.random()
- Math.max()
- Math.min()
- Math.pow()
- Math.sqrt()

---

## Summary

- Number stores numeric values.
- Math object performs mathematical operations.
- Math.random() generates random numbers.
- Math.floor() and Math.ceil() are commonly used for rounding.