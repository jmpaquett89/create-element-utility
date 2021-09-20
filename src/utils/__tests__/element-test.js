import { setupElement } from "../element";

const defaultDomElement = {
  type: "div",
};

const updateDomElement = (domElementChanges) => {
  return {
    ...defaultDomElement,
    ...domElementChanges,
  };
};

describe("element", () => {
  describe("setupElement", () => {
    it("when the argument has no type, should return null", () => {
      const domElement = updateDomElement({
        type: null,
      });
      expect(setupElement(domElement)).toEqual(null);
    });

    describe("given the argument has a type", () => {
      it("when the argument has no class names, should not add class names to element", () => {
        const domElement = updateDomElement({});
        expect(setupElement(domElement).classList.length).toEqual(0);
      });

      it("when the argument has class names, should add class names to element", () => {
        const domElement = updateDomElement({
          classes: ["test-1", "test-2"],
        });
        expect(setupElement(domElement).classList.length).toEqual(2);
      });

      it("when the argument has no attributes, should not add attributes to element", () => {
        const domElement = updateDomElement({});
        const element = setupElement(domElement);
        expect(element.hasAttributes()).toEqual(false);
        expect(element.attributes.length).toEqual(0);
      });

      it("when the argument has attributes, should add attributes to element", () => {
        const domElement = updateDomElement({
          attributes: {
            id: "test-id-1",
          },
        });
        const element = setupElement(domElement);
        expect(element.hasAttributes()).toEqual(true);
        expect(element.attributes.length).toEqual(1);
      });

      it("when the argument has no event, should not add event listener to element", () => {
        const domElement = updateDomElement({});
        expect(setupElement(domElement).getAttribute("onclick")).toEqual(null);
      });

      it("when the argument has events, should add event listeners to element", () => {
        const domElement = updateDomElement({
          events: {
            click: () => {
              console.log("click event");
            },
          },
        });
        expect(
          setupElement(domElement).getAttribute("onclick")
        ).not.toBeUndefined();
      });

      it("when the argument has no html, should not text node to element", () => {
        const domElement = updateDomElement({});
        expect(setupElement(domElement).firstChild).toEqual(null);
      });

      it("when the argument has html, should add text node to element", () => {
        const domElement = updateDomElement({
          html: "This is purely a test",
        });
        expect(setupElement(domElement).firstChild).not.toEqual(null);
      });

      it("when the argument has no children, should not append children to element", () => {
        const domElement = updateDomElement({});
        expect(setupElement(domElement).children.length).toEqual(0);
      });

      it("when the argument has children, should append children to element", () => {
        const domElement = updateDomElement({
          children: [
            {
              type: "span",
            },
            {
              type: "h1",
            },
          ],
        });
        expect(setupElement(domElement).children.length).toEqual(2);
      });
    });
  });
});
