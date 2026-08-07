# Arrays

## Definition

An Array is used to store multiple values in a single variable.

Arrays can store numbers, strings, objects, booleans, or even other arrays.

---

# Create an Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

Output

```
["Apple", "Banana", "Mango"]
```

---

# Access Array Elements

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output

```
Apple
Banana
Mango
```

---

# Array Length

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output

```
3
```

---

# Add Element (push)

Adds an element at the end.

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

Output

```
["Apple", "Banana", "Mango"]
```

---

# Remove Last Element (pop)

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);
```

Output

```
["Apple", "Banana"]
```

---

# Add Element at Beginning (unshift)

```javascript
let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

Output

```
["Apple", "Banana", "Mango"]
```

---

# Remove First Element (shift)

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);
```

Output

```
["Banana", "Mango"]
```

---

# indexOf()

Returns the index of an element.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));
```

Output

```
1
```

---

# includes()

Checks whether an element exists.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Apple"));
```

Output

```
true
```

---

# slice()

Returns a portion of an array.

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.slice(1,3));
```

Output

```
["Banana", "Mango"]
```

---

# splice()

Adds or removes elements from an array.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1,1);

console.log(fruits);
```

Output

```
["Apple", "Mango"]
```

---

# join()

Converts an array into a string.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
```

Output

```
Apple, Banana, Mango
```

---

# reverse()

Reverses the array.

```javascript
let numbers = [1,2,3,4];

console.log(numbers.reverse());
```

Output

```
[4,3,2,1]
```

---

# sort()

Sorts an array.

```javascript
let fruits = ["Banana","Apple","Mango"];

console.log(fruits.sort());
```

Output

```
["Apple","Banana","Mango"]
```

---

# concat()

Joins two arrays.

```javascript
let a = [1,2];
let b = [3,4];

console.log(a.concat(b));
```

Output

```
[1,2,3,4]
```

---

# Spread Operator

```javascript
let a = [1,2];
let b = [3,4];

let c = [...a,...b];

console.log(c);
```

Output

```
[1,2,3,4]
```

---

# forEach()

Used to iterate through an array.

```javascript
let numbers = [10,20,30];

numbers.forEach((num)=>{
    console.log(num);
});
```

Output

```
10
20
30
```

---

# map()

Returns a new array.

```javascript
let numbers = [1,2,3];

let result = numbers.map((num)=>num*2);

console.log(result);
```

Output

```
[2,4,6]
```

---

# filter()

Returns elements that satisfy a condition.

```javascript
let numbers = [10,20,30,40];

let result = numbers.filter((num)=>num>20);

console.log(result);
```

Output

```
[30,40]
```

---

# find()

Returns the first matching element.

```javascript
let numbers = [10,20,30];

let result = numbers.find((num)=>num>15);

console.log(result);
```

Output

```
20
```

---

# reduce()

Reduces an array to a single value.

```javascript
let numbers = [1,2,3,4];

let sum = numbers.reduce((acc,num)=>acc+num,0);

console.log(sum);
```

Output

```
10
```

---

# Interview Questions

## Q1. What is an Array?

An array is used to store multiple values in a single variable.

---

## Q2. Difference between push() and pop()?

- push() → Adds element at the end.
- pop() → Removes element from the end.

---

## Q3. Difference between shift() and unshift()?

- shift() → Removes first element.
- unshift() → Adds element at the beginning.

---

## Q4. Difference between slice() and splice()?

- slice() → Returns a new array, original array remains unchanged.
- splice() → Changes the original array.

---

## Q5. Difference between map() and forEach()?

- map() → Returns a new array.
- forEach() → Returns nothing (`undefined`).

---

## Q6. Difference between filter() and find()?

- filter() → Returns all matching elements (array).
- find() → Returns the first matching element.

---

## Q7. What is reduce() used for?

It reduces an array into a single value (sum, product, etc.).

---

# Important Points

- Arrays start from index **0**.
- `length` returns total elements.
- `push()` and `pop()` work at the end.
- `shift()` and `unshift()` work at the beginning.
- `map()`, `filter()`, and `reduce()` are very important for interviews.
- `slice()` does not modify the original array.
- `splice()` modifies the original array.

---

# Summary

- Arrays store multiple values.
- Use `push()`, `pop()`, `shift()`, and `unshift()` to add/remove elements.
- Use `map()`, `filter()`, and `reduce()` for data manipulation.
- Use `slice()` for copying and `splice()` for modifying arrays.