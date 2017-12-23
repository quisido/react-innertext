# jsx-inner-text
Returns the innerText of a React JSX object, similar to the innerText property of DOM elements.

# Example

## CommonJS
```JS
const innerText = require('jsx-inner-text');
innerText(<div>Hello <strong>world</strong>!</div>) === 'Hello world!'
```

## ES6
```JS
import innerText from 'jsx-inner-text';
innerText(<div>Hello <strong>world</strong>!</div>) === 'Hello world!'
```
