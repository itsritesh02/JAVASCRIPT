const name1 = "Ritesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name1} and my repo count is ${repoCount}`);

const gameName = new String("Ritesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Ritesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Hitesh.com/Hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

//---------------------------------------------//

let name = "Ritesh Kumar";

console.log(name);
console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name.trim());

console.log(name.includes("Kumar"));

console.log(name.startsWith("R"));

console.log(name.endsWith("Kumar"));

console.log(name.indexOf("K"));

console.log(name.slice(0, 6));

console.log(name.replace("Kumar", "Marandi"));

console.log(name.split(" ")); //Convert to Array

let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);

let str = "Ritesh";

console.log(str.length);

let str1 = "JavaScript";

console.log(str1.charAt(0));


let str2 = "I Love JavaScript";
console.log(str2.split(" ").length); //string ko space ke basis par tod deta hai aur array bana deta hai.