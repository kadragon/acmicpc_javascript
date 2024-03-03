const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`3
2023
2024
2029`)
  ).toBe(`Good
Bye
Good`);
});
