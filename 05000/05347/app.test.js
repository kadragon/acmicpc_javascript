const { solution } = require("./app");

test('test0', () => {
  expect(solution(`3
15 21
33 22
9 10`)).toBe(`105
66
90`);
});
