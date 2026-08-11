# JavaScript Arrays – Interview Questions & Answers

## Q1. What is an Array?

### Answer

Array ek data structure hai jo multiple values ko ek single variable me store karta hai.

JavaScript array me different data types ki values bhi store kar sakte hain.

### Example

```javascript
let arr = [10, 20, 30, 40];

console.log(arr);
```

Output

```text
[10, 20, 30, 40]
```

### Interview me bolo

> "An array is a data structure used to store multiple values in a single variable. JavaScript arrays can contain values of different data types."

---

# Q2. How do you create an Array?

### Answer

Array create karne ke liye `[]` use kar sakte hain.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Mango"]
```

---

# Q3. What is Array Index?

### Answer

Array ka index `0` se start hota hai.

Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output

```text
Apple
Banana
Mango
```

### Important

```text
Apple  → index 0
Banana → index 1
Mango  → index 2
```

### Interview me bolo

> "JavaScript arrays are zero-indexed, meaning the first element is stored at index 0."

---

# Q4. How do you access an Array element?

### Answer

Index number ka use karke element access karte hain.

```javascript
let numbers = [10, 20, 30];

console.log(numbers[1]);
```

Output

```text
20
```

---

# Q5. What is the length property?

### Answer

`length` array ke total elements batata hai.

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.length);
```

Output

```text
4
```

### Interview me bolo

> "The length property returns the number of elements in an array."

---

# Q6. What is push()?

### Answer

`push()` array ke end me element add karta hai.

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Mango"]
```

### Important

`push()` original array ko modify karta hai.

---

# Q7. What is pop()?

### Answer

`pop()` array ke last element ko remove karta hai.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let result = fruits.pop();

console.log(result);
console.log(fruits);
```

Output

```text
Mango
["Apple", "Banana"]
```

### Important

`pop()` removed element return karta hai.

---

# Q8. What is the difference between push() and pop()?

| push()                      | pop()                            |
| --------------------------- | -------------------------------- |
| Element add karta hai       | Element remove karta hai         |
| End me add karta hai        | End se remove karta hai          |
| New length return karta hai | Removed element return karta hai |

Example:

```javascript
let arr = [10, 20];

console.log(arr.push(30));
```

Output:

```text
3
```

---

# Q9. What is unshift()?

### Answer

`unshift()` array ke beginning me element add karta hai.

```javascript
let arr = [20, 30];

arr.unshift(10);

console.log(arr);
```

Output

```text
[10, 20, 30]
```

---

# Q10. What is shift()?

### Answer

`shift()` array ke first element ko remove karta hai.

```javascript
let arr = [10, 20, 30];

let result = arr.shift();

console.log(result);
console.log(arr);
```

Output

```text
10
[20, 30]
```

---

# Q11. Difference between shift() and unshift()?

| shift()                | unshift()                |
| ---------------------- | ------------------------ |
| First element remove   | Beginning me element add |
| Original array modify  | Original array modify    |
| Removed element return | New length return        |

---

# Q12. What is slice()?

### Answer

`slice()` array ke ek portion ki **new array** return karta hai.

Syntax:

```javascript
array.slice(start, end);
```

`end` index include nahi hota.

### Example

```javascript
let arr = [10, 20, 30, 40];

let result = arr.slice(1, 3);

console.log(result);
console.log(arr);
```

Output

```text
[20, 30]
[10, 20, 30, 40]
```

### Important

`slice()` original array ko modify nahi karta.

### Interview me bolo

> "slice() returns a shallow copy of a portion of an array and does not modify the original array."

---

# Q13. What is splice()?

### Answer

`splice()` array me elements add, remove ya replace kar sakta hai.

Syntax:

```javascript
array.splice(start, deleteCount, item1, item2);
```

### Remove Example

```javascript
let arr = [10, 20, 30, 40];

arr.splice(1, 2);

console.log(arr);
```

Output

```text
[10, 40]
```

---

# Q14. Difference between slice() and splice()?

### Very Important Interview Question ⭐⭐⭐⭐⭐

| slice()                          | splice()                                   |
| -------------------------------- | ------------------------------------------ |
| New array return karta hai       | Removed elements ka array return karta hai |
| Original array modify nahi karta | Original array modify karta hai            |
| Copy/portion ke liye             | Add/remove/replace ke liye                 |
| `end` index exclusive            | `deleteCount` use hota hai                 |

### Interview me bolo

> "slice() does not modify the original array and is mainly used to extract a portion, whereas splice() modifies the original array and can add, remove, or replace elements."

---

# Q15. What is indexOf()?

### Answer

`indexOf()` kisi element ka first matching index return karta hai.

Agar element nahi mila to `-1` return karta hai.

```javascript
let arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));
console.log(arr.indexOf(50));
```

Output

```text
1
-1
```

---

# Q16. What is lastIndexOf()?

### Answer

`lastIndexOf()` element ka last matching index return karta hai.

```javascript
let arr = [10, 20, 30, 20];

console.log(arr.lastIndexOf(20));
```

Output

```text
3
```

---

# Q17. What is includes()?

### Answer

`includes()` check karta hai ki element array me present hai ya nahi.

Result `true` ya `false` hota hai.

```javascript
let arr = [10, 20, 30];

console.log(arr.includes(20));
console.log(arr.includes(50));
```

Output

```text
true
false
```

### Interview me bolo

> "includes() checks whether an array contains a specified value and returns a Boolean."

---

# Q18. What is join()?

### Answer

`join()` array ke elements ko ek string me convert karta hai.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
```

Output

```text
Apple, Banana, Mango
```

### Interview me bolo

> "join() combines array elements into a string using a specified separator."

---

# Q19. What is reverse()?

### Answer

`reverse()` array ke elements ka order reverse karta hai.

```javascript
let arr = [1, 2, 3, 4];

arr.reverse();

console.log(arr);
```

Output

```text
[4, 3, 2, 1]
```

### Important

`reverse()` original array modify karta hai.

---

# Q20. What is sort()?

### Answer

`sort()` array ke elements ko sort karta hai.

### String Example

```javascript
let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Mango"]
```

### Important Interview Question

Numbers ko default `sort()` numeric order me nahi sort karta.

```javascript
let numbers = [10, 2, 5, 20];

numbers.sort();

console.log(numbers);
```

Output:

```text
[10, 2, 20, 5]
```

Reason: default sorting values ko strings ki tarah compare karti hai.

### Correct numeric sorting

```javascript
let numbers = [10, 2, 5, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output

```text
[2, 5, 10, 20]
```

### Interview me bolo

> "By default, sort() compares elements as strings. For numeric ascending order, we use `(a, b) => a - b`."

---

# Q21. What is concat()?

### Answer

`concat()` two or more arrays ko combine karta hai aur new array return karta hai.

```javascript
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);

console.log(result);
```

Output

```text
[1, 2, 3, 4]
```

### Important

Original arrays modify nahi hote.

---

# Q22. What is the Spread Operator with Arrays?

### Answer

Spread operator `...` array ke elements ko expand karta hai.

```javascript
let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];

console.log(result);
```

Output

```text
[1, 2, 3, 4]
```

### Interview me bolo

> "The spread operator expands array elements and is commonly used for copying or combining arrays."

---

# Q23. Difference between concat() and Spread Operator?

### Answer

Dono arrays combine kar sakte hain.

```javascript
let a = [1, 2];
let b = [3, 4];

let result1 = a.concat(b);

let result2 = [...a, ...b];
```

Both:

```text
[1, 2, 3, 4]
```

### Interview me bolo

> "Both concat() and spread can combine arrays. Spread is often more flexible because we can combine and add other elements in the same expression."

---

# Q24. What is forEach()?

### Answer

`forEach()` array ke har element par callback function execute karta hai.

```javascript
let numbers = [10, 20, 30];

numbers.forEach((num) => {
    console.log(num);
});
```

Output

```text
10
20
30
```

### Important

`forEach()` new array return nahi karta.

```javascript
let result = numbers.forEach((num) => num * 2);

console.log(result);
```

Output

```text
undefined
```

### Interview me bolo

> "forEach() executes a callback for each array element and is generally used when we want side effects rather than a new array."

---

# Q25. What is map()?

### Answer

`map()` array ke har element par operation perform karke **new array return** karta hai.

```javascript
let numbers = [1, 2, 3];

let result = numbers.map((num) => {
    return num * 2;
});

console.log(result);
```

Output

```text
[2, 4, 6]
```

### Important

Original array unchanged:

```text
numbers → [1, 2, 3]
result  → [2, 4, 6]
```

### Interview me bolo

> "map() creates and returns a new array by transforming each element of the original array."

---

# Q26. Difference between map() and forEach()?

### Very Important ⭐⭐⭐⭐⭐

| map()                        | forEach()                      |
| ---------------------------- | ------------------------------ |
| New array return karta hai   | `undefined` return karta hai   |
| Data transform karne ke liye | Iteration/side effects ke liye |
| Return value important hai   | Return value ignored hoti hai  |

Example:

```javascript
let arr = [1, 2, 3];

let a = arr.map(x => x * 2);

let b = arr.forEach(x => x * 2);

console.log(a);
console.log(b);
```

Output

```text
[2, 4, 6]
undefined
```

### Interview me bolo

> "I use map() when I need a transformed array, and forEach() when I simply need to perform an action for each element."

---

# Q27. What is filter()?

### Answer

`filter()` condition ke according elements select karta hai aur **new array return** karta hai.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.filter((num) => {
    return num > 20;
});

console.log(result);
```

Output

```text
[30, 40]
```

### Interview me bolo

> "filter() returns a new array containing all elements that satisfy a given condition."

---

# Q28. What is find()?

### Answer

`find()` condition satisfy karne wala **first element** return karta hai.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.find((num) => num > 20);

console.log(result);
```

Output

```text
30
```

Agar element nahi mila:

```javascript
console.log(numbers.find(num => num > 100));
```

Output:

```text
undefined
```

---

# Q29. Difference between find() and filter()?

### Very Important ⭐⭐⭐⭐⭐

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.find(num => num > 20));

console.log(numbers.filter(num => num > 20));
```

Output

```text
30
[30, 40]
```

| find()                  | filter()              |
| ----------------------- | --------------------- |
| First matching element  | All matching elements |
| Single value            | New array             |
| Not found → `undefined` | Not found → `[]`      |

### Interview me bolo

> "find() returns the first matching element, whereas filter() returns all matching elements in a new array."

---

# Q30. What is reduce()?

### Answer

`reduce()` array ko ek single value me reduce karta hai.

Common uses:

* Sum
* Product
* Total
* Maximum/minimum
* Object creation
* Counting

### Example

```javascript
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(sum);
```

Output

```text
10
```

### How it works

```text
acc = 0
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

### Interview me bolo

> "reduce() processes all array elements and accumulates them into a single final value."

---

# Q31. What is the difference between map(), filter(), and reduce()?

### Very Important ⭐⭐⭐⭐⭐

### map()

Transformation:

```javascript
let result = [1, 2, 3].map(x => x * 2);
```

Output:

```text
[2, 4, 6]
```

### filter()

Selection:

```javascript
let result = [1, 2, 3, 4].filter(x => x > 2);
```

Output:

```text
[3, 4]
```

### reduce()

Single value:

```javascript
let result = [1, 2, 3].reduce((sum, x) => sum + x, 0);
```

Output:

```text
6
```

### Easy Trick

```text
map    → Transform
filter → Select
reduce → Combine
```

---

# Q32. What is some()?

### Answer

`some()` check karta hai ki **at least one element** condition satisfy karta hai ya nahi.

```javascript
let numbers = [10, 20, 30];

console.log(numbers.some(num => num > 25));
```

Output

```text
true
```

### Interview me bolo

> "some() returns true if at least one array element satisfies the condition."

---

# Q33. What is every()?

### Answer

`every()` check karta hai ki **all elements** condition satisfy karte hain ya nahi.

```javascript
let numbers = [10, 20, 30];

console.log(numbers.every(num => num > 5));
```

Output

```text
true
```

### Interview me bolo

> "every() returns true only if all array elements satisfy the condition."

---

# Q34. Difference between some() and every()?

| some()             | every()                           |
| ------------------ | --------------------------------- |
| At least one match | All must match                    |
| One true enough    | Every condition true honi chahiye |

Example:

```javascript
let arr = [10, 20, 30];

console.log(arr.some(x => x > 25));
console.log(arr.every(x => x > 5));
```

Output

```text
true
true
```

---

# Q35. What is Array.isArray()?

### Answer

`Array.isArray()` check karta hai ki given value array hai ya nahi.

```javascript
let arr = [1, 2, 3];

console.log(Array.isArray(arr));
```

Output

```text
true
```

Example:

```javascript
console.log(Array.isArray("Hello"));
```

Output

```text
false
```

### Interview me bolo

> "Array.isArray() is used to reliably check whether a value is an array."

---

# Q36. Why typeof [] is object?

### Answer

```javascript
console.log(typeof []);
```

Output

```text
object
```

JavaScript me arrays technically objects hain.

Isliye array check karne ke liye:

```javascript
Array.isArray(value)
```

use karna better hai.

### Example

```javascript
console.log(Array.isArray([]));
```

Output:

```text
true
```

---

# Q37. What is a Multidimensional Array?

### Answer

Jab array ke andar another array hota hai, use multidimensional array kehte hain.

```javascript
let matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[0][1]);
```

Output

```text
2
```

---

# Q38. How do you copy an Array?

### Spread:

```javascript
let arr = [1, 2, 3];

let copy = [...arr];

console.log(copy);
```

### slice():

```javascript
let copy = arr.slice();
```

### Important

Ye shallow copy banate hain.

---

# Q39. What is a Shallow Copy?

### Answer

Shallow copy me top-level array copy hota hai, lekin nested objects/arrays ke references same ho sakte hain.

Example:

```javascript
let original = [
    [1, 2],
    [3, 4]
];

let copy = [...original];

copy[0][0] = 100;

console.log(original);
```

Output:

```text
[
    [100, 2],
    [3, 4]
]
```

Because nested array ka reference same hai.

### Interview me bolo

> "A shallow copy copies the top-level structure, but nested objects or arrays can still share references."

---

# Q40. How do you check if an array contains an element?

### Answer

`includes()` use kar sakte hain.

```javascript
let users = ["Ritesh", "Aman", "Rahul"];

console.log(users.includes("Ritesh"));
```

Output:

```text
true
```

---

# Important Output-Based Questions

## Q1.

```javascript
let arr = [1, 2, 3];

console.log(arr.push(4));
console.log(arr);
```

Output:

```text
4
[1, 2, 3, 4]
```

`push()` new length return karta hai.

---

## Q2.

```javascript
let arr = [1, 2, 3];

console.log(arr.pop());
console.log(arr);
```

Output:

```text
3
[1, 2]
```

---

## Q3.

```javascript
let arr = [1, 2, 3, 4];

console.log(arr.slice(1, 3));
console.log(arr);
```

Output:

```text
[2, 3]
[1, 2, 3, 4]
```

---

## Q4.

```javascript
let arr = [1, 2, 3, 4];

console.log(arr.splice(1, 2));
console.log(arr);
```

Output:

```text
[2, 3]
[1, 4]
```

---

## Q5.

```javascript
let arr = [1, 2, 3];

let result = arr.map(x => x * 2);

console.log(result);
console.log(arr);
```

Output:

```text
[2, 4, 6]
[1, 2, 3]
```

---

## Q6.

```javascript
let arr = [1, 2, 3, 4];

let result = arr.filter(x => x % 2 === 0);

console.log(result);
```

Output:

```text
[2, 4]
```

---

## Q7.

```javascript
let arr = [1, 2, 3, 4];

let result = arr.find(x => x > 2);

console.log(result);
```

Output:

```text
3
```

---

## Q8.

```javascript
let arr = [1, 2, 3, 4];

let result = arr.reduce((acc, x) => acc + x, 0);

console.log(result);
```

Output:

```text
10
```

---

## Q9.

```javascript
let arr = [10, 2, 5, 20];

arr.sort();

console.log(arr);
```

Output:

```text
[10, 2, 20, 5]
```

### Why?

Default `sort()` values ko strings ki tarah compare karta hai.

---

## Q10.

```javascript
let arr = [10, 2, 5, 20];

arr.sort((a, b) => a - b);

console.log(arr);
```

Output:

```text
[2, 5, 10, 20]
```

---

# Array Methods Quick Revision

| Method     | Use                | Original Array |
| ---------- | ------------------ | -------------- |
| push()     | End me add         | Modify         |
| pop()      | End se remove      | Modify         |
| shift()    | Start se remove    | Modify         |
| unshift()  | Start me add       | Modify         |
| slice()    | Portion copy       | No change      |
| splice()   | Add/remove/replace | Modify         |
| indexOf()  | Index find         | No change      |
| includes() | Exists check       | No change      |
| join()     | Array → String     | No change      |
| reverse()  | Reverse            | Modify         |
| sort()     | Sort               | Modify         |
| concat()   | Arrays combine     | New array      |
| forEach()  | Iterate            | `undefined`    |
| map()      | Transform          | New array      |
| filter()   | Select             | New array      |
| find()     | First match        | Single value   |
| reduce()   | Single result      | Single value   |
| some()     | At least one       | Boolean        |
| every()    | All elements       | Boolean        |

---

# Most Important Array Interview Questions ⭐⭐⭐⭐⭐

```text
1. What is an Array?
2. Why does Array index start from 0?
3. push() vs pop()
4. shift() vs unshift()
5. slice() vs splice()
6. map() vs forEach()
7. map() vs filter()
8. find() vs filter()
9. map() vs reduce()
10. some() vs every()
11. What does reduce() do?
12. What does sort() do with numbers?
13. How to copy an array?
14. What is shallow copy?
15. What is Array.isArray()?
16. Why typeof [] is object?
17. Spread operator with arrays
18. concat() vs spread
19. How to remove duplicates?
20. How to find maximum/minimum?
```

---

# Common Coding Questions in MERN Interviews

## 1. Find Maximum

```javascript
let arr = [10, 30, 20, 50, 40];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);
```

Output:

```text
50
```

---

## 2. Find Minimum

```javascript
let arr = [10, 30, 20, 50, 40];

let min = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);
```

Output:

```text
10
```

---

## 3. Remove Duplicates

```javascript
let arr = [1, 2, 2, 3, 3, 4];

let result = [...new Set(arr)];

console.log(result);
```

Output:

```text
[1, 2, 3, 4]
```

---

## 4. Find Even Numbers

```javascript
let arr = [1, 2, 3, 4, 5, 6];

let result = arr.filter(num => num % 2 === 0);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

## 5. Find Sum

```javascript
let arr = [10, 20, 30];

let sum = arr.reduce((total, num) => total + num, 0);

console.log(sum);
```

Output:

```text
60
```

---

# Final Revision Trick

Array methods ko 5 groups me yaad rakho:

```text
ADD / REMOVE
    ↓
push
pop
shift
unshift

SEARCH
    ↓
indexOf
includes
find

TRANSFORM
    ↓
map

FILTER
    ↓
filter

CALCULATE
    ↓
reduce
```

Aur ye 5 differences **must yaad rakho**:

```text
slice vs splice
        ↓
map vs forEach
        ↓
find vs filter
        ↓
some vs every
        ↓
map vs reduce
```

> **1-year MERN interview ke liye Array methods sirf definition se nahi, code likhkar aur output predict karke prepare karo.**
