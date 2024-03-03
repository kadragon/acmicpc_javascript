const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`5
1 5 3 2 4`)
  ).toBe(`40`);
});
