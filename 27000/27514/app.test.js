const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`20
512 32 64 0 0 0 0 64 64 0 32 0 0 0 512 0 0 256 256 256`)
  ).toBe(`2048`);
});

test("test1", () => {
  expect(
    solution(`8
1 1 2 4 8 16 32 64`)
  ).toBe(`128`);
});

test("test2", () => {
  expect(
    solution(`1
1`)
  ).toBe(`1`);
});
