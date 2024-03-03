const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const passwords = input.split("\n").slice(1);

for (const password of passwords) {
  const len = password.length;
  console.log(len >= 6 && len <= 9 ? "yes" : "no");
}
