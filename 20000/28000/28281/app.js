const solution = (input) => {
  const [[n, x], prices] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let min = 2001;
  for (let i = 0; i < n - 1; i++)
    min = Math.min(min, prices[i] + prices[i + 1]);

  return min * x;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
