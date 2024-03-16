const isLucky = (n) => {
  const s = n.toString();
  return s.length === new Set(s.split("")).size;
};

const solution = (input) => {
  const lines = input.split("\n");
  const luckyRoomNumber = Array(5001);
  luckyRoomNumber[0] = 0;

  for (let i = 1; i <= 5000; i++) {
    luckyRoomNumber[i] = luckyRoomNumber[i - 1] + (isLucky(i) ? 1 : 0);
  }

  return lines
    .map((v) => v.split(" ").map(Number))
    .map(([a, b]) => luckyRoomNumber[b] - luckyRoomNumber[a - 1])
    .join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
