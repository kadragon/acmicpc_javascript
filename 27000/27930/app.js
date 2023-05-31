const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

let korea = "KOREA".split("");
let yeonsei = "YONSEI".split("");

for (const ch of input) {
  if (ch === korea[0]) {
    korea.shift();
    if (korea.length === 0) {
      console.log("KOREA");
      break;
    }
  }
  if (ch === yeonsei[0]) {
    yeonsei.shift();
    if (yeonsei.length === 0) {
      console.log("YONSEI");
      break;
    }
  }
}
