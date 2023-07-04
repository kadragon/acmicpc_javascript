const solution = (input) => {
  const [a, b] = input.split("\n").slice(1).map(BigInt);
  return (a * b).toString();
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
