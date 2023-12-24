const solution = (input) => {
  const n = Number(input);
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
    while (result % 10 === 0) result /= 10;
    result %= 1000000000000;
  }

  return (result % 100000).toString().padStart(5, "0");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
