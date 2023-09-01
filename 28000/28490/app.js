const solution = (input) => {
  const [, ...frames] = input.split("\n");
  let max = 0;

  for (const frame of frames) {
    const [w, h] = frame.split(" ").map(Number);
    const size = w * h;
    if (max < size) max = size;
  }

  return max;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
