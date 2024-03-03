const solution = (input) => {
  const matches = input.match(/DKSH/g);
  return matches ? matches.length : 0;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
