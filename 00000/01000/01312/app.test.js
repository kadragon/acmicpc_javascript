const { solution } = require("./app");

test("test0", () => {
  expect(solution(`25 7 5`)).toBe(2);
});

test("test1", () => {
  expect(solution(`1 3 3`)).toBe(3);
});
