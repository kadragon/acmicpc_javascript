const solution = (input) => {
  const [, , year] = input.split(" ");
  const startTime = Date.parse(`January 1, ${year} 00:00`);
  const nowTime = Date.parse(input);
  const endTime = Date.parse(`January 1, ${Number(year) + 1} 00:00`);

  return ((nowTime - startTime) * 100) / (endTime - startTime);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
