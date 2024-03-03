const solution = (input) => {
  const [n, m] = input.split(" ").map(Number);

  if (n > m) return m * 2 + 1;
  else return n * 2 - 1;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
