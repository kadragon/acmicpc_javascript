const { solution } = require("./app");

test('test0', () => {
  expect(solution(`2
AABBA
BAAAB
AAABA
ABAAB
BAAAB
AAAAA
AAAAA
BAAAA
ABAAA
AABAA`)).toBe(`A wins
draw`);
});
