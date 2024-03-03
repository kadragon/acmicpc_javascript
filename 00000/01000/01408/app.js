const foramtTime = (second) => {
  return new Date(second * 1000).toISOString().slice(11, 19);
};

const solution = (input) => {
  const calcToSecond = ([h, m, s]) => h * 3600 + m * 60 + s;

  const [nowSec, startSec] = input
    .split("\n")
    .map((v) => v.split(":").map(Number))
    .map(calcToSecond);

  let remainSec =
    nowSec <= startSec ? startSec - nowSec : 24 * 3600 - nowSec + startSec;

  return foramtTime(remainSec);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
