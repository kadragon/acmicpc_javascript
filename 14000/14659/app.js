const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const [n, ...arr] = input.split(/[ \n]+/).map(Number);
arr.push(100001);

let max_idx = 0;
let max_len = 0;

for (let i = 1; i <= n; i++) {
  if (arr[i] > arr[max_idx]) {
    max_len = Math.max(i - max_idx - 1, max_len);
    max_idx = i;
  }
}

console.log(max_len);
