const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const cnt = { U: 0, D: 0, P: 0, C: 0 };
let maxCnt = 0;
let ans = "";

for (const c of input) {
  if (c === "U" || c === "C") {
    cnt["U"]++;
    maxCnt = Math.max(maxCnt, cnt["U"]);
  } else if (c === "D" || c === "P") {
    cnt["D"]++;
  }
}

if (cnt["U"] >= cnt["D"]) ans += "U";
if (cnt["D"] >= cnt["U"]) ans += "DP";

console.log(ans);
