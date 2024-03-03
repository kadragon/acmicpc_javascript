const solution = (input) => {
  const isSurprising = (str) => {
    const len = str.length;

    for (let i = 1; i <= len - 1; i++) {
      const set = new Set();
      for (let j = 0; j < len - i; j++) {
        const subStr = `${str[j]}${str[j + i]}`;
        if (set.has(subStr)) return false;
        set.add(subStr);
      }
    }

    return true;
  };

  const questions = input.split("\n").slice(0, -1);
  const result = [];
  for (const question of questions) {
    const isOK = isSurprising(question);
    result.push(`${question} is ${isOK ? "" : "NOT "}surprising.`);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
