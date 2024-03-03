const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [n, ...heights] = input.split(/\s/).map(Number);
let pushes = 1;

for (let i = 1; i < n; i++) {
  if (heights[i - 1] <= heights[i]) {
    pushes++;
  }
}

console.log(pushes);
