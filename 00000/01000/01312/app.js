const solution = (input) => {
  const [a, b, n] = input.split(" ").map(Number);

  let remain = a % b;

  for (let i = 0; i < n - 1; i++) {
    remain *= 10;
    remain %= b;
  }

  return Math.floor((remain * 10) / b);
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
