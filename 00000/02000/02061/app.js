const solution = (input) => {
  let [k, l] = input.split(" ");
  k = BigInt(k);
  l = +l;

  const primes = [];
  const isPrime = Array(l + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i < l; i++)
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * i; j < l; j += i) isPrime[j] = false;
    }

  for (const prime of primes)
    if (k % BigInt(prime) === 0n) return "BAD " + prime;

  return "GOOD";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
