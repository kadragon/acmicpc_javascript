const solution = (input) => {
  const [aAttack, aHealth, bAttack, bHealth] = input.split(/[ \n]/).map(Number);
  const aCutCount = Math.ceil(aHealth / bAttack);
  const bCutCount = Math.ceil(bHealth / aAttack);

  return aCutCount > bCutCount
    ? "PLAYER A"
    : aCutCount != bCutCount
    ? "PLAYER B"
    : "DRAW";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
