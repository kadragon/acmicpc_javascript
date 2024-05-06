const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`5
1
2
0
3
4
0
5
6
0
0
-1`)
  ).toBe(`5 6`);
});

test("test1", () => {
  expect(
    solution(`1
1
2
3
4
5
6
7
-1`)
  ).toBe(`1`);
});

test("test2", () => {
  expect(
    solution(`1
1
2
0
3
4
0
5
6
0
7
0
-1`)
  ).toBe(`empty`);
});
