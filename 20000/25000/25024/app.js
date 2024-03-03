const solution = (input) => {
  const questions = input
    .split("\n")
    .slice(1)
    .map((v) => v.split(" ").map(Number));

  const result = [];

  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const checkDate = (a, b) => {
    if (a == 0 || b == 0) return false;
    if (a > 12) return false;
    if (b > days[a]) return false;
    return true;
  };

  const checkTime = (hour, minute) => (hour < 24 && minute < 60 ? "Yes" : "No");

  const conv = (a) => (a ? "Yes" : "No");

  for (const [a, b] of questions) {
    const time = checkTime(a, b);
    const date = checkDate(a, b);
    result.push(`${conv(time)} ${conv(date)}`);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
