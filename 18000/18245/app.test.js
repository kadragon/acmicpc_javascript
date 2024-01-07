const { solution } = require("./app");

test("test0", () => {
  expect(
    solution(`HZAOPAPCYSUENCBOINRDTCHODNATY
Was it a cat I saw?`)
  ).toBe(`HAPPYUNBIRTHDAY`);
});

test("test1", () => {
  expect(
    solution(`RAEBDCVDEELFVGEHT
SIJEKLUMNLOPGQRI
ISTURVWXEYZANBCDE
WEFGHEIJKLNMNOPDQRSTY
YUVWXYEZABCDREFGHII
JJKLMNOOPQRSTUY
Was it a cat I saw?`)
  ).toBe(`REDVELVET
SEULGI
IRENE
WENDY
YERI
JOY`);
});
