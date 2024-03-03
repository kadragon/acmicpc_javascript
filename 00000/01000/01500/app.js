const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [S, K] = input.split(" ").map((v) => +v);
const [base, remind] = [Math.floor(S / K), S % K];

console.log(Math.pow(base, K - remind) * Math.pow(base + 1, remind));
