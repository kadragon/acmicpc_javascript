const solution = (input) => {
  const prices = input.split("\n")[1].split(" ").map(Number);

  let benefit = 0;
  let minPrice = prices[0];

  for (const price of prices) {
    benefit = Math.max(benefit, price - minPrice);
    minPrice = Math.min(minPrice, price);
  }

  return benefit;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
