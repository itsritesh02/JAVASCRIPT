# Date & Time

## Definition

The Date object is used to work with dates and time in JavaScript.

It allows us to create, display, and manipulate dates and times.

---

## Create Current Date & Time

```javascript
let date = new Date();

console.log(date);
```

Output

```
Fri Aug 07 2026 ...
```

---

## Current Date

```javascript
let date = new Date();

console.log(date.toDateString());
```

Example Output

```
Fri Aug 07 2026
```

---

## Current Time

```javascript
let date = new Date();

console.log(date.toTimeString());
```

Example Output

```
11:30:45 GMT+0530
```

---

## Current Date & Time

```javascript
let date = new Date();

console.log(date.toLocaleString());
```

Example Output

```
07/08/2026, 11:30:45 am
```

---

## Get Year

```javascript
let date = new Date();

console.log(date.getFullYear());
```

Output

```
2026
```

---

## Get Month

```javascript
let date = new Date();

console.log(date.getMonth());
```

Output

```
7
```

Note:
January = 0

February = 1

...

August = 7

December = 11

---

## Get Date

```javascript
let date = new Date();

console.log(date.getDate());
```

Output

```
7
```

---

## Get Day

```javascript
let date = new Date();

console.log(date.getDay());
```

Output

```
5
```

Days

```
0 Sunday
1 Monday
2 Tuesday
3 Wednesday
4 Thursday
5 Friday
6 Saturday
```

---

## Get Hours

```javascript
let date = new Date();

console.log(date.getHours());
```

---

## Get Minutes

```javascript
let date = new Date();

console.log(date.getMinutes());
```

---

## Get Seconds

```javascript
let date = new Date();

console.log(date.getSeconds());
```

---

## Create Custom Date

```javascript
let date = new Date("2026-12-25");

console.log(date);
```

---

## Interview Questions

### Q1. What is Date object?

The Date object is used to work with date and time.

---

### Q2. How do you get the current year?

```javascript
date.getFullYear();
```

---

### Q3. How do you get the current month?

```javascript
date.getMonth();
```

---

### Q4. Why does getMonth() return 0 for January?

Because JavaScript uses zero-based indexing for months.

---

## Important Points

✔ new Date() creates current date and time.

✔ getMonth() starts from 0.

✔ getDay() returns 0–6.

✔ getDate() returns day of the month.

✔ toLocaleString() displays readable date and time.

---

## Summary

- Use `new Date()` to create a Date object.
- Use `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, and `getSeconds()` to get specific parts of the date.