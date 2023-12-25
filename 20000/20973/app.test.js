const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`abcdefghijklmnopqrstuvwxyz
mood`)
  ).toBe(3);
});
