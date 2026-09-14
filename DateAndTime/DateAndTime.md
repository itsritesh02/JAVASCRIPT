## 27. Date and Time in JavaScript

### What is Date?

JavaScript provides the `Date` object to work with **date and time**.

We can get:

- Year
- Month
- Date
- Day
- Hours
- Minutes
- Seconds
- Timestamp

---

### All Examples in One Code

```js
const date = new Date();

// Current date and time
console.log("Current Date:", date);

// Year
console.log("Year:", date.getFullYear());

// Month
console.log("Month:", date.getMonth());

// Date
console.log("Date:", date.getDate());

// Day
console.log("Day:", date.getDay());

// Hours
console.log("Hours:", date.getHours());

// Minutes
console.log("Minutes:", date.getMinutes());

// Seconds
console.log("Seconds:", date.getSeconds());

// Milliseconds
console.log("Milliseconds:", date.getMilliseconds());

// Timestamp
console.log("Timestamp:", date.getTime());

// Readable date
console.log("Date String:", date.toDateString());

// ISO format
console.log("ISO String:", date.toISOString());

// Time String
console.log("Time String:", date.toTimeString());