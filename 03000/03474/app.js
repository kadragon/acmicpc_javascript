const solution = (input) => {
  const nums = input.split("\n").slice(1).map(Number);
  const result = nums.map(getTrailingZeroCount);

  return result.join("\n");
};

const getTrailingZeroCount = (num) => {
  let count = 0;

  while (num >= 5) {
    num = Math.floor(num / 5);
    count += num;
  }

  return count;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
