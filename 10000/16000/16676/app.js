const solution = (input) => {
  const N = +input;
  let answer = 1;
  let splitNumber = 11;

  while (N >= splitNumber) {
    answer++;
    splitNumber = splitNumber * 10 + 1;
  }

  return answer;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
