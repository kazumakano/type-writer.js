# type-writer.js
This is React hook to show text like type writer.
You can access demo site by clicking [here](kazumakano.github.io/type-writer.js/).

## Usage
You can use this hook in your code as following:
```js
const tw = useTypeWriter(text: string, cursor?: "|" | "_" | " ", cursorInterval?: number, charInterval?: number, lineInterval?: number, delay?: number)
```
Function `useTypeWriter()` returns string state that automatically changes over time.
You need to present it in monospace type by enclosing it with tag such as `<pre>` or `<samp>`.
```jsx
<pre>{tw}</pre>
```
