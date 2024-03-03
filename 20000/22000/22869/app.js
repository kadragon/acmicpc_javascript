const solution = (input) => {
  const [n, k, ...a] = input.split(/[ \n]/).map(Number);

  const dp = Array(n).fill(false);
  dp[0] = true;

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (!dp[j]) continue;

      const forceNeeded = (1 + Math.abs(a[i] - a[j])) * (i - j);
      if (forceNeeded <= k) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n - 1] ? "YES" : "NO";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
