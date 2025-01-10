const solution = (input) => {
  const [header, baseLine, ...dataLines] = input.trim().split("\n");
  const [, M, x, y] = header.split(" ").map(Number);
  const [, base] = baseLine.split(" ").map(Number);

  const others = [];
  for (const line of dataLines) {
    const [t, v] = line.split(" ").map(Number);
    if (t >= 2024000000 && t < 2025000000) {
      const adjustedValue = v + Math.max(0, y - (x - v));
      if (others.length < M) {
        others.push(adjustedValue);
        others.sort((a, b) => b - a);
      } else if (adjustedValue > others[M - 1]) {
        others[M - 1] = adjustedValue;
        others.sort((a, b) => b - a);
      }
    }
  }

  if (others.length < M) return "YES\n0";

  return others[M - 1] >= base + y
    ? "NO"
    : `YES\n${Math.max(0, others[M - 1] - base)}`;
};

if (process.platform === "linux") {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;