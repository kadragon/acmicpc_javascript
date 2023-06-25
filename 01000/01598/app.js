const getPoint = (v) => {
  const x = ~~(v / 4);
  const y = v % 4;

  return y == 0 ? [x, 4] : [x + 1, y];
};

const solution = (input) => {
  const [a, b] = input.split(" ").map(Number);
  const [ax, ay] = getPoint(a);
  const [bx, by] = getPoint(b);

  return Math.abs(ax - bx) + Math.abs(ay - by);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
