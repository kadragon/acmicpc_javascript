const { solution } = require("./app");

test("test0", () => {
  expect(solution(`"Hello World`)).toBe(`CE`);
});

test("test1", () => {
  expect(solution(`"Hello World"`)).toBe(`Hello World`);
});

test("test2", () => {
  expect(solution(`""`)).toBe(`CE`);
});

test("test3", () => {
  expect(solution(`"`)).toBe(`CE`);
});
