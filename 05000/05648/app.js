const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

const numbers = input.split(/[ \n]+/).slice(1);

console.log(
  numbers
    .map((n) => {
      return Number(n.split("").reverse().join(""));
    })
    .sort((a, b) => a - b)
    .join("\n")
);
