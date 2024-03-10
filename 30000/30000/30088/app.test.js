const { solution } = require("./app");

test('test0', () => {
  expect(solution(`3
2 5 50
2 20 10
1 100`)).toBe(300);
});
