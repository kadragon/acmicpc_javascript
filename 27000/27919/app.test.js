const { solution } = require("./app");

test("test0", () => {
  expect(solution(`UDPC`)).toBe(`UDP`);
});

test("test1", () => {
  expect(solution(`UDP`)).toBe(`DP`);
});

test("test2", () => {
  expect(solution(`UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU`)).toBe(`U`);
});
