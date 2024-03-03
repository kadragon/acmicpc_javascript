const solution = (input) => {
  let [n, d] = input.split(" ");
  n = Number(n);
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const iStr = i.toString();
    const len = iStr.length;
    for (let j = 0; j < len; j++) if (iStr[j] === d) count++;
  }

  return count;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
