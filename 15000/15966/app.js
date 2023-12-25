const solution = (input) => {
  const [, ...arr] = input.split(/[ \n]/).map(Number);
  const dp = Array(1000001).fill(0);

  let maxLen = 0;

  for (const num of arr) {
    const len = dp[num - 1] + 1;
    dp[num] = len;
    maxLen = Math.max(maxLen, len);
  }

  return maxLen;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
