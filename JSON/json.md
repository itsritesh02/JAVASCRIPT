
# Difference Between JSON.parse() and JSON.stringify()

## 1. JSON.stringify()

- Converts a JavaScript object into a JSON string.
- Useful for storing or sending data.

Example:

```javascript
const user = {
  name: "Ritesh",
  age: 22
};

const result = JSON.stringify(user);

console.log(result);
```

Output:
```json
{"name":"Ritesh","age":22}
```

## 2. JSON.parse()

- Converts a JSON string into a JavaScript object.
- Useful for reading and using JSON data.

Example:

```javascript
const data = '{"name":"Ritesh","age":22}';

const result = JSON.parse(data);

console.log(result.name);
```

Output:
```text
Ritesh
```

## Main Difference

| JSON.stringify() | JSON.parse() |
|---|---|
| Object → String | String → Object |
| Converts an object into a JSON string. | Converts a JSON string into an object. |
| Used to store or send data. | Used to read or use data. |

## Interview Answer

JSON.stringify() converts a JavaScript object into a JSON string, whereas JSON.parse() converts a JSON string into a JavaScript object.

**Remember:**
- stringify = Object to String
- parse = String to Object
