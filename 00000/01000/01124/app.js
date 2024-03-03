const solution = (input) => {
  const [A, B] = input.split(" ").map(Number);
  const max = Math.max(A, B);

  const dp = Array(max + 1).fill(true);
  dp[0] = dp[1] = false;

  for (let i = 2; i <= max; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= max; j++) {
        dp[i * j] = false;
      }
    }
  }

  const primes = dp.map((v, i) => (v ? i : 0)).filter((v) => v);

  let result = 0;
  for (let i = A; i <= B; i++) {
    let count = 0;

    let tmp = i;
    for (const prime of primes) {
      while (tmp % prime === 0) {
        tmp /= prime;
        count++;
      }
    }

    if (dp[count]) result++;
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
