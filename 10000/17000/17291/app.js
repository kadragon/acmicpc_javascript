const solution = (input) => {
  const n = Number(input);
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[4] = -1;

  for (let i = 2; i <= n; i++) {
    dp[i] += dp[i - 1] * 2;
    if (i % 2 === 1) {
      dp[i + 3] -= dp[i - 1];
    } else {
      dp[i + 4] -= dp[i - 1];
    }
  }

  return dp[n];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
