const solution = (input) => {
  const inputLine = input.split("\n");
  const [N] = inputLine[0].split(" ").map(Number);
  const jewels = inputLine.slice(1).map(Number);

  const maxJewel = jewels.reduce((acc, cur) => Math.max(acc, cur), 0);

  let left = 1;
  let right = maxJewel;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const students = jewels.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0);

    if (students <= N) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
