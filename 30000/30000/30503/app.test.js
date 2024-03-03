const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`10
1 5 5 5 3 2 1 1 10 2
6
1 1 10 3
1 2 7 5
2 3 5
1 1 3 5
2 4 7
1 1 10 1`)
  ).toBe(`1
3
1
2`);
});
