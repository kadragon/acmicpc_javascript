const { solution } = require("./app");

test('test0', () => {
  expect(solution(`3040 8916 273`)).toBe(`Very Good`);
});

test('test1', () => {
  expect(solution(`3800 6000 260`)).toBe(`Very Good`);
});

test('test2', () => {
  expect(solution(`1000 6000 250`)).toBe(`Good`);
});

test('test3', () => {
  expect(solution(`600 8500 270`)).toBe(`Bad`);
});
