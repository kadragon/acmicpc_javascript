const solution = (input) => {
  let result = ["int a;", "int *ptr = &a;", "int **ptr2 = &ptr;"];

  const n = +input;
  const star = "*".repeat(n);

  for (let i = 3; i <= n; i++)
    result.push(`int ${star.slice(0, i)}ptr${i} = &ptr${i - 1};`);

  return result.slice(0, n + 1).join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
