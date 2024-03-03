const solution = (input) => {
  const [time, alcohol] = input.split(" ").map(Number);
  return time >= 12 && time <= 16 && alcohol == 0 ? 320 : 280;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
