const solution = (input) => {
  const n = +input;
  let answer = 6;
  for (let i = 11; i <= n; i++) answer *= i;

  return answer;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
