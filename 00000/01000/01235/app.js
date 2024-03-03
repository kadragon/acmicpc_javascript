const solution = (input) => {
  const [n, ...numbers] = input.split("\n");
  const len = numbers[0].length;

  for (let i = 0; i < len; i++) {
    let correct = true;
    const checked = {};

    for (let j = 0; j < n; j++) {
      const subString = numbers[j].slice(len - 1 - i);
      if (checked[subString]) {
        correct = false;
        break;
      } else checked[subString] = true;
    }

    if (correct) return i + 1;
  }
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
