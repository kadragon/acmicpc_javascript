const solution = (input) => {
  const [n, m, k] = input.split(" ").map(Number);

  const o = Math.min(m, k);
  const x = n - Math.max(m, k);

  return o + x;
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
