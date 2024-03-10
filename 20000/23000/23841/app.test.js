const { solution } = require("./app");

test('test0', () => {
  expect(solution(`3 6
G..R..
..B...
Y.....`)).toBe(`G.RR.G
..BB..
Y....Y`);
});
