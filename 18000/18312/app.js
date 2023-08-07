const solution = (input) => {
  const [n, m] = input.split(" ").map(Number);
  let result = 0;

  const makeTime = (t) => {
    return t.map((v) => String(v).padStart(2, "0")).join("");
  };

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= 59; j++) {
      for (let k = 0; k <= 59; k++) {
        const time = makeTime([i, j, k]);

        if (time.includes(m)) {
          result++;
        }
      }
    }
  }

  return result;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
