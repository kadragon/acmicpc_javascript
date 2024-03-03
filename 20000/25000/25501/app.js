const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const S = input.split("\n").slice(1);

const recursion = (s, l, r, cnt) => {
  cnt++;
  if (l >= r) return [1, cnt];
  else if (s[l] != s[r]) return [0, cnt];
  else return recursion(s, l + 1, r - 1, cnt);
};

const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1, 0);
};

for (const s of S) {
  console.log(...isPalindrome(s));
}
