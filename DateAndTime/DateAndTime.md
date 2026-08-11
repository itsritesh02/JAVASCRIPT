# Date & Time

## Definition

The `Date` object is used to work with dates and time in JavaScript.

It allows us to create, display, and manipulate dates and times.

---

# Create Current Date & Time

```javascript
let date = new Date();

console.log(date);
```

Output

```
Fri Aug 07 2026 11:30:45 GMT+0530 (India Standard Time)
```

---

# Current Date

```javascript
let date = new Date();

console.log(date.toDateString());
```

Output

```
Fri Aug 07 2026
```

---

# Current Time

```javascript
let date = new Date();

console.log(date.toTimeString());
```

Output

```
11:30:45 GMT+0530 (India Standard Time)
```

---

# Current Date & Time

```javascript
let date = new Date();

console.log(date.toLocaleString());
```

Output

```
07/08/2026, 11:30:45 am
```

---

# Current Date Only

```javascript
let date = new Date();

console.log(date.toLocaleDateString());
```

Output

```
07/08/2026
```

---

# Current Time Only

```javascript
let date = new Date();

console.log(date.toLocaleTimeString());
```

Output

```
11:30:45 am
```

---

# Get Full Year

```javascript
let date = new Date();

console.log(date.getFullYear());
```

Output

```
2026
```

---

# Get Month

```javascript
let date = new Date();

console.log(date.getMonth());
```

Output

```
7
```

> **Note:** Months start from **0**.

| Month | Value |
|--------|------:|
| January | 0 |
| February | 1 |
| March | 2 |
| April | 3 |
| May | 4 |
| June | 5 |
| July | 6 |
| August | 7 |
| September | 8 |
| October | 9 |
| November | 10 |
| December | 11 |

---

# Human Readable Month

```javascript
let date = new Date();

console.log(date.getMonth() + 1);
```

Output

```
8
```

**Explanation**

`getMonth()` returns values from **0–11**.

So we add **1** to display the normal month.

---

# Get Date

```javascript
let date = new Date();

console.log(date.getDate());
```

Output

```
7
```

---

# Get Day

```javascript
let date = new Date();

console.log(date.getDay());
```

Output

```
5
```

| Day | Value |
|------|------:|
| Sunday | 0 |
| Monday | 1 |
| Tuesday | 2 |
| Wednesday | 3 |
| Thursday | 4 |
| Friday | 5 |
| Saturday | 6 |

---

# Get Hours

```javascript
let date = new Date();

console.log(date.getHours());
```

Output

```
11
```

---

# Get Minutes

```javascript
let date = new Date();

console.log(date.getMinutes());
```

Output

```
30
```

---

# Get Seconds

```javascript
let date = new Date();

console.log(date.getSeconds());
```

Output

```
45
```

---

# Get Milliseconds

```javascript
let date = new Date();

console.log(date.getMilliseconds());
```

Output

```
350
```

---

# Get Timestamp

```javascript
let date = new Date();

console.log(date.getTime());
```

Output

```
1786089645350
```

---

# Current Timestamp

```javascript
console.log(Date.now());
```

Output

```
1786089645350
```

---

# Create Custom Date (String)

```javascript
let birthday = new Date("2004-05-15");

console.log(birthday);
```

Output

```
Sat May 15 2004
```

---

# Create Custom Date (Numbers)

```javascript
let date = new Date(2026, 7, 15);

console.log(date);
```

Output

```
Sat Aug 15 2026
```

> **Note:** Month starts from **0**.

---

# Create Date with Time

```javascript
let meeting = new Date(2026, 7, 15, 10, 30, 0);

console.log(meeting);
```

Output

```
Sat Aug 15 2026 10:30:00
```

---

# Compare Dates

```javascript
let d1 = new Date("2026-08-01");
let d2 = new Date("2026-08-10");

console.log(d2 > d1);
```

Output

```
true
```

---

# Interview Questions

## Q1. What is Date object?

The `Date` object is used to work with date and time.

---

## Q2. How do you get the current year?

```javascript
date.getFullYear();
```

---

## Q3. How do you get the current month?

```javascript
date.getMonth();
```

---

## Q4. Why does `getMonth()` return 0 for January?

Because JavaScript uses **zero-based indexing** for months.

---

## Q5. How do you get the current date?

```javascript
date.getDate();
```

---

## Q6. How do you get the current day?

```javascript
date.getDay();
```

---

## Q7. How do you get the current timestamp?

```javascript
Date.now();
```

---

# Important Points

- `new Date()` → Creates current date & time.
- `getMonth()` → Returns month from **0–11**.
- `getMonth() + 1` → Returns month from **1–12**.
- `getDay()` → Returns day from **0–6**.
- `getDate()` → Returns day of the month.
- `Date.now()` → Returns current timestamp.
- `toLocaleString()` → Returns readable date & time.

---

# Summary

- Use `new Date()` to create a Date object.
- Use `toDateString()` to display only the date.
- Use `toTimeString()` to display only the time.
- Use `toLocaleString()` for readable date & time.
- Use `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, and `getSeconds()` to get specific parts of the date.
- Use `Date.now()` to get the current timestamp.