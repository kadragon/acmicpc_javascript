const { solution } = require("./app");

test('test0', () => {
  expect(solution(`3
2
5
19`)).toBe(`No
Yes
Yes`);
});
