const solution = (input) => {
  const [, ...numbers] = input.split(/\s/).map(Number);
  const cost = [0, 0];
  const acc = [0, 0];

  for (const number of numbers) {
    if (number % 2) {
      cost[1]++, (acc[0] += cost[0]);
    } else {
      cost[0]++, (acc[1] += cost[1]);
    }
  }

  return Math.min(...acc);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
