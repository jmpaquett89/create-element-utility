import { setupElement } from "./utils/element";

/**
 * A dom element object with optional classes, attributes,
 * events, and children.
 *
 * @typedef {Object} DOMElement
 * @property {String} type - Type of element (div,span,ul,li, etc)
 * @property {Array<String>} classes - List of class names
 * @property {Object} attributes - Attributes in key-value pair form
 * @property {Object} events - events and callback in key-value pair form
 * @property {String} html - A string to be inserted into the element
 * @property {Array<DOMElement>} children - List of DOMElement children
 */

/**
 * Create a fragment element with classes, attributes, events, and children
 *
 * @param {DOMElement} domElement A dom element object with optional classes and attributes
 * @returns {DocumentFragment} - DOM Element with optional classes, attributes, events, and children elements
 */
const createElement = (domElement) => {
  const fragment = document.createDocumentFragment();
  const element = setupElement(domElement);

  fragment.appendChild(element);

  return fragment;
};

export default createElement;
