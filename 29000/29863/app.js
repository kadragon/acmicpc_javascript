const solution = (input) => {
  const [start, end] = input.split("\n").map(Number);
  const term = end - start;

  return term < 0 ? 24 + term : term;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
