const solution = (input) => {
  const [, ...arr] = input.split(/\s+/g).map(Number);
  const sorted = [...arr].sort((a, b) => a - b);
  const indices = {};

  sorted.forEach((v, i) => {
    if (!indices[v]) indices[v] = [i];
    else indices[v].push(i);
  });

  const result = [];
  for (const v of arr) result.push(indices[v].shift());

  return result.join(" ");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
