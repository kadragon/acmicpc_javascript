const { solution } = require("./app");

test('test0', () => {
  expect(solution(`4
T 151 307
S 343 352
T 117 145
S 24 128`)).toBe(`289
2
12
2
157`);
});

test('test1', () => {
  expect(solution(`6
T 128 130
S 128 131
S 131 140
S 131 141
T 131 200
T 140 200`)).toBe(`73
4
4
4
70`);
});
