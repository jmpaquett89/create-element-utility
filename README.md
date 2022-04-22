# create-element-utility

## Description

Pass in a DOMElement object that returns a dom element node with the defined classnames, attributes, events, and children elements.

## How To

**DOMElement**

```js
/**
 * A dom element object with optional classes and attributes
 *
 * @typedef {Object} DOMElement
 * @property {String} type - Type of element (div,span,ul,li, etc)
 * @property {Array<String>} classes - List of class names
 * @property {Object} attributes - Attributes in key-value pair form
 * @property {Object} events - events and callback in key-value pair form
 * @property {String} html - A string to be inserted into the element
 * @property {Array<DOMElement>} children - List of DOMElement children
 */
```

**Example**:

```js
const element = createElement({
  type: "div",
  classes: ["test", "test2"],
  attributes: {
    id: "testing-123",
  },
  events: {
    click: () => {
      console.log("click event");
    },
  },
  html: "A small message to be converted to text node",
  children: [
    {
      type: "h1",
      classes: ["test-h1"],
      attributes: {
        id: "testing-h1",
      },
      html: "Test Header",
    },
  ],
});
```
