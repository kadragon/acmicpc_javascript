const solution = (input) => {
  const numbers = input.split("\n")[1].split(" ").map(Number);
  let k = 1;

  numbers.forEach((num) => {
    if (num === k) k++;
  });

  return numbers.length - k + 1;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
