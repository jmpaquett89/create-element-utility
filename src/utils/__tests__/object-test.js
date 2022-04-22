import { isObject } from "../objects";

describe("object", () => {
  describe("isObject", () => {
    it("when the argument is an array, should return false", () => {
      const obj = [];
      expect(isObject(obj)).toEqual(false);
    });

    it("when the argument is null, should return false", () => {
      const obj = null;
      expect(isObject(obj)).toEqual(false);
    });

    it("when the argument is an object, should return true", () => {
      const obj = {};
      expect(isObject(obj)).toEqual(true);
    });
  });
});
