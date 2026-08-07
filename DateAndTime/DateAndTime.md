// ==========================
// Create Current Date & Time
// ==========================

let date = new Date();

console.log(date);

// Example Output
// 2026-08-07T06:30:20.123Z


// ==========================
// Current Date
// ==========================

console.log(date.toDateString());

// Output
// Fri Aug 07 2026


// ==========================
// Current Time
// ==========================

console.log(date.toTimeString());

// Output
// 11:30:45 GMT+0530 (India Standard Time)


// ==========================
// Current Date & Time
// ==========================

console.log(date.toLocaleString());

// Output
// 07/08/2026, 11:30:45 am


// ==========================
// Current Date Only
// ==========================

console.log(date.toLocaleDateString());

// Output
// 07/08/2026


// ==========================
// Current Time Only
// ==========================

console.log(date.toLocaleTimeString());

// Output
// 11:30:45 am


// ==========================
// Get Full Year
// ==========================

console.log(date.getFullYear());

// Output
// 2026


// ==========================
// Get Month
// January = 0
// February = 1
// ...
// December = 11
// ==========================

console.log(date.getMonth());

// Output
// 7


// Human Readable Month

console.log(date.getMonth() + 1);

// Output
// 8


// ==========================
// Get Date
// ==========================

console.log(date.getDate());

// Output
// 7


// ==========================
// Get Day
// Sunday = 0
// Monday = 1
// ...
// Saturday = 6
// ==========================

console.log(date.getDay());

// Output
// 5


// ==========================
// Get Hours
// ==========================

console.log(date.getHours());

// Output
// 11


// ==========================
// Get Minutes
// ==========================

console.log(date.getMinutes());

// Output
// 30


// ==========================
// Get Seconds
// ==========================

console.log(date.getSeconds());

// Output
// 45


// ==========================
// Get Milliseconds
// ==========================

console.log(date.getMilliseconds());

// Output
// Example
// 350


// ==========================
// Get Timestamp
// ==========================

console.log(date.getTime());

// Output
// Example
// 1786089645350


// ==========================
// Create Custom Date
// ==========================

let birthday = new Date("2004-05-15");

console.log(birthday);

// Output
// Sat May 15 2004


// ==========================
// Create Date using Numbers
// Month starts from 0
// ==========================

let customDate = new Date(2026, 7, 15);

console.log(customDate);

// Output
// Sat Aug 15 2026


// ==========================
// Create Date with Time
// ==========================

let meeting = new Date(2026, 7, 15, 10, 30, 0);

console.log(meeting);

// Output
// Sat Aug 15 2026 10:30:00


// ==========================
// Compare Dates
// ==========================

let d1 = new Date("2026-08-01");
let d2 = new Date("2026-08-10");

console.log(d2 > d1);

// Output
// true


// ==========================
// Current Timestamp
// ==========================

console.log(Date.now());

// Output
// Example
// 1786089645350