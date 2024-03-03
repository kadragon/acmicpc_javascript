const solution = (input) => {
  const [str, dex, int, luk, n] = input.split(" ").map(Number);
  const sum = str + dex + int + luk;

  const leak = n * 4 - sum;
  return leak > 0 ? leak : 0;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
