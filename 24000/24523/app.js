const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [n, ...arr] = input.split(/\s/).map((v) => +v);
const result = Array(n);

result[n - 1] = -1;

for (let i = n - 2; i >= 0; i--) {
  result[i] = arr[i] != arr[i + 1] ? i + 2 : result[i + 1];
}

console.log(result.join(" "));
