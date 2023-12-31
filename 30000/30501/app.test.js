const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`3
ZHOUYU
SUNQUAN
ZOZO`)
  ).toBe(`SUNQUAN`);
});
