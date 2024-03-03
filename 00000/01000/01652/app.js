const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [n, ...place] = input.split("\n").map((v) => v.trim());
let [w, h] = [0, 0];

const getCounter = (str) =>
  str
    .split("X")
    .map((v) => v.length)
    .filter((v) => v >= 2).length;

for (const row of place) {
  w += getCounter(row);
}

for (let j = 0; j < n; j++) {
  let tmp = "";
  for (let i = 0; i < n; i++) {
    tmp += place[i][j];
  }

  h += getCounter(tmp);
}

console.log(w, h);
