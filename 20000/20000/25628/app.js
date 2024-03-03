const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [a, b] = input.split(" ").map(Number);

console.log(parseInt(a / 2) < b ? parseInt(a / 2) : b);
