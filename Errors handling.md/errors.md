
# Error Handling Using try...catch in JavaScript

## 1. What is try...catch?

`try...catch` is used to handle errors in JavaScript so that we can manage unexpected problems without crashing the program unnecessarily.

It has three parts:
- `try` – Contains code that may throw an error.
- `catch` – Handles the error if one occurs.
- `finally` – Executes whether an error occurs or not.

## 2. Simple Example

```javascript
try {
  console.log("Start");

  let result = userName;

  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Program continues");
```

### Output

```text
Start
Error: userName is not defined
Program continues
```

### Explanation

1. The `try` block starts executing.
2. `userName` is not defined, so JavaScript throws an error.
3. The `catch` block handles the error.
4. The program continues with the next statement.

## 3. Example Using finally

```javascript
try {
  console.log("Try block");
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finally block");
}
```

### Output

```text
Try block
Something went wrong
Finally block
```

The `finally` block runs whether an error occurs or not.

## 4. Handling Errors with async/await

In MERN development, we often use `try...catch` when calling APIs or working with a database.

```javascript
async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUsers();
```

### Explanation

- `try` contains the API request.
- `await` waits for the Promise result.
- `throw new Error()` throws an error if the HTTP response is unsuccessful.
- `catch` handles errors, including network failures.

## 5. Important Interview Points

- `try...catch` handles errors thrown during execution of the `try` block.
- `catch` receives an error object.
- `error.message` gives the error message.
- `finally` is optional.
- For asynchronous Promises, use `try...catch` with `async/await` or `.catch()`.

## 6. Short Interview Answer

We use `try...catch` for error handling in JavaScript. The `try` block contains code that may throw an error, and the `catch` block handles that error. The optional `finally` block executes whether an error occurs or not. It is commonly used with API calls and database operations in MERN applications.
