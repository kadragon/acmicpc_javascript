const solution = (input) => {
  const [, ...promises] = input.split("\n");

  const originalPromises = new Set([
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you",
    "Never gonna stop",
  ]);

  for (const promise of promises)
    if (!originalPromises.has(promise)) return "Yes";

  return "No";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
