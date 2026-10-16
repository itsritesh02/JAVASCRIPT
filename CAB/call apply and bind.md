
# Difference Between call(), apply(), and bind() in JavaScript

## 1. Interview Question
What is the difference between call(), apply(), and bind() in JavaScript?

## 2. Interview Answer
`call()`, `apply()`, and `bind()` are JavaScript methods used to control the value of `this` inside a function.

The main difference is how they pass arguments and execute the function.

- **call():** Calls the function immediately and passes arguments individually.
- **apply():** Calls the function immediately and passes arguments as an array.
- **bind():** Returns a new function that can be called later.

## 3. Example

```javascript
const user = {
  name: "Ritesh"
};

function greet(city, country) {
  console.log(
    `Hello, I am ${this.name} from ${city}, ${country}`
  );
}
```

Here, `this.name` gets its value from the object we pass to `call()`, `apply()`, or `bind()`.

## 4. call()

The `call()` method calls a function immediately and passes arguments one by one.

### Example

```javascript
greet.call(user, "Mohali", "India");
```

### Output

```text
Hello, I am Ritesh from Mohali, India
```

### Explanation
- `user` sets `this` to the `user` object.
- `"Mohali"` is the first argument.
- `"India"` is the second argument.
- The function executes immediately.

## 5. apply()

The `apply()` method calls a function immediately but passes arguments inside an array.

### Example

```javascript
greet.apply(user, ["Mohali", "India"]);
```

### Output

```text
Hello, I am Ritesh from Mohali, India
```

### Explanation
- `user` sets `this` to the `user` object.
- `["Mohali", "India"]` contains the function arguments.
- The function executes immediately.

## 6. bind()

The `bind()` method returns a new function with `this` set to the specified object. It does not execute the function immediately.

### Example

```javascript
const newGreet = greet.bind(user, "Mohali", "India");

newGreet();
```

### Output

```text
Hello, I am Ritesh from Mohali, India
```

### Explanation
- `bind()` creates a new function.
- `this` is set to the `user` object.
- We execute the function later by calling `newGreet()`.

## 7. Main Differences

| Feature | call() | apply() | bind() |
|---|---|---|---|
| Executes immediately | Yes | Yes | No |
| Sets `this` | Yes | Yes | Yes |
| Passes arguments | Individually | As an array | Individually, or later |
| Returns | Function result | Function result | New function |

## 8. Easy Trick to Remember

- `call()` → Comma-separated arguments.
- `apply()` → Arguments in an array.
- `bind()` → Creates a function for later.

## 9. Short Interview Answer

`call()`, `apply()`, and `bind()` are used to control the value of `this` in a function. `call()` executes the function immediately with individual arguments, `apply()` executes it immediately with arguments in an array, and `bind()` returns a new function that can be executed later.
