const { solution } = require("./app");

test('test0', () => {
  expect(solution(`5 70 120 25 15`)).toBe(10);
});

test('test1', () => {
  expect(solution(`100 50 100 5 200`)).toBe(109);
});

test('test2', () => {
  expect(solution(`1 60 70 11 11`)).toBe(-1);
});

test('test3', () => {
  expect(solution(`200 50 200 150 1`)).toBe(30050);
});

test('test4', () => {
  expect(solution(`19 89 143 17 13`)).toBe(40);
});
