const solution = (input) => {
  const [n, ...times] = input.split(/[ \n]/).map(Number);
  const sumTime = times.reduce((a, b) => a + b) + 8 * (n - 1);

  return `${Math.floor(sumTime / 24)} ${sumTime % 24}`;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
