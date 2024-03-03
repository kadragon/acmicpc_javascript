const isPalindrome = (str) => {
  const len = str.length;
  for (let i = 0; i < len / 2; i++)
    if (str[i] !== str[len - i - 1]) return false;

  return true;
};

const solution = (input) => {
  const len = input.length;

  for (let i = 0; i < len; i++)
    if (isPalindrome(input.slice(i))) return len + i;

  return len * 2 - 1;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
