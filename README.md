# React innerText [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=You%20can%20access%20the%20innerText%20of%20React%20components%20as%20if%20they%20were%20DOM%20nodes%20by%20using%20the%20react-innertext%20package.&url=https://github.com/CharlesStover/react-innertext&via=CharlesStover&hashtags=react,reactjs,javascript,webdev,webdeveloper,webdevelopment)

Returns the innerText of a React JSX object, similar to the innerText property of DOM elements.

[![version](https://img.shields.io/npm/v/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)
[![minified size](https://img.shields.io/bundlephobia/min/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)
[![downloads](https://img.shields.io/npm/dt/react-innertext.svg)](https://www.npmjs.com/package/react-innertext)
[![build](https://travis-ci.com/CharlesStover/react-innertext.svg)](https://travis-ci.com/CharlesStover/react-innertext/)

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
