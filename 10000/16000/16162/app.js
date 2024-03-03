const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

let [n, a, d, ...arr] = input.split(/[ \n]/).map(Number);
let k = 0;

for (let i = 0; i < n; i++) {
  if (a + d * k === arr[i]) {
    k++;
  }
}

console.log(k);
