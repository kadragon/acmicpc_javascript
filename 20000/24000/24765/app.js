const makeNumber = (a, b) => {
  return a > b ? a * 10 + b : b * 10 + a;
};

const judge = (s0, s1, r0, r1) => {
  const s = makeNumber(s0, s1);
  const r = makeNumber(r0, r1);

  if (s == r) return 3;
  if (s === 21 || r === 21) return s === 21 ? 1 : 2;
  if (s % 11 === 0 && r % 11 !== 0) return 1;
  if (s % 11 !== 0 && r % 11 === 0) return 2;
  return s > r ? 1 : 2;
};

const solution = (input) => {
  const massege = ["Player 1 wins.", "Player 2 wins.", "Tie."];
  const result = [];

  for (const [s0, s1, r0, r1] of input
    .split("\n")
    .map((v) => v.split(" ").map(Number))) {
    if (s0 === 0 && s1 === 0 && r0 === 0 && r1 === 0) break;

    result.push(massege[judge(s0, s1, r0, r1) - 1]);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
