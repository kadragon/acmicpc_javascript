const solution = (input) => {
  const [X, K, ...socks] = input.split(/\s/).map(Number);
  const count = Array.from({ length: 2 }, () =>
    Array.from({ length: K + 1 }, () => 0)
  );

  for (let i = 0; i < X * 2; i++) count[~~(i / X)][socks[i]]++;

  let result = X ** 2;
  for (let i = 1; i <= K; i++) result -= count[0][i] * count[1][i];

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
