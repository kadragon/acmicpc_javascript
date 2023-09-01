const solution = (input) => {
  let [K, D1, D2] = input.split(/[\n ]+/).map(Number);
  return K ** 2 - Math.pow(Math.abs(D1 - D2) * 0.5, 2);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
