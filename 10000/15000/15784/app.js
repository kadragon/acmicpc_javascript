const solution = (input) => {
  const [n, x, y, ...matrix] = input.split(/[ \n]/).map(Number);

  const rowStartIndex = (x - 1) * n;
  const rowMax = Math.max(...matrix.slice(rowStartIndex, rowStartIndex + n));

  const colMax = Array.from(
    { length: n },
    (_, i) => matrix[y - 1 + i * n]
  ).reduce((max, value) => Math.max(max, value), 0);

  const valueAtXY = matrix[(x - 1) * n + (y - 1)];
  return Math.max(rowMax, colMax) === valueAtXY ? "HAPPY" : "ANGRY";
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync(0, "utf-8").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
