const { solution } = require("./app");

test('test0', () => {
  expect(solution(`000200D-18
5
000200D-18
000200C-01
000210D-18
660820A-01
0002000-00`)).toBe(3);
});
