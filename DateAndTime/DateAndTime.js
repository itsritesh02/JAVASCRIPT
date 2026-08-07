// Current Date & Time
let date = new Date();

console.log(date);

// Current Date
console.log(date.toDateString());

// Current Time
console.log(date.toTimeString());

// Local Date & Time
console.log(date.toLocaleString());

// Year
console.log(date.getFullYear());

// Month (0-11)
console.log(date.getMonth());

// Date
console.log(date.getDate());

// Day (0-6)
console.log(date.getDay());

// Hours
console.log(date.getHours());

// Minutes
console.log(date.getMinutes());

// Seconds
console.log(date.getSeconds());

// Custom Date
let birthday = new Date("2004-05-15");

console.log(birthday);


console.log("//*****************//**************");

// Dates

// Current Date & Time create karta hai
let myDate = new Date();

console.log(myDate.toString());
// Date aur Time ko readable format me print karta hai
// Example: Fri Aug 07 2026 11:30:25 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
// Sirf Date print karta hai
// Example: Fri Aug 07 2026

console.log(myDate.toLocaleString());
// Local format me Date aur Time print karta hai
// Example: 7/8/2026, 11:30:25 am

console.log(typeof myDate);
// Date object ka type batata hai
// Output: object


// Year, Month (0 = Jan), Day
let myCreatedDate = new Date(2023, 0, 23);

console.log(myCreatedDate.toLocaleString());
// Output: 23/1/2023, 12:00:00 am


// Year, Month, Day, Hour, Minute
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
// 23 Jan 2023, 5:03 AM


// YYYY-MM-DD format
let myCreatedDate3 = new Date("2023-01-14");
// 14 Jan 2023


// MM-DD-YYYY format
let myCreatedDate4 = new Date("01-14-2023");
// 14 Jan 2023


// Current Timestamp (milliseconds since 1 Jan 1970)
let myTimeStamp = Date.now();
 
console.log(myTimeStamp);
// Example: 1786072823456

// console.log(myCreatedDate.getTime());
// myCreatedDate ka timestamp (milliseconds) return karta hai

console.log(Math.floor(Date.now() / 1000));
// Current timestamp ko seconds me convert karta hai
// Math.floor decimal hata deta hai


// Current Date Object
let newDate = new Date();

console.log(newDate);
// Current Date Object print karta hai

console.log(newDate.getMonth() + 1);
// Month return karta hai
// 0 = January, isliye +1 kiya jata hai
// Example: August = 8

console.log(newDate.getDay());
// Week ka day return karta hai
// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday


`${newDate.getDay()} and the time`;
// Template Literal
// Example Output: "5 and the time"


newDate.toLocaleString("default", {
  weekday: "long",
});
// Weekday ka full naam return karta hai
// Example: Friday