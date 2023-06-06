const solution = (input) => {
  const name = input.split("\n")[1];
  return name.split("").reduce((acc, cur) => acc + cur.charCodeAt(0) - 64, 0);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
