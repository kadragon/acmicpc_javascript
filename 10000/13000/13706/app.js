const solution = (input) => {
  const n = BigInt(input);

  let left = 1n;
  let right = n;

  while (left <= right) {
    const mid = (left + right) / 2n;
    const square = mid * mid;

    if (square === n) {
      return mid.toString();
    } else if (square < n) {
      left = mid + BigInt(1);
    } else {
      right = mid - BigInt(1);
    }
  }
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
