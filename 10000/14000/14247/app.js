const solution = (input) => {
  const [[n], treeHeight, growth] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  growth.sort((a, b) => a - b);

  let result = treeHeight.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < n; i++) {
    result += growth[i] * i;
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
