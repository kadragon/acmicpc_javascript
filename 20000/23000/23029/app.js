const solution = (input) => {
  const [n, ...foods] = input.split("\n").map(Number);
  const dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = dp[i - 1][0] + foods[i - 1];
    dp[i][2] = dp[i - 1][1] + Math.floor(foods[i - 1] / 2);
  }

  return Math.max(...dp[n]);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
