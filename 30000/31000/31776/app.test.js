const { solution } = require("./app");

test('test0', () => {
  expect(solution(`6
1 2 3
1 -1 1
-1 -1 -1
0 4 -1
10 -1 -1
120 120 120`)).toBe(4);
});
