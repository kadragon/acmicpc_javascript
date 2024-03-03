const solution = (input) => {
  const inputArr = input.split("\n");
  const n = +inputArr[0];
  const arr = inputArr[1].split(" ").map(Number);
  const questions = inputArr.slice(3).map((v) => v.split(" ").map(Number));

  const prefixSum = arr.reduce((acc, cur, i) => {
    acc[i + 1] = acc[i] + cur;
    return acc;
  }, new Array(n + 1).fill(0));

  const result = questions.map(
    ([start, end]) => prefixSum[end + 1] - prefixSum[start]
  );

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
