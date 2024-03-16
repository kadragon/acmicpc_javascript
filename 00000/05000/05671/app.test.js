const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`87 104
989 1022
22 25
1234 1234`)
  ).toBe(`14
0
3
1`);
});

test("test1", () => {
  expect(solution(`1 1`)).toBe(`1`);
});
