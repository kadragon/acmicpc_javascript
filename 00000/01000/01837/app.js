const getPrimeNumbers = (n) => {
  const primeNumbers = [2];
  const check = new Array(n + 1).fill(true);

  let idx = 0;
  for (let i = 3; i <= n; i += 2) {
    if (check[i]) {
      primeNumbers[idx++] = i;

      for (let j = i * 2; j <= n; j += i) {
        check[j] = false;
      }
    }
  }

  return primeNumbers.slice(0, idx);
};

const solution = (input) => {
  const [p, k] = input.split(" ").map(BigInt);

  const primeNumbers = getPrimeNumbers(Number(k));

  for (let i of primeNumbers) {
    if (p % BigInt(i) === 0n) {
      return `BAD ${i.toString()}`;
    }
  }

  return "GOOD";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
