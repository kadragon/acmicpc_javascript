const solution = (input) => {
  const problems = input.split(/\s+/).slice(1).map(Number);
  const result = [];

  const getSum = (p, n) => {
    const d = Math.floor(p / n);
    return ((d * (d + 1)) / 2) * n;
  };

  for (const problem of problems) {
    result.push(getSum(problem, 3) + getSum(problem, 7) - getSum(problem, 21));
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
