
# Shallow Copy vs Deep Copy in JavaScript

## 1. Interview Question
What is the difference between shallow copy and deep copy in JavaScript?

## 2. Interview Answer
A **shallow copy** copies the top-level properties of an object, but nested objects are still shared by reference.

A **deep copy** creates a completely independent copy, including nested objects.

## 3. Shallow Copy

### Example

```javascript
const user1 = {
  name: "Ritesh",
  address: {
    city: "Mohali"
  }
};

const user2 = { ...user1 };

user2.name = "Aman";
user2.address.city = "Chandigarh";

console.log(user1.name);          // Ritesh
console.log(user1.address.city);  // Chandigarh
```

### Explanation
- `{ ...user1 }` creates a shallow copy.
- Changing `user2.name` does not affect `user1.name`.
- But `user2.address` and `user1.address` refer to the same nested object.
- Therefore, changing the nested city also changes it in `user1`.

## 4. Deep Copy

### Example

```javascript
const user1 = {
  name: "Ritesh",
  address: {
    city: "Mohali"
  }
};

const user2 = structuredClone(user1);

user2.name = "Aman";
user2.address.city = "Chandigarh";

console.log(user1.name);         // Ritesh
console.log(user1.address.city); // Mohali
```

### Explanation
- `structuredClone()` creates an independent copy of supported data.
- Changes to the copied object do not affect the original object, including its nested objects.

## 5. Main Differences

| Shallow Copy | Deep Copy |
|---|---|
| Copies top-level properties | Copies nested objects and arrays too |
| Nested objects remain shared | Nested objects are independent |
| Usually faster and simpler | Can require more processing |
| Example: `{ ...obj }` | Example: `structuredClone(obj)` |

## 6. Other Ways to Copy

### Shallow Copy

```javascript
const copy1 = { ...original };
const copy2 = Object.assign({}, original);
```

### Deep Copy

```javascript
const copy = structuredClone(original);
```

Note: `JSON.parse(JSON.stringify(original))` can copy some nested data, but it does not preserve all JavaScript data types and cannot handle circular references.

## 7. Short Interview Answer

A shallow copy copies only the top-level properties, so nested objects can still share references with the original object. A deep copy creates independent copies of nested objects as well. In JavaScript, we can use the spread operator for a shallow copy and `structuredClone()` for a deep copy of supported data.
