const solution = (input) => {
  const [[, D], ...shortcuts] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  const dist = Array(D + 1)
    .fill()
    .map((_, i) => i);

  shortcuts.sort((a, b) => a[1] - b[1]);

  for (const shortcut of shortcuts) {
    const [start, end, cost] = shortcut;
    if (end > D) continue;

    if (dist[end] > dist[start] + cost) {
      dist[end] = dist[start] + cost;
      for (let i = end + 1; i <= D; i++) {
        if (dist[i] > dist[i - 1] + 1) {
          dist[i] = dist[i - 1] + 1;
        } else {
          break;
        }
      }
    }
  }

  return dist[D];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
