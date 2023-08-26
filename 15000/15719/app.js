const solution = (input) => {
  let [n, nums] = input.split("\n");
  let len = nums.length;
  let max = (n * (n - 1)) / 2;
  let tmp = 0;

  for (let i = 0; i < len; i++) {
    const c = nums[i];
    if (c === ` `) {
      max -= tmp;
      tmp = 0;
    } else {
      tmp = tmp * 10 + Number(c);
    }
  }

  return -(max - tmp);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
