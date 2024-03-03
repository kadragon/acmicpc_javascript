const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [, ...names] = input.split("\n").map((v) => v.trim());

console.log(names.indexOf("anj") !== -1 ? "뭐야;" : "뭐야?");
