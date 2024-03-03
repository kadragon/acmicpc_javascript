const solution = (input) => {
  const [, ...numbers] = input.split(/[ \n]/).map(BigInt);

  const sum = numbers.reduce((acc, cur) => acc + cur, 0n);

  if (sum === 0n) {
    return "0";
  }

  let highestBit = 0n;
  for (let bit = 1n; bit <= sum; bit <<= 1n) {
    if ((sum & bit) !== 0n) {
      highestBit = bit;
    }
  }

  return highestBit.toString();
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
