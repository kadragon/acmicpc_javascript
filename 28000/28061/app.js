const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

let [n, ...arr] = input.split(/\s/).map(Number);

const maxValue = arr.reduce((max, cur, idx) => {
  const currunt = cur - (n - idx);
  return max < currunt ? currunt : max;
}, 0);

console.log(maxValue);
