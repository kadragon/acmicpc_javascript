const solution = (input) => {
  const n = parseInt(input);

  return n / 11 * 10;
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;