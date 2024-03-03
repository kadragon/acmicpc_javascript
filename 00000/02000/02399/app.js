const solution = (input) => {
  const [n, ...numbers] = input.split(/[ \n]/).map(Number);
  numbers.sort((a, b) => a - b);

  let distanceSum = BigInt(0);

  for (let i = 0; i < n; i++) {
    distanceSum += BigInt(2 * numbers[i] * (2 * i - n + 1));
  }

  return distanceSum.toString();
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
