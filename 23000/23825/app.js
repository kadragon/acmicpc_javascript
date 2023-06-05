const solution = (input) => {
  const [s, a] = input.split(" ").map((v) => Math.floor(+v / 2));
  return Math.min(s, a);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
