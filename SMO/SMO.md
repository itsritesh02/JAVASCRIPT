
# Difference Between Set, Map, and Object in JavaScript

## 1. Set

A Set stores only unique values. If a value is repeated, it is stored only once.

Example:

```javascript
const numbers = new Set([10, 20, 10, 30]);

console.log(numbers);
```

Output:
```text
Set(3) {10, 20, 30}
```

Here, `10` appears twice, but Set stores it only once.

**Use:** When you want to remove duplicate values.

## 2. Map

A Map stores data in key-value pairs. Its keys can be strings, numbers, objects, or other data types.

Example:

```javascript
const user = new Map();

user.set("name", "Ritesh");
user.set("age", 22);

console.log(user.get("name"));
console.log(user.get("age"));
```

Output:
```text
Ritesh
22
```

Here:
- `"name"` is a key and `"Ritesh"` is its value.
- `"age"` is a key and `22` is its value.

**Use:** When you need key-value pairs and flexible key types.

## 3. Object

An Object also stores data in key-value pairs. It is commonly used to represent a user, product, or other entity.

Example:

```javascript
const user = {
  name: "Ritesh",
  age: 22
};

console.log(user.name);
console.log(user.age);
```

Output:
```text
Ritesh
22
```

Here, `name` and `age` are properties of the user object.

**Use:** When you want to store related information about something.

## 4. Main Difference

| Feature | Set | Map | Object |
|---|---|---|---|
| Stores | Unique values | Key-value pairs | Key-value pairs |
| Duplicate values | Removed | Allowed | Allowed |
| Keys | No keys | Any data type | Strings or Symbols |
| Example | Unique numbers | Lookup data | User details |

## 5. Easy Way to Remember

- **Set:** Stores unique values.
- **Map:** Stores key-value pairs with keys of any data type.
- **Object:** Stores properties describing an entity.

## Interview Answer

Set stores unique values, Map stores key-value pairs with keys of any data type, and Object stores properties using string or symbol keys. We commonly use Set to remove duplicates, Map for flexible key-value storage, and Object to represent entities such as users or products.
