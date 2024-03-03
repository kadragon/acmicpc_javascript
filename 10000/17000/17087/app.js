const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const solution = (input) => {
  const [N, S, ...positions] = input.split(/\s/).map(Number);
  const distances = [
    ...new Set(positions.map((position) => Math.abs(position - S))),
  ];

  let minDistance = distances[0];
  for (let i = 1; i < N; i++) minDistance = gcd(minDistance, distances[i]);

  return minDistance;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
