'use strict';

const innerText = jsx => {
  if (jsx === null) {
    return '';
  }
  if (typeof jsx === 'number') {
    return jsx.toString();
  }
  if (typeof jsx === 'string') {
    return jsx;
  }
  let text = '';
  if (
    jsx.props &&
    jsx.props.children
  ) {
    if (Array.isArray(jsx.props.children)) {
      const childrenLength = jsx.props.children.length;
      for (let x = 0; x < childrenLength; ++x) {
        text += innerText(jsx.props.children[x]);
      }
    }
    else {
      text += innerText(jsx.props.children);
    }
  }
  return text;
};

Object.defineProperty(exports, '__esModule', { value: true });
exports.default = innerText;
