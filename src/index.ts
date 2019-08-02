import { ReactElement, ReactNode } from "react";

interface InnerText {
  (jsx: ReactNode): string;
  default: InnerText;
}

const hasProps = (jsx: ReactNode): jsx is ReactElement =>
  Object.prototype.hasOwnProperty.call(jsx, "props");

const reduceJsxToString = (previous: string, current: ReactNode): string =>
  previous + innerText(current);

const innerText: InnerText = (jsx: ReactNode): string => {
  // Empty
  if (jsx === null || typeof jsx === "boolean" || typeof jsx === "undefined") {
    return "";
  }

  // Numeric children.
  if (typeof jsx === "number") {
    return jsx.toString();
  }

  // String literals.
  if (typeof jsx === "string") {
    return jsx;
  }

  // Array of JSX.
  if (Array.isArray(jsx)) {
    return jsx.reduce<string>(reduceJsxToString, "");
  }

  // Children prop.
  if (
    hasProps(jsx) &&
    Object.prototype.hasOwnProperty.call(jsx.props, "children")
  ) {
    return innerText(jsx.props.children);
  }

  if (hasProps(jsx)) {
    if (Object.prototype.hasOwnProperty.call(jsx.props, "value")) {
      return innerText(jsx.props.value);
    }
    if (Object.prototype.hasOwnProperty.call(jsx.props, "checked")) {
      return String(jsx.props.checked);
    }
  }

  // Default
  return "";
};

innerText.default = innerText;

export = innerText;
