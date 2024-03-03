const gcd = (a, b) => {
  while (b !== 0) [a, b] = [b, a % b];

  return a;
};

const solution = (input) => {
  const pairs = input
    .split("\n")
    .slice(1)
    .map((v) => v.split(" ").map(Number));

  return pairs.map(([a, b]) => (a * b) / gcd(a, b)).join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
