const solution = (input) => {
  const [a, b] = input.split(" ").map(Number);
  const arr = Array(b + 1).fill(0);

  let i = 1;
  for (let j = 1; i <= b; j++) {
    for (let k = 1; k <= j; k++) {
      arr[i] = j + arr[i - 1];
      i++;
    }
  }

  return arr[b] - arr[a - 1];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
