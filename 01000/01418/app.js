const solution = (input) => {
  const [n, k] = input.split("\n").map(Number);
  const isPrime = Array(k + 1).fill(true);
  const primes = [];

  for (let i = 2; i <= k; i++) {
    if (!isPrime[i]) continue;
    primes.push(i);
    for (let j = 2; i * j <= k; j++) isPrime[i * j] = false;
  }

  let count = 1;
  const primesLen = primes.length;

  const calc = (idx, num) => {
    for (let i = idx; i < primesLen; i++) {
      const nextNum = num * primes[i];
      if (nextNum > n) continue;
      count++;
      calc(i, nextNum);
    }
  };

  calc(0, 1);

  return count;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
