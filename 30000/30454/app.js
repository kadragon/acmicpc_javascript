const solution = (input) => {
  const inputs = input.split("\n");
  const lines = inputs.slice(1);

  let countMap = new Map();
  let maxCount = 0;

  for (let line of lines) {
    line = "0" + line;
    const count = (line.match(/01/g) || []).length;

    countMap.set(count, (countMap.get(count) || 0) + 1);

    if (maxCount < count) {
      maxCount = count;
    }
  }

  return `${maxCount} ${countMap.get(maxCount)}`;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
