const solution = (input) => {
  const [n, ...levels] = input.split("\n").map(Number);

  if (n == 0) return 0;

  levels.sort((a, b) => a - b);
  const cut = Math.round(n * 0.15);

  let sum = 0;
  for (let i = cut; i < n - cut; i++) sum += levels[i];

  return Math.round(sum / (n - cut * 2));
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
