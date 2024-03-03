const solution = (input) => {
  const data = input.split("").reverse().map(Number);
  const len = data.length;

  for (let i = 0; i < len - 1; i++) {
    if (data[i] >= 5) data[i + 1]++;
    data[i] = 0;
  }

  return data.reverse().join("");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
