const solution = (input) => {
  input = input.split("\n");
  const [n, m] = input.shift().split(" ").map(Number);
  const arr = input.map((v) => v.split(" ").map(Number));
  const visited = Array.from(Array(n), () => Array(m).fill(-1));

  let sx = -1;
  let sy = -1;

  const findStart = () => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] == 2 && sx == -1) {
          sx = i;
          sy = j;
        }
        if (arr[i][j] == 0) visited[i][j] = 0;
      }
    }
  };

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const queue = [];

  const bfs = (x, y) => {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] != -1) continue;

      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  };

  findStart();
  visited[sx][sy] = 0;
  queue.push([sx, sy]);

  while (queue.length) {
    const [x, y] = queue.shift();
    bfs(x, y);
  }

  return visited.map((v) => v.join(" ")).join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
