const solution = (input) => {
  const criminals = input.split("\n").slice(1);

  for (const criminal of criminals) {
    if (criminal.includes("S")) {
      return criminal;
    }
  }
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
