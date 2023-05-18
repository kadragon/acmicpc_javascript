const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath).toString().trim();

const inputs = input.split("\n");
const [_, M] = inputs[0].split(" ").map((v) => +v);
const s = inputs[1].split(" ").map((v) => +v);

for (let i = 0; i < M; i++) {
  const [a, b, c] = inputs[i + 2].split(" ").map((v) => +v);
  switch (a) {
    case 1:
      s[b - 1] = c;
      break;
    case 2:
      for (let j = b - 1; j < c; j++) {
        s[j] = s[j] === 1 ? 0 : 1;
      }
      break;
    default:
      for (let j = b - 1; j < c; j++) {
        s[j] = a === 3 ? 0 : 1;
      }
  }
}

console.log(s.join(" "));
