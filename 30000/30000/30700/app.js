const solution = (input) => {
  const matchTxt = "KOREA";
  let ans = 0;

  for (const c of input) {
    if (c === matchTxt[ans % 5]) {
      ans++;
    }
  }

  return ans;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
