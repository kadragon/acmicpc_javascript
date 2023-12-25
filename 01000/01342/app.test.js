const { solution } = require("./app");

test("test0", () => {
  expect(solution(`aabbbaa`)).toBe(1);
});

test("test1", () => {
  expect(solution(`ab`)).toBe(2);
});

test("test2", () => {
  expect(solution(`aaab`)).toBe(0);
});

test("test3", () => {
  expect(solution(`abcdefghij`)).toBe(3628800);
});
