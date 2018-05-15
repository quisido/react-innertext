'use strict';

var innerText = function(jsx) {
  if (
    jsx === null ||
    typeof jsx === 'boolean'
  ) {
    return '';
  }
  if (typeof jsx === 'number') {
    return jsx.toString();
  }
  if (typeof jsx === 'string') {
    return jsx;
  }
  if (
    Object.prototype.hasOwnProperty.call(jsx, 'props') &&
    Object.prototype.hasOwnProperty.call(jsx.props, 'children')
  ) {
    if (Array.isArray(jsx.props.children)) {
      return jsx.props.children.reduce(
        function(previous, current) {
          return previous + innerText(current);
        },
        ''
      );
    }
    return innerText(jsx.props.children);
  }
  return '';
};

innerText.default = innerText;

module.exports = innerText;
