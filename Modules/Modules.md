JavaScript Modules – Interview Notes

📌 What are Modules?

JavaScript Modules allow us to divide a large application into small, reusable and maintainable files.

Example:

user.js
product.js
auth.js
server.js

A module can export variables, functions, objects or classes, and another file can import them.

Interview Definition

A module is a JavaScript file containing reusable code that can export values and import values from other modules.

1. Why Do We Use Modules?

Modules are used for:

Code organization

Code reusability

Maintainability

Encapsulation

Avoiding global namespace pollution

Managing dependencies

Dividing large applications into smaller files

2. Export

If we want to use something from one file in another file, we can export it.

// math.js

export const add = (a, b) => {
    return a + b;
};

Here add is available for other modules to import.

3. Named Export ⭐⭐⭐⭐⭐

Named exports allow us to export multiple values from one module.

// math.js

export const add = (a, b) => {
    return a + b;
};

export const subtract = (a, b) => {
    return a - b;
};

Import:

// app.js

import { add, subtract } from "./math.js";

console.log(add(10, 5));
console.log(subtract(10, 5));

Output:

15
5

4. Export at the Bottom

We can also export values at the end of the file.

// math.js

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

export { add, subtract };

Import:

import { add, subtract } from "./math.js";

5. Default Export ⭐⭐⭐⭐⭐

A module can have one default export.

// user.js

const user = {
    name: "Ritesh",
    age: 22
};

export default user;

Import:

// app.js

import user from "./user.js";

console.log(user);

Output:

{
    name: "Ritesh",
    age: 22
}

6. Default Export Function

// greet.js

export default function greet(name) {
    return `Hello ${name}`;
}

Import:

import greet from "./greet.js";

console.log(greet("Ritesh"));

Output:

Hello Ritesh

7. Default Import Can Be Renamed

Default import ko same name se import karna compulsory nahi hai.

// user.js

const user = {
    name: "Ritesh"
};

export default user;

Import:

import person from "./user.js";

console.log(person.name);

Output:

Ritesh

8. Named vs Default Export ⭐⭐⭐⭐⭐

Named Export

export const add = (a, b) => a + b;

Import:

import { add } from "./math.js";

Default Export

export default add;

Import:

import add from "./math.js";

Easy Trick

Named   → { }
Default → no { }

9. Multiple Named Exports

// math.js

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

Import:

import {
    add,
    subtract,
    multiply
} from "./math.js";

10. Import Everything Using *

We can import all named exports as one namespace object.

import * as math from "./math.js";

Use:

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));

11. Rename a Named Import

Use as to rename a named import.

// math.js

export const add = (a, b) => a + b;

Import:

import { add as sum } from "./math.js";

console.log(sum(10, 20));

Output:

30

12. Rename a Named Export

const add = (a, b) => a + b;

export {
    add as sum
};

Import:

import { sum } from "./math.js";

13. Re-exporting

A module can export something that it imports from another module.

export { add } from "./math.js";

This is called re-exporting.

It is useful for creating a central entry point for multiple modules.

14. Modules Have Their Own Scope ⭐⭐⭐⭐⭐

Variables inside a module are not automatically global.

// math.js

const secret = 123;

export const add = (a, b) => a + b;

Another file cannot directly access secret.

If it needs to be used elsewhere:

export const secret = 123;

Then import it:

import { secret } from "./math.js";

15. Browser ES Modules

In HTML, use:

<script type="module" src="app.js"></script>

Then in app.js:

import { add } from "./math.js";

console.log(add(2, 3));

Output:

5

16. Why type="module"?

The browser needs to know that the JavaScript file should be treated as an ES Module.

<script type="module" src="app.js"></script>

This enables module features such as:

import
export

17. ES Modules (ESM) ⭐⭐⭐⭐⭐

Modern JavaScript uses ES Modules with:

import
export

Example:

// user.js

export const name = "Ritesh";

Import:

import { name } from "./user.js";

18. CommonJS ⭐⭐⭐⭐⭐

CommonJS is a traditional module system widely associated with Node.js.

It uses:

require()

and:

module.exports

Example:

// math.js

const add = (a, b) => a + b;

module.exports = add;

Import:

const add = require("./math");

19. ES Modules vs CommonJS ⭐⭐⭐⭐⭐

Feature

ES Modules

CommonJS

Export

export

module.exports

Import

import

require()

Example

import x from "./x.js"

const x = require("./x")

Common usage

Modern JS / frontend / Node.js

Traditional Node.js

Easy Revision

ESM
import + export

CommonJS
require + module.exports

20. Node.js ES Modules

In Node.js, a project can be configured for ESM using package.json:

{
    "type": "module"
}

Then we can use:

import express from "express";

and:

export default app;

21. MERN Backend Example ⭐⭐⭐⭐⭐

config/db.js

import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
};

export default connectDB;

server.js

import express from "express";
import connectDB from "./config/db.js";

const app = express();

connectDB();

app.listen(5000, () => {
    console.log("Server running");
});

Flow:

db.js
  ↓
export default connectDB
  ↓
server.js
  ↓
import connectDB

22. MERN Controller Example

userController.js

export const getUsers = async (req, res) => {
    res.json({
        message: "Users fetched"
    });
};

userRoutes.js

import express from "express";
import { getUsers } from "./userController.js";

const router = express.Router();

router.get("/users", getUsers);

export default router;

server.js

import userRoutes from "./userRoutes.js";

app.use("/api", userRoutes);

This is a common modular structure in Express/MERN applications.

23. MERN Project Structure

backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
└── server.js

Each file has a specific responsibility.

24. Default + Named Export Together

A module can have one default export and multiple named exports.

// user.js

const user = {
    name: "Ritesh"
};

export default user;

export const age = 22;

Import:

import user, { age } from "./user.js";

console.log(user);
console.log(age);

25. Can We Have Multiple Default Exports?

No.

❌ Wrong:

export default user;
export default product;

A module can have only one default export.

✅ Correct:

export default user;

export const product = {};

26. Can We Have Multiple Named Exports?

Yes.

export const add = () => {};

export const subtract = () => {};

export const multiply = () => {};

Multiple named exports are allowed.

27. Import Only What You Need

Suppose:

// math.js

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

If you only need add:

import { add } from "./math.js";

This keeps dependencies clear.

28. Common Mistakes

Mistake 1: Named Export with Default Import

Export:

export const add = () => {};

❌ Wrong:

import add from "./math.js";

✅ Correct:

import { add } from "./math.js";

Mistake 2: Default Export with Named Import

Export:

export default add;

❌ Wrong:

import { add } from "./math.js";

✅ Correct:

import add from "./math.js";

Mistake 3: Wrong File Path

import { add } from "./math.js";

Make sure the relative path points to the correct file.

Mistake 4: Mixing Module Systems

ESM:

import
export

CommonJS:

require
module.exports

Project configuration ke according consistent module system use karna important hai.

29. Interview Output Question

math.js

export const add = (a, b) => a + b;

app.js

import { add } from "./math.js";

console.log(add(2, 3));

Answer

5

30. Interview Output Question

user.js

const user = {
    name: "Ritesh"
};

export default user;

app.js

import person from "./user.js";

console.log(person.name);

Answer

Ritesh

31. Important Interview Questions

Basic

What is a JavaScript module?

Why do we use modules?

What is import?

What is export?

What is a named export?

What is a default export?

Important

Difference between named and default export?

Can a module have multiple named exports?

Can a module have multiple default exports?

Can default and named exports be used together?

How do you rename a named import?

What does import * as do?

What is re-exporting?

Why do modules have their own scope?

What is type="module"?

Node.js / MERN

What is CommonJS?

Difference between ESM and CommonJS?

What is module.exports?

What is require()?

How do you enable ES Modules in Node.js?

How are modules used in an Express backend?

Why do we separate routes, controllers and models?

How do you export a controller?

How do you import a MongoDB connection function?

32. Interview-Ready Answers

Q1. What are Modules?

JavaScript modules are separate files containing reusable code. They allow us to export functionality from one file and import it into another file.

Q2. What is Named Export?

A named export allows us to export multiple values from a module. During import, we normally use the exported name inside curly braces.

Example:

export const add = () => {};

import { add } from "./math.js";

Q3. What is Default Export?

A default export is the main exported value of a module. A module can have only one default export, and the importer can choose its local name.

Example:

export default user;

import person from "./user.js";

Q4. Difference Between Named and Default Export?

Named exports use curly braces during import and a module can have multiple named exports. A default export does not use curly braces during import and a module can have only one default export.

Q5. What is CommonJS?

CommonJS is a module system traditionally used in Node.js. It uses require() to import modules and module.exports to export them.

Q6. What is ESM?

ES Modules are the standard JavaScript module system using import and export.

Q7. ESM vs CommonJS?

ES Modules use import and export, while CommonJS uses require() and module.exports. ESM is widely used in modern JavaScript applications.

33. Benefits of Modules

1. Reusability

Code can be reused in multiple files.

2. Maintainability

Large applications can be divided into smaller files.

3. Encapsulation

Internal module variables are not automatically global.

4. Organization

Different responsibilities can be separated.

5. Dependency Management

Imports clearly show what a file depends on.

34. Quick Revision

Named Export

export const add = () => {};

Import:

import { add } from "./math.js";

Default Export

export default add;

Import:

import add from "./math.js";

Rename Named Import

import { add as sum } from "./math.js";

Import Everything

import * as math from "./math.js";

CommonJS Export

module.exports = add;

CommonJS Import

const add = require("./math");

Node.js ESM

{
    "type": "module"
}

⭐ One-Line Interview Revision

Modules help us split JavaScript code into reusable files using import and export.

Most Important

Named Export
    ↓
export { add }
    ↓
import { add }

Default Export
    ↓
export default add
    ↓
import add

CommonJS
    ↓
module.exports
    ↓
require()

MERN
    ↓
Routes
Controllers
Models
Middleware
Config
    ↓
Separate Modules