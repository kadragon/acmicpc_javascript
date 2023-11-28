const solution = (input) => {
  const [, ...moneys] = input.split("\n").map((v) => v.split(" ").map(Number));

  const moneyData = {
    136: 1000,
    142: 5000,
    148: 10000,
    154: 50000,
  };

  let result = 0;
  for (const [a] of moneys) {
    result += moneyData[a];
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
