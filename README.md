# react-innertext
Returns the innerText of a React JSX object, similar to the innerText property of DOM elements.

# Example

## CommonJS
```JS
const innerText = require('react-innertext');
innerText(<div>Hello <strong>world</strong>!</div>) === 'Hello world!'
```

## ES6
```JS
import innerText from 'react-innertext';
innerText(<div>Hello <strong>world</strong>!</div>) === 'Hello world!'
```
