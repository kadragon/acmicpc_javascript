const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`5
changwon 100
incheon 70
jinju 90
haenam 530
gangneung 660`)
  ).toBe(`90
3`);
});
