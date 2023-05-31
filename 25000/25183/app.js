const solution = (input) => {
  const [n, str] = input.split("\n");
  const charCodes = str.split("").map((char) => char.charCodeAt(0));

  let cnt = 0;
  for (let i = 0; i < +n - 1; i++) {
    if (
      charCodes[i] + 1 === charCodes[i + 1] ||
      charCodes[i] - 1 === charCodes[i + 1]
    ) {
      cnt++;
      if (cnt === 4) return "YES";
    } else cnt = 0;
  }

  return "NO";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
