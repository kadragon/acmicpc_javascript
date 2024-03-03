const solution = (input) => {
  let res = 0;
  let cur = 0;
  const len = input.length;

  while (cur < len) {
    const str = String(++res);
    for (let i = 0; i < str.length; i++) {
      if (str[i] === input[cur]) cur++;
      if (cur === len) break;
    }
  }

  return res;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
