const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const MOD = 1000000007;

const [n, ...arr] = input.split(/\s/).map((v) => +v);
let ans = 0;
let suffixSum = 0;
const prefixSum = [];

for (let i = 0; i < n; i++) {
  suffixSum += arr[i];
  suffixSum %= MOD;
  prefixSum.push(suffixSum);
}

for (let i = 0; i < n; i++) {
  ans += arr[i] * (suffixSum - prefixSum[i]);
  ans %= MOD;
}

console.log(ans);
