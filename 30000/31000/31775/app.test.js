const { solution } = require("./app");

test('test0', () => {
  expect(solution(`korea
legend
postech`)).toBe(`GLOBAL`);
});

test('test1', () => {
  expect(solution(`turing
dijkstra
neumann`)).toBe(`PONIX`);
});

test('test2', () => {
  expect(solution(`leo020630
kwoncycle
petamingks`)).toBe(`GLOBAL`);
});
