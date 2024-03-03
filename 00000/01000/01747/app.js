function findPrimes(max) {
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let number = 2; number * number <= max; number++) {
    if (isPrime[number]) {
      for (
        let multiple = number * number;
        multiple <= max;
        multiple += number
      ) {
        isPrime[multiple] = false;
      }
    }
  }

  return isPrime.reduce((acc, val, index) => {
    if (val) acc.push(index);
    return acc;
  }, []);
}

const isPalindrome = (n) =>
  n.toString() === n.toString().split("").reverse().join("");

const solution = (input) => {
  const primes = findPrimes(1003001);
  const minNumber = +input;

  for (const prime of primes) {
    if (minNumber <= prime && isPalindrome(prime)) return prime;
  }
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
