const solution = (input) => {
  const w = +input;

  return Math.sqrt(w * 2) * 4;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
