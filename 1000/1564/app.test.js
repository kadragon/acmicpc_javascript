const { solution } = require("./app");

test('test0', () => {
  expect(solution(`20`)).toBe(`17664`);
});

test('test1', () => {
  expect(solution(`18`)).toBe(`05728`);
});
