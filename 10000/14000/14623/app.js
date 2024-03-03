const solution = (input) => {
  const [a, b] = input.split("\n").map((v) => v.split(""));

  const tmp = [];
  for (const i of b.reverse()) {
    if (i === "1") tmp.push([...a].reverse());
    a.push("0");
  }

  const len = tmp.length;
  const ans = Array(a.length).fill(0);

  for (let i = 0; i < len; i++)
    for (let j = 0; j < tmp[i].length; j++) ans[j] += parseInt(tmp[i][j]);

  for (let i = 0; i < ans.length; i++)
    if (ans[i] >= 2) {
      ans[i + 1] += ~~(ans[i] / 2);
      ans[i] %= 2;
    }

  if (ans[ans.length - 1] === 0) ans.pop();

  return ans.reverse().join("");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
