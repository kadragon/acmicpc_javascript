const getPrimes = (maxValue) => {
  if (maxValue < 2) return [];
  const isPrime = Array(maxValue + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 4; i <= maxValue; i += 2) {
    isPrime[i] = false;
  }

  for (let i = 3; i * i <= maxValue; i += 2) {
    if (isPrime[i]) {
      for (let j = i * i; j <= maxValue; j += 2 * i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
};

const solution = (input) => {
  const [N, M, ...cows] = input.split(/\s+/).map(Number);

  const candidateSums = new Set();
  let maxSum = 0;

  const totalMasks = 1 << N;

  const bitCount = (mask) => {
    let count = 0;
    while (mask) {
      count += mask & 1;
      mask >>= 1;
    }
    return count;
  };

  for (let mask = 0; mask < totalMasks; mask++) {
    if (bitCount(mask) === M) {
      let sum = 0;
      for (let i = 0; i < N; i++) {
        if (mask & (1 << i)) {
          sum += cows[i];
        }
      }
      candidateSums.add(sum);
      maxSum = Math.max(maxSum, sum);
    }
  }

  const isPrime = getPrimes(maxSum);
  const result = Array.from(candidateSums).filter((sum) => isPrime[sum]);

  if (result.length === 0) return "-1";
  return result.sort((a, b) => a - b).join(" ");
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin", "utf8").trim();
  console.log(solution(input));
}

exports.solution = solution;
