const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [n, m, a, k] = input.split(" ").map((v) => +v);

max_rank = a - k >= n - 1 ? n : a - k + 1;
min_rank = n - parseInt((n * m - a - m + k) / m);

console.log(max_rank, min_rank);
