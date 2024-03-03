const solution = (input) => {
  const [, k, ...arr] = input.split(/[ \n]/).map(Number);
  let clapCount = 0;
  let clapTime = 0;

  for (const time of arr) {
    if (time > clapTime) {
      clapCount++;
      clapTime = time + k;
    }
  }

  return clapCount;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
