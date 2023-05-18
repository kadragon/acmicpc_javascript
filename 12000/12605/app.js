const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const strings = input.split("\n").slice(1);

for (const [i, str] of strings.entries()) {
  console.log(`Case #${i + 1}: ${str.split(" ").reverse().join(" ")}`);
}
