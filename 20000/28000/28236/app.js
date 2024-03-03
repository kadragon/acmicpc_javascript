const solution = (input) => {
  const [[n, m, k], ...locs] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  let min = [0, n + m];
  for (let i = 0; i < k; i++) {
    const [x, y] = locs[i];
    const dist = x - 1 + m - y;
    if (dist < min[1]) min = [i + 1, dist];
  }

  return min[0];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
