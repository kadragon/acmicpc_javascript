const solution = (input) => {
  const [, ...heights] = input.split(/[ \n]/).map(Number);
  const left = new Set();
  const right = new Set();

  for (const height of heights) {
    if (left.has(height)) {
      if (!right.has(height)) right.add(height);
    } else left.add(height);
  }

  return left.size + right.size;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
