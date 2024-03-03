const { solution } = require("./app");

test("test01", () => {
  expect(solution("3 4")).toBe("1");
});

test("test02", () => {
  expect(solution("3 6")).toBe("111");
});

test("test03", () => {
  expect(solution("500000000000000000 500000000000000002")).toBe("11");
});
