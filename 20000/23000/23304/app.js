const checkPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

const solution = (input) => {
  while (input.length > 1) {
    if (!checkPalindrome(input)) {
      return "IPSELENTI";
    } else {
      input = input.slice(0, Math.floor(input.length / 2));
    }
  }
  return "AKARAKA";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
