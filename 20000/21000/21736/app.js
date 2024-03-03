const solution = (input) => {
  input = input.split("\n");
  const [n, m] = input.shift().split(" ").map(Number);
  const map = input.map((v) => v.split(""));

  let result = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (map[i][j] === "I") {
        map[i][j] = "X";
        stack.push([i, j]);
      }

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const stack = [];

  while (stack.length > 0) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[nx][ny] !== "X") {
        if (map[nx][ny] === "P") result++;
        map[nx][ny] = "X";
        stack.push([nx, ny]);
      }
    }
  }

  return result == 0 ? "TT" : result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
