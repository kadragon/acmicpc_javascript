const solution = (input) => {
  let [a, b, n] = input.split(" ").map(Number);

  if (![1, 3, 7, 9].includes(~~(b / 10))) {
    return -1;
  }

  const plusNumber = [0, 1, 3, 1, 1, 3, 1, 1, 3, 7];
  a = a * 10 + plusNumber[a % 10];

  return `${a}${"1".repeat(n - 5)}${b}`;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
