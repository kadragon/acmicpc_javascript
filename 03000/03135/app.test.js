const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`100 15
1
15`)
  ).toBe(1);
});

test("test1", () => {
  expect(
    solution(`88 17
3
18
1
42`)
  ).toBe(2);
});

test("test2", () => {
  expect(
    solution(`64 120
1
567`)
  ).toBe(56);
});
