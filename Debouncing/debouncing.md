
# Debouncing vs Throttling in JavaScript

Debouncing and throttling are techniques used to control how frequently a function executes when an event happens repeatedly.

Examples of such events:
- Typing in a search box
- Scrolling a page
- Resizing a window
- Clicking repeatedly


## 1. What is Debouncing?

Debouncing means a function executes only after the user stops triggering an event for a specified amount of time.

### Real-Life Example: Search Box

Suppose you type "Ritesh" in a search box.

You type:
- R
- Ri
- Rit
- Rite
- Rites
- Ritesh

If the delay is 500 milliseconds, the search function waits until you stop typing for 500 milliseconds.

Then it calls the API only once.

### Code Example

```javascript
let timer;

function searchData() {
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log("API Called");
  }, 500);
}

searchData();
```

### Remember

**Debouncing = Wait until the user stops.**

Common use: Search input and autocomplete.

---

## 2. What is Throttling?

Throttling means a function can execute at most once during a specified time interval.

### Real-Life Example: Scrolling

Suppose you continuously scroll a webpage.

A scroll event may occur many times per second.

If the throttle interval is 500 milliseconds, the function executes at most once every 500 milliseconds while scrolling continues.

### Code Example

```javascript
function throttle(callback, delay) {
  let lastTime = 0;

  return function () {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      callback();
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scroll Event");
}, 500);

window.addEventListener("scroll", handleScroll);
```

### Remember

**Throttling = Execute at controlled time intervals.**

Common use: Scroll events and mouse movement.

---

## 3. Main Difference

| Debouncing | Throttling |
|---|---|
| Waits until events stop for a specified time. | Limits execution to once per interval. |
| Executes after a pause. | Can execute while events continue. |
| Example: Search box. | Example: Scrolling webpage. |
| Avoids unnecessary calls while typing. | Controls frequent event executions. |

---

## 4. Interview Answer

Debouncing delays function execution until the user stops triggering an event for a specified time. It is commonly used in search boxes.

Throttling limits function execution to at most once during a specified time interval. It is commonly used in scroll events.

Both techniques improve performance by reducing unnecessary function executions.
