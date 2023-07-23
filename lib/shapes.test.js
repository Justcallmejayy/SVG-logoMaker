const { Square, Circle, Triangle, Shape } = require("./shapes");
const testShape = require("/shapes");

describe("Shape", () => {
  describe("Square", () => {
    it("should return a square", () => {
      const square = new Square();
      const result = Square.render("pass");

      expect(result).toEqual(true);
    });
  });
});
