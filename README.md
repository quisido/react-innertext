# react-innertext
Returns the innerText of a React JSX object, similar to the innerText property of DOM elements.

![package](https://img.shields.io/github/package-json/v/CharlesStover/react-innertext.svg)
![build](https://travis-ci.com/CharlesStover/react-innertext.svg)
![downloads](https://img.shields.io/npm/dt/react-innertext.svg)
![minified size](https://img.shields.io/bundlephobia/min/react-innertext.svg)
![minzipped size](https://img.shields.io/bundlephobia/minzip/react-innertext.svg)

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
