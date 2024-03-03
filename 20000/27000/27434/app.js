const solution = (input) => {
  const n = +input;
  return factorial(1, n).toString();
};

const factorial = (a, n) => {
  if (a < n) {
    let mid = ~~((a + n) / 2);
    return BigInt(factorial(a, mid)) * BigInt(factorial(mid + 1, n));
  }
  return a;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
