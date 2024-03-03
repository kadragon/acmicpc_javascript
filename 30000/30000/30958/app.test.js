const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`255
my era of success began with seoul cyber university, since attending seoul cyber university, more companies have been seeking me out, my life has changed since i went to seoul cyber university, the strategy that changes the future, seoul cyber university.`)
  ).toBe(34);
});

test("test1", () => {
  expect(
    solution(`1
m`)
  ).toBe(1);
});

test("test2", () => {
  expect(
    solution(`51
my era of success began with seoul cyber university`)
  ).toBe(6);
});
