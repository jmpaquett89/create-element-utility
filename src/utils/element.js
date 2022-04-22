import { isObject } from "./objects";

const mappedPropertyFunctions = {
  attribute: "setAttribute",
  event: "addEventListener",
};

/**
 * Initializes dom element object by merging with default values
 *
 * @param {DOMElement} domElement - A dom element object with optional
 * classes, attributes, events, and children.
 * @returns {DOMElement} - the initialized dom element object
 */
const initializeDomElement = (domElement) => {
  const defaultDomElement = {
    type: null,
    classes: [],
    attributes: {},
    events: {},
    html: "",
    children: [],
  };

  return {
    ...defaultDomElement,
    ...domElement,
  };
};

/**
 * Appens children dom elements to the parent dom element
 *
 * @param {HTMLElement} element - the parent html element
 * @param {Array<Object>} children - a list of dom elements
 * @returns {HTMLElement} - an html element with children
 */
const appendChildren = (element, children) => {
  if (!children.length) {
    return element;
  }

  children.forEach((child) => {
    const childElement = setupElement(child);
    element.appendChild(childElement);
  });

  return element;
};

/**
 * Adds classes to the element's classlist
 *
 * @param {HTMLElement} element - an html element
 * @param {Array<String>} classes - a list of class names
 * @returns {HTMLElement} - an html element with class names
 */
const setClassList = (element, classes) => {
  if (!classes || !classes.length) {
    return element;
  }

  classes.forEach((className) => element.classList.add(className));

  return element;
};

/**
 * Sets properties on an element with a paired value
 *
 * @param {HTMLElement} element - an html element
 * @param {Object} obj - key/value paired object
 * @param {String} property - property name of the element to use
 * @returns {HTMLElement} - an html element
 */
const setElementKeys = (element, obj, property) => {
  if (!isObject(obj)) {
    return element;
  }

  const propertyFunction = mappedPropertyFunctions[property];

  Object.entries(obj).forEach(([key, value]) =>
    element[propertyFunction](key, value)
  );

  return element;
};

/**
 * Sets the inner html of the parent element
 *
 * @param {HTMLElement} element - the parent html element
 * @param {String} html - the inner html value
 * @returns {HTMLElement} - an html element inner html
 */
const setHtml = (element, html = "") => {
  if (html === "") {
    return element;
  }

  const textNode = document.createTextNode(html);
  element.appendChild(textNode);

  return element;
};

/**
 * Converts the dom element into an html element
 *
 * @param {DOMElement} domElement - A dom element object
 * with optional classes, attributes, events, and children.
 * @returns {HTMLElement} - an html element
 */
const setupElement = (domElement) => {
  const initializedDomElement = initializeDomElement(domElement);
  const { classes, attributes, type, events, html, children } =
    initializedDomElement;

  if (!type) {
    return null;
  }

  const element = document.createElement(type);
  setClassList(element, classes);
  setElementKeys(element, attributes, "attribute");
  setElementKeys(element, events, "event");
  setHtml(element, html);
  appendChildren(element, children, this);

  return element;
};

export { setupElement };
