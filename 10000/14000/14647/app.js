const solution = (input) => {
  input = input.split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((row) => row.split(" ").map(Number));

  const nineCountRow = Array.from({ length: n }, () => 0);
  const nineCountCol = Array.from({ length: m }, () => 0);
  let totalCount = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      while (board[i][j]) {
        if (board[i][j] % 10 === 9) {
          nineCountRow[i]++;
          nineCountCol[j]++;
          totalCount++;
        }
        board[i][j] = Math.floor(board[i][j] / 10);
      }

  const r_max = Math.max(...nineCountRow);
  const c_max = Math.max(...nineCountCol);

  return totalCount - Math.max(r_max, c_max);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
