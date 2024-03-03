const solution = (input) => {
  const n = +input;
  const result = [1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < result.length; j++) {
      const [q, r] = [~~(result[j] / 2), result[j] % 2];
      result[j] = q;
      if (r) {
        result[j + 1] = (result[j + 1] || 0) + 10;
      }
    }
  }

  return "0." + result.slice(1).join("");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
