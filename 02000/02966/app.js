const solution = (input) => {
  const players = ["Adrian", "Bruno", "Goran"];
  const answers = input.split("\n").slice(1)[0];
  const pickers = ["ABC".repeat(34), "BABC".repeat(25), "CCAABB".repeat(17)];
  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++)
    for (let j = 0; j < 3; j++) if (answers[i] === pickers[j][i]) scores[j]++;

  const maxScore = Math.max(...scores);
  const result = [maxScore];
  for (let i = 0; i < 3; i++)
    if (scores[i] === maxScore) result.push(players[i]);

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
