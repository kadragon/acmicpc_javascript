const { solution } = require("./app");

test("test0", () => {
  expect(solution(`4 3 2`)).toBe(3);
});

test("test1", () => {
  expect(solution(`10 0 10`)).toBe(0);
});

test("test2", () => {
  expect(solution(`5 3 3`)).toBe(5);
});

test("test3", () => {
  expect(solution(`7 5 2`)).toBe(4);
});
