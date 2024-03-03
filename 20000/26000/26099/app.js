const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const n = BigInt(input);
let ans = -1;

for (let i = 0; i <= 12; i += 3) {
  const k = n - BigInt(i);
  if (k >= 0 && k % BigInt(5) == 0) {
    ans = k / BigInt(5) + BigInt(i / 3);
    break;
  }
}

console.log(ans.toString());
