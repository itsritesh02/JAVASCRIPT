# Conversion & Operations

## Definition

Type Conversion is the process of converting one data type into another.

Operations are actions performed on values such as addition, subtraction, multiplication, comparison, etc.

---

## Why do we use Type Conversion?

- To convert one data type into another.
- To perform calculations correctly.
- To avoid unexpected results.

---

# Type Conversion

## 1. String to Number

```javascript
let value = "100";

console.log(Number(value));
```

Output

```
100
```

---

## 2. Number to String

```javascript
let value = 100;

console.log(String(value));
```

Output

```
"100"
```

---

## 3. Boolean to Number

```javascript
console.log(Number(true));
console.log(Number(false));
```

Output

```
1
0
```

---

## 4. Number to Boolean

```javascript
console.log(Boolean(1));
console.log(Boolean(0));
```

Output

```
true
false
```

---

## Truthy Values

- Non-empty String
- Non-zero Number
- Object
- Array
- true

---

## Falsy Values

- false
- 0
- ""
- null
- undefined
- NaN

---

# Operations

## Arithmetic Operators

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

---

## Assignment Operators

```javascript
let x = 10;

x += 5;
x -= 2;
x *= 2;
```

---

## Comparison Operators

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
```

---

## Logical Operators

```javascript
console.log(true && false);
console.log(true || false);
console.log(!true);
```

---

## Unary Operators

```javascript
let x = 10;

x++;
x--;

console.log(x);
```

---

## Interview Questions

### Q1. What is Type Conversion?

Type Conversion is the process of converting one data type into another.

---

### Q2. Difference between == and === ?

== compares only values after type conversion.

=== compares both value and data type.

Example

```javascript
10 == "10"     // true

10 === "10"    // false
```

---

### Q3. What are Truthy and Falsy values?

Truthy values evaluate to true.

Falsy values evaluate to false.

Falsy values:

- false
- 0
- ""
- null
- undefined
- NaN

---

## Important Points

✔ Number() converts value to Number.

✔ String() converts value to String.

✔ Boolean() converts value to Boolean.

✔ Always prefer === over ==.

✔ Learn Truthy and Falsy values.

---

## Summary

- Type Conversion changes one data type into another.
- JavaScript supports implicit and explicit conversion.
- Use Number(), String(), and Boolean().
- Prefer strict equality (===) in modern JavaScript.