const solution = (input) => {
  const lines = input.split("\n");
  const T = Number(lines[0]);
  const result = [];

  for (let i = 0; i < T; i++) {
    const n = Number(lines[i * 3 + 1]);
    const a = lines[i * 3 + 2].split(" ").map(Number);
    const b = lines[i * 3 + 3].split(" ").map(Number);
    let maxLen = 0;

    if (a[n - 1] <= b[0]) {
      for (let j = a.indexOf(b[0]); j < n; j++) {
        const findIdx = b.lastIndexOf(a[j]);
        if (findIdx === -1) continue;

        let len = Math.abs(j - findIdx);
        if (len > maxLen) maxLen = len;
      }
    }

    result.push(maxLen);
  }

  return result
    .map((v) => `The maximum distance is ${v}\n`)
    .join("\n")
    .trimEnd();
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
