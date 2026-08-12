# JavaScript Destructuring – Notes

## What is Destructuring?

**Destructuring** JavaScript ka ek feature hai jiske through hum
**array ya object ke values/properties ko easily variables me extract** kar sakte hain.

Simple words:

> Destructuring ka use array ya object se values nikal kar variables me store karne ke liye hota hai.

---

# 1. Array Destructuring

### Normal Way

```javascript
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log(first);
console.log(second);
console.log(third);