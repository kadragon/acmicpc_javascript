const zeroTrim = (str) => {
  const len = str.length;
  for (let i = 0; i < len; i++) if (str[i] === "1") return str.slice(i);
  return "0";
};

const binarySum = (a, b) => {
  a = zeroTrim(a).split("").map(Number);
  b = zeroTrim(b).split("").map(Number);

  let result = "";
  let carry = 0;

  while (a.length || b.length || carry) {
    carry += (a.length ? a.pop() : 0) + (b.length ? b.pop() : 0);
    result = (carry % 2) + result;
    carry = carry > 1;
  }

  return result;
};

const solution = (input) => {
  const quests = input
    .split("\n")
    .slice(1)
    .map((v) => v.split(" "));

  const result = [];
  for (const [a, b] of quests) {
    result.push(binarySum(a, b));
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
