const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const [n, a, b] = input.split(" ").map(Number);

console.log(a === Math.max(n, b) ? "Anything" : a < b ? "Bus" : "Subway");
