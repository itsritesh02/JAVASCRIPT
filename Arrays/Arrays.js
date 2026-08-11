// ======================= Array =======================

// Array multiple values ko ek variable me store karta hai
const myArr = [0, 1, 2, 3, 4, 5];

// String values ka array
const myHeors = ["shaktiman", "naagraj"];

// Array constructor se array create karna
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]);
// Index 1 ki value print karega
// Output: 1

// ======================= Array Methods =======================

// Array ke end me value add karta hai
myArr.push(6);

// Ek aur value end me add karega
myArr.push(7);

// Last value remove karta hai
myArr.pop();

// Array ke start me value add karta hai
myArr.unshift(9);

// Array ki first value remove karta hai
myArr.shift();

// Check karta hai value array me hai ya nahi
console.log(myArr.includes(9));
// Output: false

// Kisi value ka index return karta hai
console.log(myArr.indexOf(3));
// Output: 3

// Array ko String me convert karta hai
const newArr = myArr.join();

console.log(myArr);
// Output: [0, 1, 2, 3, 4, 5, 6]

console.log(newArr);
// Output: "0,1,2,3,4,5,6"

// ======================= Slice vs Splice =======================

console.log("A", myArr);
// Original Array
// Output: A [0,1,2,3,4,5,6]

// slice(start, end)
// End index include nahi hota
// Original array change nahi hota

const myn1 = myArr.slice(1, 3);

console.log(myn1);
// Output: [1,2]

console.log("B", myArr);
// Original array same rahega
// Output: B [0,1,2,3,4,5,6]

// splice(start, deleteCount)
// Original array se elements remove karta hai
const myn2 = myArr.splice(1, 3);

console.log("C", myArr);
// 1,2,3 remove ho gaye
// Output: C [0,4,5,6]

console.log(myn2);
// Removed elements return karega
// Output: [1,2,3]

console.log("**************************************************");

// ===================================
// push()
// Adds an element at the end
// ===================================

let fruits = ["Apple", "Banana"];

// Add "Mango" at the end
fruits.push("Mango");

console.log(fruits);
// Output: ["Apple", "Banana", "Mango"]

// ===================================
// pop()
// Removes the last element
// ===================================

let fruits2 = ["Apple", "Banana", "Mango"];

// Remove last element
fruits2.pop();

console.log(fruits2);
// Output: ["Apple", "Banana"]

// ===================================
// shift()
// Removes the first element
// ===================================

let fruits3 = ["Apple", "Banana", "Mango"];

// Remove first element
fruits3.shift();

console.log(fruits3);
// Output: ["Banana", "Mango"]

// ===================================
// unshift()
// Adds an element at the beginning
// ===================================

let fruits4 = ["Banana", "Mango"];

// Add "Apple" at the beginning
fruits4.unshift("Apple");

console.log(fruits4);
// Output: ["Apple", "Banana", "Mango"]

// ===================================
// includes()
// Checks if an element exists
// ===================================

let fruits5 = ["Apple", "Banana", "Mango"];

console.log(fruits5.includes("Banana"));
// Output: true

// ===================================
// indexOf()
// Returns index of an element
// ===================================

let fruits6 = ["Apple", "Banana", "Mango"];

console.log(fruits6.indexOf("Banana"));
// Output: 1

// ===================================
// slice()
// Returns a portion of array
// Original array remains unchanged
// ===================================

let fruits7 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits7.slice(1, 3));
// Output: ["Banana", "Mango"]

// ===================================
// splice()
// Removes elements from original array
// ===================================

let fruits8 = ["Apple", "Banana", "Mango"];

// Remove 1 element from index 1
fruits8.splice(1, 1);

console.log(fruits8);
// Output: ["Apple", "Mango"]

// ===================================
// join()
// Converts array into string
// ===================================

let fruits9 = ["Apple", "Banana", "Mango"];

console.log(fruits9.join(", "));
// Output: Apple, Banana, Mango

// ===================================
// reverse()
// Reverses the array
// ===================================

let numbers = [1, 2, 3, 4];

console.log(numbers.reverse());
// Output: [4, 3, 2, 1]
