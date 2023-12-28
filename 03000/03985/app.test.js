const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`10
3
2 4
7 8
6 9`)
  ).toBe(`3
1`);
});

test("test1", () => {
  expect(
    solution(`10
3
1 3
5 7
8 9`)
  ).toBe(`1
1`);
});

test("test2", () => {
  expect(
    solution(`10
5
1 1
1 2
1 3
1 4
7 8`)
  ).toBe(`4
5`);
});
