const solution = (input) => {
  const n = BigInt(input);
  let result = 0n;
  let start = 0n;
  let end = n;

  while (start <= end) {
    let mid = (start + end) / 2n;
    if (mid * mid <= n) {
      result = mid;
      start = mid + BigInt(1);
    } else {
      end = mid - BigInt(1);
    }
  }

  result = result * result < n ? result + 1n : result;
  return result.toString();
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
