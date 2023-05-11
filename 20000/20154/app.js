const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const base = [
  3, 2, 1, 2, 3, 3, 3, 3, 1, 1, 3, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1,
];

let sum = 0;

for (const v of input.split("")) {
  sum += base[v.charCodeAt() - 65];
}

console.log(sum % 2 ? "I'm a winner!" : "You're the winner?");
