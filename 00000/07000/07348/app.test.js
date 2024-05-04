const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`3
4
10 20
30 40
50 60
70 80
2
1 3
2 200
3
10 100
20 80
30 50`)
  ).toBe(`10
20
30`);
});

test("test1", () => {
  expect(
    solution(`1
2
5 6
3 4`)
  ).toBe(`10`);
});
