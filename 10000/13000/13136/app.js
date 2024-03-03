const solution = (input) => {
  const [r, c, n] = input.split(" ").map(Number);
  const row = Math.ceil(r / n);
  const col = Math.ceil(c / n);

  return row * col;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
