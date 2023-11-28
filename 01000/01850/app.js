const solution = (input) => {
  const [a, b] = input.split(" ").map(BigInt);

  const gcd = (a, b) => {
    while (b !== 0n) {
      [a, b] = [b, a % b];
    }
    return Number(a);
  };

  return "1".repeat(gcd(a, b));
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
