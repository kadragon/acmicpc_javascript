const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = require("fs").readFileSync(filePath).toString().trim();

const solution = (input) => {
  let a = Number(input);
  const c = [200, 206, 218, 229];

  const idx = c.findIndex((v) => v > a) - 1;
  return idx >= 0 ? idx + 1 : c.length;
};

console.log(solution(input));
