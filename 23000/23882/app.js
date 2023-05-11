const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [d, tmp] = input.split("\n");
const [n, k] = d.split(" ").map((v) => +v);
const data = tmp.split(" ").map((v) => +v);

let dp = 0;

for (let i = 0; i < n; i++) {
  const maxIdx = data.indexOf(Math.max(...data.slice(0, n - i)));

  if (maxIdx != n - i - 1) {
    [data[maxIdx], data[n - i - 1]] = [data[n - i - 1], data[maxIdx]];
    if (++dp == k) {
      console.log(data.join(" "));
      break;
    }
  }
}

if (dp < k) console.log(-1);
