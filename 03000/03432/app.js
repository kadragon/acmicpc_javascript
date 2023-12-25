const solution = (input) => {
  const lines = input.split("\n");
  const n = Number(lines[0]);

  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];

  const checkWinner = (board) => {
    let isAWinner = false;
    let isBWinner = false;

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        for (let dir = 0; dir < 4; dir++) {
          const nextRow = [
            row,
            row + directions[dir][0],
            row + directions[dir][0] * 2,
          ];
          const nextCol = [
            col,
            col + directions[dir][1],
            col + directions[dir][1] * 2,
          ];

          if (
            nextRow.some((r) => r < 0 || r >= 5) ||
            nextCol.some((c) => c < 0 || c >= 5)
          ) {
            continue;
          }

          if (
            board[nextRow[0]][nextCol[0]] === board[nextRow[1]][nextCol[1]] &&
            board[nextRow[1]][nextCol[1]] === board[nextRow[2]][nextCol[2]]
          ) {
            if (board[nextRow[0]][nextCol[0]] === "A") {
              isAWinner = true;
            } else if (board[nextRow[0]][nextCol[0]] === "B") {
              isBWinner = true;
            }
          }
        }
      }
    }

    if ((isAWinner && isBWinner) || (!isAWinner && !isBWinner)) {
      return "draw";
    }
    if (isAWinner) {
      return "A wins";
    }
    if (isBWinner) {
      return "B wins";
    }
  };

  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(checkWinner(lines.slice(1 + i * 5, 1 + i * 5 + 5)));
  }

  return results.join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
