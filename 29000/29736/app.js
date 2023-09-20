const solution = (input) => {
  const [A, B, K, X] = input.split(/[ \n]/).map(Number);

  const min = Math.max(A, K - X);
  const max = Math.min(B, K + X);

  const result = max - min + 1;

  return result >= 0 ? result : "IMPOSSIBLE";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").trim();

console.log(solution(input));
