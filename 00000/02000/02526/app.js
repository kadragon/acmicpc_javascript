const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const [n, p] = input.split(" ").map(Number);
const arr = [];
let c = n;

while (!arr.includes(c)) {
  arr.push(c);
  c = (c * n) % p;
}

console.log(arr.length - arr.indexOf(c));
