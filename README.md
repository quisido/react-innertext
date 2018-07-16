# react-innertext
Returns the innerText of a React JSX object, similar to the innerText property of DOM elements.

![GitHub version](https://img.shields.io/github/package-json/v/CharlesStover/react-innertext.svg)
![npm version](https://img.shields.io/npm/v/react-innertext.svg)
![npm downloads](https://img.shields.io/npm/dt/react-innertext.svg)
![min](https://img.shields.io/bundlephobia/min/react-innertext.svg)
![minzip](https://img.shields.io/bundlephobia/minzip/react-innertext.svg)

## Install
* `npm install react-innertext --save` or
* `yarn add react-innertext`

## Use

### CommonJS
```JS
const innerText = require('react-innertext');
innerText(<div>Hello <strong>world</strong>!</div>) === 'Hello world!'
```

### ES6
```JS
import innerText from 'react-innertext';
innerText(<div>Hello <strong>world</strong>!</div>) === 'Hello world!'
```
