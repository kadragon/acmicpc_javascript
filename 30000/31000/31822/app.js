const solution = (input) => {
  const [subject, , ...targets] = input.split("\n").map((v) => v.slice(0, 5));

  return targets.reduce((acc, cur) => acc + (cur === subject ? 1 : 0), 0);
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
