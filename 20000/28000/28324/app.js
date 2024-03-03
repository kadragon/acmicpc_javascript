const solution = (input) => {
  const [n, ...arr] = input.split(/\s/).map(Number);
  let ans = 1;
  let prev = 1;

  for (let i = n - 2; i >= 0; i--) {
    const cur = Math.min(prev + 1, arr[i]);
    ans += cur;
    prev = cur;
  }

  return ans;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
