const solution = (input) => {
  const arr = input.trim().split("\n").map(Number);
  const N = arr[0];

  let maxPerson = 0;
  let maxCount = 0;
  
  const visited = Array(N + 1).fill(false);
  const dp = Array(N + 1).fill(0);
  
  const meeting = (start) => {
    if (dp[start] !== 0) return dp[start];

    let count = 0;
    let cur = start;
    const path = [];

    while (!visited[cur]) {
      visited[cur] = true;
      path.push(cur);
      cur = arr[cur];
      count++;
    }

    path.forEach((p) => (dp[p] = count));
    return count;
  };

  for (let i = 1; i <= N; i++) {
    visited.fill(false);
    let count = meeting(i);
    if (count > maxCount) {
      maxCount = count;
      maxPerson = i;
    }
  }

  return maxPerson;
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString();
  console.log(solution(input));
}

exports.solution = solution;