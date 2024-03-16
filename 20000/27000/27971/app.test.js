const { solution } = require("./app");

test('test0', () => {
  expect(solution(`7 1 2 3
3 4`)).toBe(3);
});

test('test1', () => {
  expect(solution(`8 2 5 4
1 2
1 3`)).toBe(2);
});

test('test2', () => {
  expect(solution(`8 1 2 5
6 7`)).toBe(-1);
});
