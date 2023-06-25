const solution = (input) => {
  const n = +input;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2] + 1) % 1000000007;

  return dp[n];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
