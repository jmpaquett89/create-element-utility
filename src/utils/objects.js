/**
 * Checks if the argument is typeof object
 *
 * @param {Object} obj
 * @returns {Boolean}
 */
const isObject = (obj) =>
  !!(obj && !Array.isArray(obj) && typeof obj === "object");

export { isObject };
