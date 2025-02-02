const { solution } = require("./app");

test('test0', () => {
  expect(solution(`3
3
3
1`)).toBe(2);
});

test('test1', () => {
  expect(solution(`4
2
3
4
1`)).toBe(1);
});

test('test2', () => {
  expect(solution(`6
2
3
4
3
1
1`)).toBe(5);
});
