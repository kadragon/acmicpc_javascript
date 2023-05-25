const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const cutNumber = Math.pow(10, 12);
const numbers = input.split(/\s/).slice(1).map(Number);
const reversedNumbers = [];

for (const num of numbers) {
  if (num <= cutNumber) {
    reversedNumbers.push(Number([...num.toString()].reverse().join("")));
  }
}

console.log(reversedNumbers.sort((a, b) => a - b).join("\n"));
