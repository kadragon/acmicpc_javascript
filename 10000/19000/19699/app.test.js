const { solution } = require("./app");

test('test0', () => {
  expect(solution(`5 3
2 4 10 5 8`)).toBe(`11 17 19 23`);
});
