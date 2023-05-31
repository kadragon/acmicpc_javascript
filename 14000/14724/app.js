const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const members = input
  .split("\n")
  .slice(1)
  .map((e) => e.split(" ").map(Number));

let maxIdx = 0;
let maxCnt = 0;

for (let i = 0; i < 9; i++) {
  const cnt = Math.max(...members[i]);
  if (maxCnt < cnt) {
    maxCnt = cnt;
    maxIdx = i;
  }
}

const team = [
  "PROBRAIN",
  "GROW",
  "ARGOS",
  "ADMIN",
  "ANT",
  "MOTION",
  "SPG",
  "COMON",
  "ALMIGHTY",
];

console.log(team[maxIdx]);
