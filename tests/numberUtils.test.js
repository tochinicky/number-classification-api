const {
  isPrime,
  isPerfect,
  getDigitSum,
  getNumberProperties,
} = require("../src/services/numberUtils");

test("Check if 7 is prime", () => {
  expect(isPrime(7)).toBe(true);
});

test("Check if 28 is perfect", () => {
  expect(isPerfect(28)).toBe(true);
});

test("Check digit sum of 371", () => {
  expect(getDigitSum(371)).toBe(11);
});

test("Check properties of 371", () => {
  expect(getNumberProperties(371)).toEqual(["armstrong", "odd"]);
});
