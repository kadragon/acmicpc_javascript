const solution = (input) => {
  let [N, m, M, T, R] = input.split(" ").map(Number);
  let totalMinutes = 0;
  let currentPulse = m;

  if (m + T > M) return -1;

  while (N > 0) {
    totalMinutes++;
    if (currentPulse + T <= M) {
      currentPulse += T;
      N--;
    } else {
      currentPulse = Math.max(currentPulse - R, m);
    }
  }

  return totalMinutes;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
