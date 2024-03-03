const solution = (input) => {
  let [, ...Matryoshka] = input.split(/\s/).map(Number);

  const countSize = Matryoshka.reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());

  return Math.max(...countSize.values());
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
