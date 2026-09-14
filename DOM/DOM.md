## 29. DOM (Document Object Model)

### What is DOM?

DOM stands for **Document Object Model**.

When the browser loads an HTML page, it converts the HTML into a **tree-like structure** called the DOM.

JavaScript uses the DOM to interact with HTML.

For example, JavaScript can:

- Select an HTML element
- Change text
- Change CSS
- Handle button clicks
- Create new elements
- Remove elements

---

### Example 1: Select Element

```html
<!DOCTYPE html>
<html>
<body>

<h1 id="title">Hello</h1>

<script>
  const heading = document.getElementById("title");

  console.log(heading);
</script>

</body>
</html>