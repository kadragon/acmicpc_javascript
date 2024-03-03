const { solution } = require("./app");

test("test0", () => {
  expect(solution(`31`)).toBe(101);
});

test("test1", () => {
  expect(solution(`1000000`)).toBe(1003001);
});
