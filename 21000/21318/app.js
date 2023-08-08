const solution = (input) => {
  const splitedInput = input.split("\n");
  const N = +splitedInput[0];
  const LEVELS = splitedInput[1].split(" ").map(Number);

  const dp = Array.from({ length: N + 1 }, () => 0);

  for (let i = 1; i <= N; i++)
    dp[i] = LEVELS[i - 1] > LEVELS[i] ? dp[i - 1] + 1 : dp[i - 1];

  const result = [];
  for (const question of splitedInput.slice(3)) {
    const [a, b] = question.split(" ").map(Number);
    result.push(dp[b - 1] - dp[a - 1]);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
