
let num = 100;

console.log(num.toString());
console.log(typeof num.toString());


let num2 = 99.456;

console.log(num2.toFixed(2)); ///Decimal ke baad kitne digits chahiye, wo batata hai.

console.log(Math.round(4.6));// nearest integer

console.log(Math.floor(4.9));//Hamesha neeche wali value leta hai.


console.log(Math.ceil(4.2)); //Hamesha upar wali value leta hai.

console.log(Math.abs(-15)); // make negative to positive


console.log(Math.max(10, 20, 30)); //Sabse badi value return karta hai.


console.log(Math.min(10, 20, 30)); //Sabse chhoti value return karta hai.

console.log(Math.pow(2, 3)); //Power nikalta hai.


console.log(Math.sqrt(25));//Square Root nikalta hai.

console.log(Math.random()); //Har baar 0 se 1 ke beech random decimal number deta hai.





console.log(Math.floor(Math.random() * 10) + 1);
// Math.random() generates a random decimal number between 0 and 1.


// Multiply by 10 to get a number between 0 and 10 (excluding 10).


// Math.floor() removes the decimal part and returns an integer between 0 and 9.


// Add 1 to shift the range from 1 to 10.







// const score = 400;
// // console.log(score);

// const balance = new Number(100);
// // console.log(balance);

// // console.log(balance.toString().length);
// // console.log(balance.toFixed(1));

// const otherNumber = 123.8966;

// // console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// // console.log(hundreds.toLocaleString('en-IN'));

// // +++++++++++++ Maths +++++++++++++++++++++++++++++

// // console.log(Math);
// // console.log(Math.abs(-4));
// // console.log(Math.round(4.6));
// // console.log(Math.ceil(4.2));
// // console.log(Math.floor(4.9));
// // console.log(Math.min(4, 3, 6, 8));
// // console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
