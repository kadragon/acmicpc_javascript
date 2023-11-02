const solution = (input) => {
  const candyCount = Number(input);

  let result = 0;

  for (let i = 2; i <= candyCount; i += 2) {
    const remainCandyCount = candyCount - i;

    for (let j = 1; j <= remainCandyCount; j++) {
      if (remainCandyCount - j >= j + 2) result++;
      else break;
    }
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
