const MOD = 1000000007;

const solution = (input) => {
  const splitedInput = input.split("\n");
  const [N, M] = splitedInput[0].split(" ").map(Number);
  let dp = [0, ...splitedInput[N].split(" ").map(Number), 0];

  for (let i = N - 1; i > 0; i--) {
    const glassList = [0, ...splitedInput[i].split(" ").map(Number), 0];

    for (let j = 1; j <= M; j++)
      if (glassList[j] === 1)
        glassList[j] = (dp[j - 1] + dp[j] + dp[j + 1]) % MOD;

    dp = [...glassList];
  }

  return dp.reduce((acc, cur) => (acc + cur) % MOD);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
