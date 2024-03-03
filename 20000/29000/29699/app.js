const solution = (input) => {
  const n = +input - 1;
  const printedString = "WelcomeToSMUPC";

  return printedString[n % 14];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
