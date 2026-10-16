
# JavaScript Modules: import and export

## What are JavaScript Modules?

JavaScript modules allow us to write code in separate files and use that code in other files.

## 1. Export

`export` is used to share a function or variable with another file.

**math.js**
```javascript
export const add = (a, b) => {
  return a + b;
};
```

## 2. Import

`import` is used to use the exported function or variable in another file.

**app.js**
```javascript
import { add } from "./math.js";

console.log(add(10, 20));
```

Output:
```text
30
```

## 3. Default Export

We can also use `export default` to export one main value from a file.

**greet.js**
```javascript
function greet() {
  console.log("Hello Ritesh");
}

export default greet;
```

**app.js**
```javascript
import greet from "./greet.js";

greet();
```

Output:
```text
Hello Ritesh
```

## Difference Between import and export

| export | import |
|---|---|
| Shares code from a file. | Uses code from another file. |
| Makes functions or variables available. | Accesses exported functions or variables. |

## Interview Answer

JavaScript modules help us organize code into separate files.

`export` is used to share code, and `import` is used to access that code in another file.

**Remember:**
- Export = Send
- Import = Receive
