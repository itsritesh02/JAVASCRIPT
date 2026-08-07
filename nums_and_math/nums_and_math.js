
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









console.log("---------------Next-------------");



const score = 400;
console.log(score);
// Primitive number ko print karta hai
// Output: 400


const balance = new Number(100);
console.log(balance);
// Number Object create karta hai (primitive number nahi)
// Output: [Number: 100]

console.log(typeof balance);
// new Number() object banata hai
// Output: object


let strBalance = balance.toString();
// Number ko String me convert karta hai

console.log(strBalance);
// String print karega
// Output: "100"

console.log(typeof strBalance);
// Data type check karta hai
// Output: string


console.log(balance.toString().length);
// Number ko string bana kar uski length batata hai
// "100" me 3 characters hain
// Output: 3

console.log(balance.toFixed(1));
// Decimal ke baad 1 digit dikhata hai
// Output: "100.0"


const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));
// Total 4 significant digits rakhta hai
// Output: "123.9"

console.log(otherNumber.toPrecision(3));
// Total 3 significant digits rakhta hai
// Output: "124"

console.log(otherNumber.toPrecision(2));
// Total 2 significant digits rakhta hai
// Scientific notation me convert ho sakta hai
// Output: "1.2e+2"

console.log(otherNumber.toPrecision(6));
// Total 6 significant digits rakhta hai
// Output: "123.897"



console.log(otherNumber.toPrecision(4)); 
 //Rule:
//Agar next digit 5 ya usse badi ho → round up.
//Agar 5 se chhoti ho → same rakho.

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// Math object ko print karta hai (isme saare math methods hote hain)

console.log(Math.abs(-4));
// abs = Absolute Value
// Negative number ko positive bana deta hai
// Output: 4

console.log(Math.round(4.6));
// Nearest integer par round karta hai
// 4.6 → 5
// Output: 5

console.log(Math.ceil(4.2));
// Hamesha upar ki taraf round karta hai
// 4.2 → 5
// Output: 5

console.log(Math.floor(4.9));
// Hamesha niche ki taraf round karta hai
// 4.9 → 4
// Output: 4

console.log(Math.min(4, 3, 6, 8));
// Diye gaye numbers me sabse chhota number return karta hai
// Output: 3

console.log(Math.max(4, 3, 6, 8));
// Diye gaye numbers me sabse bada number return karta hai
// Output: 8


console.log(Math.random());
// 0 (inclusive) se 1 (exclusive) ke beech random decimal number deta hai
// Example Output: 0.573829

console.log(Math.random() * 10 + 1);
// 1 se 11 ke beech random decimal number deta hai
// Example Output: 7.284

console.log(Math.floor(Math.random() * 10) + 1);
// 1 se 10 ke beech random integer deta hai
// Example Output: 6


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// min aur max ke beech random integer generate karta hai
// Yahan 10 se 20 ke beech koi bhi number milega
// Example Output: 13, 17, 20, 10




// Math.random() -> 0 se 1 ke beech random decimal number deta hai
// Example: 0.42

// Math.random() * 10 -> 0 se 9.999... ke beech number banata hai
// Example: 0.42 * 10 = 4.2

// Math.floor() -> Decimal hata kar integer banata hai
// Example: Math.floor(4.2) = 4

// +1 -> Range ko 1 se 10 kar deta hai
// Example: 4 + 1 = 5

console.log(Math.floor(Math.random() * 10) + 1);
// Final Output: 1 se 10 ke beech random integer
// Example Output: 3, 7, 10, 1