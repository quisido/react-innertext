'use strict';

const innerText = jsx => {

  // Non-existent children.
  if (
    jsx === null ||
    typeof jsx === 'boolean'
  ) {
    return '';
  }

  // Numeric children.
  if (typeof jsx === 'number') {
    return jsx.toString();
  }

  // String literals.
  if (typeof jsx === 'string') {
    return jsx;
  }

  // Array of children.
  if (Array.isArray(jsx)) {
    return jsx.reduce(
      (previous, current) =>
        previous + innerText(current),
      ''
    );
  }

  // "Children!" ~ Chef
  if (
    Object.prototype.hasOwnProperty.call(jsx, 'props') &&
    Object.prototype.hasOwnProperty.call(jsx.props, 'children')
  ) {
    return innerText(jsx.props.children);
  }

  // Default
  return '';
};

innerText.default = innerText;

module.exports = innerText;
