const solution = (input) => {
  const prefer = input.split(/[ \n]/).map(Number);
  const n = prefer.shift();

  let result = 0;

  for (const pre of prefer) {
    result += pre > n ? n : pre;
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
