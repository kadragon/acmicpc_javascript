const { solution } = require("./app");

test('test0', () => {
  expect(solution(`4
aaa bbb ccc ddd
bbb ddd
aaa ddd
aaa
aaa bbb`)).toBe(`aaa 3
bbb 2
ddd 2
ccc 0`);
});
