
const mathOperations = require("./5.4");

test("should return sum of two values", () => {
  expect(mathOperations.sum(18,15)).toBe(33);
});
test("should return difference of two values", () => {
  expect(mathOperations.diff(2,7)).toBe(-5);
});
test("should return product of two values", () => {
  expect(mathOperations.product(15, 15)).toBe(225);
});