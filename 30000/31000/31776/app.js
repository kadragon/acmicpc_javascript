const solution = (input) => {
  const teams = input.split("\n").slice(1).map((v) => v.split(" ").map(Number));

  let attentiveCount = 0;

  for (const [a, b, c] of teams) {
    if (a == -1) continue;

    if (a <= b && b <= c) {
      attentiveCount += 1;
    }
    else if (a <= b && c == -1) {
      attentiveCount += 1;
    }
    else if (b == -1 && c == -1) {
      attentiveCount += 1;
    }
  }

  return attentiveCount;
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;