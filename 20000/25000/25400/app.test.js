const { solution } = require("./app");

test('test0', () => {
  expect(solution(`1
1`)).toBe(0);
});

test('test1', () => {
  expect(solution(`8
6 1 2 3 2 4 5 10`)).toBe(3);
});

test('test2', () => {
  expect(solution(`6
3 4 6 10 2 5`)).toBe(6);
});
