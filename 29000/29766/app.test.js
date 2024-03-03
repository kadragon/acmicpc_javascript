const { solution } = require("./app");

test("test0", () => {
  expect(solution(`DKKSSH`)).toBe(0);
});

test("test1", () => {
  expect(solution(`HDKSHDDKS`)).toBe(1);
});

test("test2", () => {
  expect(solution(`SDKSHSSDKSHS`)).toBe(2);
});
