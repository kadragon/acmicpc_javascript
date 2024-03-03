const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const numbers = input.split("").map((v) => +v);

for (let i = 1; i < numbers.length - 1; i++) {
  if (numbers[i - 1] - numbers[i] != numbers[i] - numbers[i + 1]) {
    console.log("흥칫뿡!! <(￣ ﹌ ￣)>");
    return;
  }
}

console.log("◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!");
