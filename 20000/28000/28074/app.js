const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

if ([..."MOBIS"].every((v) => input.includes(v)) === false) {
  console.log("NO");
} else {
  console.log("YES");
}
