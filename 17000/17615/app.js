const lcut = (str, c) => {
  let i = 0;
  while (str[i] === c) i++;
  return str.slice(i);
};

const rcut = (str, c) => {
  let i = str.length - 1;
  while (str[i] === c) i--;
  return str.slice(0, i + 1);
};

const count = (str, c) => {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) if (str[i] === c) cnt++;

  return cnt;
};

const solution = (input) => {
  let [, balls] = input.split("\n");
  let min = 1e9;
  for (const color of "RB") {
    const lcnt = count(lcut(balls, color), color);
    const rcnt = count(rcut(balls, color), color);
    min = Math.min(min, lcnt, rcnt);
  }
  return min;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
