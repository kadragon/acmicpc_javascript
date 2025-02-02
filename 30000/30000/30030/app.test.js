const { solution } = require("./app");

test('test0', () => {
  expect(solution(`1100`)).toBe(1000);
});

test('test1', () => {
  expect(solution(`2970`)).toBe(2700);
});

test('test2', () => {
  expect(solution(`9900`)).toBe(9000);
});
