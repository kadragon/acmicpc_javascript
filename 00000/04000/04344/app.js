const solution = (input) => {
  const quests = input
    .split("\n")
    .slice(1)
    .map((v) => v.split(" ").map(Number));

  let result = "";

  for (const quest of quests) {
    const n = quest.shift();
    const sum = quest.reduce((acc, cur) => acc + cur, 0);

    const overAvg = quest.filter((v) => v * n > sum).length;

    result += ((overAvg * 100) / n).toFixed(3) + "%\n";
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
