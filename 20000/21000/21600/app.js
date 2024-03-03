const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [n, ...arr] = input.split(/\s/).map((v) => +v);
const dp = Array(n).fill(0);

dp[0] = 1;
for (let i = 1; i < n; i++) {
  dp[i] = dp[i - 1] + 1 > arr[i] ? arr[i] : dp[i - 1] + 1;
}

console.log(Math.max(...dp));
