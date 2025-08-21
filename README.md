# React innerText

[![version](https://img.shields.io/npm/v/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)
[![downloads](https://img.shields.io/npm/dt/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)

Returns the innerText of a React JSX object, similar to the innerText property
of DOM elements.

## Install

* `npm install react-innertext --save` or
* `yarn add react-innertext`

## Use

### ECMAScript, TypeScript

```jsx
import innerText from 'react-innertext';
innerText(
  <div>
    Hello <strong>world</strong>!
    I am <span children={3} /> years old!
  </div>
) // 'Hello world! I am 3 years old!'
```

### CommonJS

```jsx
const innerText = require('react-innertext');
innerText(
  <div>
    Hello <strong>world</strong>!
    I am <span children={3} /> years old!
  </div>
) // 'Hello world! I am 3 years old!'
```

### Real World Example

In the below example, the `title` attribute of the `<th>` element sanitizes the
`children` prop. This allows the children to contain HTML or other React
Elements, while providing a safe, plain text string for the `title`.

```JS
function MyTableHeader() {
  return (
    <thead>
      <tr>
        <MyTableHeaderCell>
          <b>Username</b>
          <SortButton />
        </MyTableHeaderCell>
      </tr>
    </thead>
  );
}

// title="Username"
function MyTableHeaderCell({ children }) {
  return (
    <th
      children={children}
      title={innerText(children)}
    />
  );
}
```
