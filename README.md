# react-innertext
Returns the innerText of a React JSX object, similar to the innerText property of DOM elements.

[![package](https://img.shields.io/github/package-json/v/CharlesStover/react-innertext.svg)](https://github.com/CharlesStover/react-innertext/)
[![build](https://travis-ci.com/CharlesStover/react-innertext.svg)](https://travis-ci.com/CharlesStover/react-innertext/)
[![downloads](https://img.shields.io/npm/dt/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)
[![minified size](https://img.shields.io/bundlephobia/min/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)

## Install
* `npm install react-innertext --save` or
* `yarn add react-innertext`

## Test
* `npm run test` or
* `yarn test`

## Use

### CommonJS
```JS
const innerText = require('react-innertext');
innerText(
  <div>
    Hello <strong>world</strong>!
    I am <span children={3} /> years old!
  </div>
) // 'Hello world! I am 3 years old!'
```

### ES6
```JS
import innerText from 'react-innertext';
innerText(
  <div>
    Hello <strong>world</strong>!
    I am <span children={3} /> years old!
  </div>
) // 'Hello world! I am 3 years old!'
```

### Real World Example
In the below example, the `title` attribute of the `<th>` element sanitizes the `children` prop. This allows the children to contain HTML or other React elements, while providing a safe, plain text string for the `title`.
```JS
class MyTableHeaderCell extends React.PureComponent {
  render() {
    return (
      <th
        children={this.props.children}
        title={innerText(this.props.children)}
      />
    );
  }
}

class MyTableHeader extends React.PureComponent {
  render() {
    return (
      <thead>
        <tr>
          <MyTableHeaderCell>
            <b>Username</b>
            <SortButton />
          </MyTableHeader>
        </tr>
      </thead>
    );
  }
}
```
