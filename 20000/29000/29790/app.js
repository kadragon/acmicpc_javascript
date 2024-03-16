const solution = (input) => {
  const [n, u, l] = input.split(" ").map(Number);

  if (n < 1000) return "Bad";
  if (u >= 8000 || l >= 260) return "Very Good";
  return "Good";
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
