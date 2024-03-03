const { solution } = require("./app");

test('test0', () => {
  expect(solution(`5
7 -1 6 2 5`)).toBe(9);
});

test('test1', () => {
  expect(solution(`8
5 2 -1 9 9 9 9 1`)).toBe(3);
});

test('test2', () => {
  expect(solution(`7
321 -1 88 777 105 456 88`)).toBe(409);
});
