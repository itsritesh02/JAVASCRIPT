
# useMemo vs useCallback in React

## 1. What is useMemo?

`useMemo` is a React Hook that remembers the result of a calculation and recalculates it when its dependencies change.

### Example

```jsx
import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(2);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h3>Result: {result}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count: {count}
      </button>
    </div>
  );
}

export default App;
```

### How does it work?

- Initially, `number = 2`, so `result = 4`.
- When you click **Change Number**, the result is recalculated.
- When you click **Increase Count**, the result is reused because `number` has not changed.

**Use `useMemo` when you want to avoid repeating an expensive calculation unnecessarily.**

---

## 2. What is useCallback?

`useCallback` is a React Hook that remembers a function between renders until its dependencies change.

### Example

```jsx
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const greet = useCallback(() => {
    console.log("Hello Ritesh");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={greet}>
        Greet
      </button>
    </div>
  );
}

export default App;
```

### How does it work?

- `greet` is created on the initial render.
- When `count` changes, the component renders again.
- Because the dependencies are empty, React reuses the same `greet` function.

**Use `useCallback` when keeping the same function reference helps avoid unnecessary work, especially with memoized child components.**

---

## 3. Main Difference

| useMemo | useCallback |
|---|---|
| Remembers a calculated value. | Remembers a function. |
| Returns the calculation result. | Returns the function itself. |
| Example: `useMemo(() => number * 2, [number])` | Example: `useCallback(() => greet(), [])` |

## 4. Easy Way to Remember

### useMemo
```javascript
const result = useMemo(() => number * 2, [number]);
```
It remembers the **result** of `number * 2`.

### useCallback
```javascript
const greet = useCallback(() => {
  console.log("Hello");
}, []);
```
It remembers the **function** `greet`.

## 5. Interview Answer

`useMemo` and `useCallback` are React Hooks used for performance optimization.

`useMemo` caches the result of a calculation, whereas `useCallback` caches a function reference. Both update their cached result or function when their dependencies change.

**Remember:**
- `useMemo` = Value
- `useCallback` = Function
