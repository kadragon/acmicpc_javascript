const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const getMedian = (arr, len) => {
  const mid = Math.floor(len / 2);

  return len % 2 === 1 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};

const values = input.split("\n").map((v) => v.split(" ").map((v) => +v));
const answer = [];

for (const v of values.slice(0, -1)) {
  const len = v.shift();
  answer.push(getMedian(v, len));
}

answer.forEach((v, i) => {
  console.log(`Case ${i + 1}: ${v.toFixed(1)}`);
});
