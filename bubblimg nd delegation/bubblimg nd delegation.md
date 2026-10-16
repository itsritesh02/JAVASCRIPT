
# Event Bubbling and Event Delegation in JavaScript

## 1. What is Event Bubbling?

Event bubbling means when an event happens on a child element, the event also propagates to its parent elements.

### Example

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Button clicked");
  });
</script>
```

**Output when you click the button:**

```text
Button clicked
Parent clicked
```

**Why?**

1. You click the button.
2. The button's click handler runs.
3. The event bubbles up to the parent div.
4. The parent's click handler runs.

**Remember:** Event bubbling = Child to Parent.

---

## 2. What is Event Delegation?

Event delegation means adding one event listener to a parent element to handle events from its child elements.

It works because of event bubbling.

### Example

```html
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

<script>
  document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(event.target.textContent);
    }
  });
</script>
```

**Output when you click Banana:**

```text
Banana
```

**Why?**

1. You click an `li` element.
2. The click event bubbles up to the `ul`.
3. The parent listener checks which child was clicked.
4. It prints the clicked item's text.

**Remember:** Event delegation = One parent listener handles child events.

---

## 3. Main Difference

| Event Bubbling | Event Delegation |
|---|---|
| An event propagates from child to parent. | A parent listener handles events from children. |
| It is a JavaScript event mechanism. | It is a technique that uses event bubbling. |
| Happens naturally for many events, such as clicks. | Must be implemented by adding a listener to the parent. |
| Example: Button click reaches the parent. | Example: One list listener handles all list items. |

## 4. Interview Answer

**Event bubbling:** Event bubbling is a process in which an event propagates from the target element to its parent elements.

**Event delegation:** Event delegation is a technique in which we attach a single event listener to a parent element to handle events from its child elements. It reduces the need for multiple event listeners.

