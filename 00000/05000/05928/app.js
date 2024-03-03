const solution = (input) => {
  const [d, h, m] = input.split(" ").map(Number);
  const start = 11 * 24 * 60 + 11 * 60 + 11;
  const end = d * 24 * 60 + h * 60 + m;
  const result = end - start;
  return result < 0 ? -1 : result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
