const solution = (input) => {
  const [, ...sequence] = input.split(/[ \n]/).map(Number);

  const stack = [];
  let currentNumber = 1;

  for (const number of sequence) {
    if (number === currentNumber) {
      currentNumber++;
    } else {
      stack.push(number);
    }

    while (stack.length > 0 && stack[stack.length - 1] === currentNumber) {
      stack.pop();
      currentNumber++;
    }
  }

  return stack.length === 0 ? "Nice" : "Sad";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
