const solution = (input) => {
  const [n, k, ...base] = input.split(/\s+/).map(Number);
  base.sort((a, b) => a - b);
  const numbers = [...base];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < k; j++) {
      const nextNumber = numbers[i] * 10 + base[j];
      if (nextNumber <= n) numbers.push(nextNumber);
    }
  }

  return numbers[numbers.length - 1];
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
