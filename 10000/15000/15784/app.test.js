const { solution } = require("./app");

test('test0', () => {
  expect(solution(`5 3 2
10 2 3 24 4
21 4 5 12 1
24 52 4 2 2
2 4 3 2 32
1 4 32 2 4`)).toBe(`HAPPY`);
});
