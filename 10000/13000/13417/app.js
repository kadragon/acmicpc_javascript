const solution = (input) => {
  const [T, ...cases] = input.split("\n");
  let result = "";

  for (let i = 0; i < T; i++) {
    const len = Number(cases[i * 2]);
    const words = cases[i * 2 + 1].split(" ");
    const queue = [words[0]];

    for (let j = 1; j < len; j++) {
      if (words[j] <= queue[0]) queue.unshift(words[j]);
      else queue.push(words[j]);
    }

    result += `${queue.join("")}\n`;
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
