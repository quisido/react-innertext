import * as React from "react";
import { expect } from "chai";
import innerText from "../index";

interface HasWindow extends NodeJS.Global {
  window: Window;
}

const hasWindow = (obj: NodeJS.Global): obj is HasWindow =>
  Object.prototype.hasOwnProperty.call(obj, "window");

if (hasWindow(global)) {
  delete global.window;
}

describe("react-innertext", (): void => {
  it("should support a window-less environment", (): void => {
    expect((global as HasWindow).window).to.be.undefined;
    // @ts-ignore
    expect(typeof window).to.equal("undefined");
  });

  it("should support boolean", (): void => {
    expect(innerText(true)).to.equal("");
    expect(innerText(false)).to.equal("");
  });

  it("should support empty objects", (): void => {
    expect(innerText({})).to.equal("");
  });

  it("should support null", (): void => {
    expect(innerText(null)).to.equal("");
  });

  it("should support numbers", (): void => {
    expect(innerText(123)).to.equal("123");
    expect(innerText(420.69)).to.equal("420.69");
  });

  it("should support undefined", (): void => {
    expect(innerText(undefined)).to.equal("");
  });

  it("should support ReactElements", (): void => {
    expect(innerText(<div>This is a div.</div>)).to.equal("This is a div.");
  });

  it("should support childless ReactElements", (): void => {
    expect(innerText(<div />)).to.equal("");
  });

  it("should support nested ReactElements", (): void => {
    expect(
      innerText(
        <div>
          <p>Paragraph 1.</p>
          <p>Paragraph 2.</p>
        </div>
      )
    ).to.equal("Paragraph 1.Paragraph 2.");
  });

  it("should support arrays", (): void => {
    expect(
      innerText([
        null,
        123,
        undefined,
        true,
        <p>1</p>,
        ["te", "st"],
        420.69,
        <div>
          <span>2</span>
          <span>three</span>
          <p>4</p>
        </div>
      ])
    ).to.equal("1231test420.692three4");
  });

  it("should support controlled input via value prop", (): void => {
    expect(innerText(<input value="testing" />)).to.equal("testing");
  });

  it("should support controlled input via checked prop", (): void => {
    expect(innerText(<input checked={true} />)).to.equal("true");
  });
});
