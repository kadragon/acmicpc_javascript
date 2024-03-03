const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const [A, B] = input.split("\n").map(BigInt);
console.log((A + B).toString());
