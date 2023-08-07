const solution = (input) => {
  const [A, K] = input.split(" ").map(Number);

  let calculatedK = K;
  let operationCounter = 0;

  while (calculatedK > A) {
    if (calculatedK < A * 2) return operationCounter + calculatedK - A;

    if (calculatedK % 2 === 0) calculatedK /= 2;
    else calculatedK--;

    operationCounter++;
  }

  return operationCounter;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
