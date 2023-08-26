const solution = (input) => {
  const bears = input.split(`\n`).map(Number);
  return bears.sort((a, b) => a - b)[1];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
