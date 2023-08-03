const solution = (input) => {
  const [, ...bars] = input.split("\n").map(Number);

  return bars.reduceRight(
    (acc, cur) => {
      if (cur > acc.max) {
        acc.max = cur;
        acc.count++;
      }
      return acc;
    },
    { max: 0, count: 0 }
  ).count;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
