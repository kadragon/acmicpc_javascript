const solution = (input) => {
  const candys = input.split("\n")[1].split(" ").map(Number);
  let result = 0;
  let odds = [];

  for (const candy of candys) {
    result += candy;
    if (candy % 2 === 1) odds.push(candy);
  }

  if (odds.length % 2 == 1) result -= Math.min(...odds);

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
