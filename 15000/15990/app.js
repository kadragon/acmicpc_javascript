const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const MOD = 1000000009;
const questions = input
  .split("\n")
  .slice(1)
  .map((v) => +v);
const dp = Array.from(Array(100000 + 1), () => Array(4).fill(0));

dp[1][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= 100000; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}

for (const t of questions) {
  const answer = dp[t].reduce((acc, cur) => (acc + cur) % MOD);
  console.log(answer);
}
