const getPrimeNumbers = (n) => {
  const primeNumbers = [];
  const isPrime = Array(n + 1).fill(true);

  for (let i = 2; i <= n; i++)
    if (isPrime[i]) {
      primeNumbers.push(i);
      for (let j = i * i; j <= n; j += i) isPrime[j] = false;
    }

  return primeNumbers;
};

const upperBound = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) start = mid + 1;
    else end = mid;
  }

  return arr[end];
};

const solution = (input) => {
  const [, ...nums] = input.split("\n").map(Number);
  const primeNumbers = getPrimeNumbers(Math.max(...nums));

  const productPrimeList = [];
  const len = primeNumbers.length;
  for (let i = 0; i < len; i++)
    for (let j = i + 1; j < len; j++) {
      const cal = primeNumbers[i] * primeNumbers[j];
      if (cal > 100001) break;

      productPrimeList.push(cal);
    }

  productPrimeList.sort((a, b) => a - b);

  return nums.map((n) => upperBound(productPrimeList, n)).join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
