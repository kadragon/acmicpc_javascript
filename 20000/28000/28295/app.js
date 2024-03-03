const solution = (input) => {
  const orders = input.split("\n").map(Number);
  const now = orders.reduce((acc, cur) => acc + cur, 0);

  return "NESW"[now % 4];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
