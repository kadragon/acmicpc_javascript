const printLine = (n) => {
  const blockCount = Math.floor(n / 5);
  const remainder = n % 5;

  let line = "++++ ".repeat(blockCount);
  line += "|".repeat(remainder);

  return line;
};

const solution = (input) => {
  const [, ...arr] = input.split(/\s+/g).map(Number);

  let result = arr.map(printLine);

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
