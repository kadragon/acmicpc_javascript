const { solution } = require("./app");

test("test01", () => {
  expect(
    solution(`2
  12 12`)
  ).toBe("1 8");
});

test("test02", () => {
  expect(
    solution(`1
    10`)
  ).toBe("0 10");
});

test("test03", () => {
  expect(
    solution(`3
    10 11 11`)
  ).toBe("2 0");
});
