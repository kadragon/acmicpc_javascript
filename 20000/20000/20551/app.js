const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const [n, , ...values] = input.split(/\s/).map((v) => +v);
const data = values.slice(0, n).sort((a, b) => a - b);
const targets = values.slice(n);

const binarySearch = (target) => {
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (data[mid] >= target) end = mid - 1;
    else start = mid + 1;
  }

  return data[start] === target ? start : -1;
};

const answer = targets.map((t) => binarySearch(t));

console.log(answer.join("\n"));
