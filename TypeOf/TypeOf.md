# JavaScript `typeof` — All Types

`typeof` is used to check the data type of a value.

## All `typeof` Results

| Value | `typeof` Result |
|---|---|
| `"Ritesh"` | `"string"` |
| `25` | `"number"` |
| `25.5` | `"number"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` |
| `{}` | `"object"` |
| `[]` | `"object"` |
| `function(){}` | `"function"` |
| `10n` | `"bigint"` |
| `Symbol()` | `"symbol"` |

---

## Example

```js
console.log(typeof "Ritesh");
console.log(typeof 25);
console.log(typeof 25.5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof 10n);
console.log(typeof Symbol());