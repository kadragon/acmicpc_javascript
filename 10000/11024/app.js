const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [, ...arrs] = input.split("\n");

arrs.forEach((arr) => {
  arr = arr.split(" ").map(Number);
  const ans = arr.reduce((acc, cur) => acc + cur, 0);

  console.log(ans);
});
