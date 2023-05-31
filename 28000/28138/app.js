const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const [n, r] = input.split(" ").map(Number);

const k = n - r;
let ans = 0;

for (let i = 1; i * i <= k; i++) {
  if (k % i !== 0) continue;
  if (r < i) ans += i;
  if (i * i !== k && r < k / i) ans += k / i;
}

console.log(ans);
