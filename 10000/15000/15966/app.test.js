const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`6
1 2 3 4 5 6`)
  ).toBe(6);
});

test("test1", () => {
  expect(
    solution(`3
1 5 2`)
  ).toBe(2);
});
