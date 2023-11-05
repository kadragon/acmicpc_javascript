const solution = (input) => {
  const [n, , ...arr] = input.split(/\s/).map(Number);
  arr.push(n + (n - arr[arr.length - 1]));
  arr.unshift(-arr[0]);

  let result = 0;

  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const diff = arr[i] - arr[i - 1];
    result = Math.max(result, Math.ceil(diff / 2));
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
