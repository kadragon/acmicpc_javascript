const { solution } = require("./app");

test("test0", () => {
  expect(solution(`20210`)).toBe(`227.10`);
});

test("test1", () => {
  expect(solution(`9000`)).toBe(`115.00`);
});

test("test2", () => {
  expect(solution(`300000`)).toBe(`2000.00`);
});
