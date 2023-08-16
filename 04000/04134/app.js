const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) if (num % i === 0) return false;

  return true;
};

const solution = (input) => {
  const [, ...questions] = input.split("\n").map(Number);

  const result = [];

  for (let question of questions) {
    while (!isPrime(question)) question++;
    result.push(question);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
