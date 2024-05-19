const primeNumber = (n) => {
  const isPrime = new Array(n + 1).fill(true);
  const primes = [];

  for (let i = 2; i * i <= n; i++)
    if (isPrime[i]) for (let j = i * i; j <= n; j += i) isPrime[j] = false;

  for (let i = 2; i <= n; i++) if (isPrime[i]) primes.push(i);

  return primes;
};

const solution = (input) => {
  const MAX = 113;
  const [, ...arr] = input.split("\n").map(Number);

  const primes = primeNumber(MAX);
  const ableElement = new Array(MAX * 2).fill(false);

  primes.forEach((a, i) => {
    primes.slice(i).forEach((b) => {
      ableElement[a + b] = true;
    });
  });

  return arr.map((v) => (ableElement[v] ? "Yes" : "No")).join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
