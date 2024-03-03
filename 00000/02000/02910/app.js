const solution = (input) => {
  const numbers = input.split(/\s+/).slice(2).map(Number);
  const frequencyMap = new Map();

  numbers.forEach((n) => {
    const frequency = frequencyMap.get(n) || 0;
    frequencyMap.set(n, frequency + 1);
  });

  const sorted = [...frequencyMap]
    .sort((a, b) => b[1] - a[1])
    .map(([number, frequency]) => Array(frequency).fill(number))
    .flat();

  return sorted.join(" ");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
