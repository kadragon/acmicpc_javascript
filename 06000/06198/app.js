const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const [, ...heights] = input.split("\n").map((v) => +v);
const stack = [];
let answer = 0;

heights.forEach((v) => {
  while (stack.length && stack[stack.length - 1] <= v) stack.pop();
  stack.push(v);

  answer += stack.length - 1;
});

console.log(answer);
