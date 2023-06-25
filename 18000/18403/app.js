const solution = (input) => {
  const quests = input
    .split("\n")
    .slice(1)
    .map((v) => v.split(", ").map(Number));

  const result = [];

  for (const quest of quests) {
    const subResult = [];
    for (const year of quest) {
      if (year % 4 == 0) subResult.push(year);
    }

    result.push(subResult.join(" "));
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
