const solution = (input) => {
  const [N, M] = input.split(" ").map(Number);
  return N * 100 >= M ? "Yes" : "No";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
