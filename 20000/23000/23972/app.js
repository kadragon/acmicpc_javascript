const solution = (input) => {
  const [k, n] = input.split(" ").map(Number);

  if (n == 1) return -1;

  for (let i = k + 1; ; i++) if ((i - k) * n >= i) return i;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
