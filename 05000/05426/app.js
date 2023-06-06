const solution = (input) => {
  const problems = input.split("\n").slice(1);

  problems.forEach((problem) => {
    problem = problem.split("");
    const len = Math.sqrt(problem.length);
    const arr = Array.from(Array(len), () => Array(len).fill(""));

    for (let i = 0; i < len; i++)
      for (let j = 0; j < len; j++) arr[i][j] = problem[i * len + j];

    let result = "";
    for (let j = len - 1; j >= 0; j--)
      for (let i = 0; i < len; i++) result += arr[i][j];

    console.log(result);
  });
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

solution(input);
