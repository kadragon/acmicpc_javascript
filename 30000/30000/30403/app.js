const solution = (input) => {
  const [n, str] = input.split("\n");

  const rainbowColorsLower = ["r", "o", "y", "g", "b", "i", "v"];
  const rainbowColorsUpper = ["R", "O", "Y", "G", "B", "I", "V"];

  for (let i = 0; i < n; i++) {
    const currentChar = str[i];

    const lowerIdx = rainbowColorsLower.indexOf(currentChar);
    if (lowerIdx !== -1) {
      rainbowColorsLower.splice(lowerIdx, 1);
      continue;
    }

    const upperIdx = rainbowColorsUpper.indexOf(currentChar);
    if (upperIdx !== -1) {
      rainbowColorsUpper.splice(upperIdx, 1);
    }
  }

  const lowerColorsLen = rainbowColorsLower.length;
  const upperColorsLen = rainbowColorsUpper.length;

  if (lowerColorsLen && upperColorsLen) {
    return "NO!";
  }
  if (!lowerColorsLen && !upperColorsLen) {
    return "YES";
  }

  if (!lowerColorsLen) {
    return "yes";
  }

  return "YES";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
