const solution = (input) => {
  const [t, ...data] = input.split("\n");
  const [n, m] = t.split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    const a = data[i];
    const b = data[i + n];

    for (let j = 0; j < m; j++)
      if (a[j] !== b[j * 2] || a[j] !== b[j * 2 + 1]) return "Not Eyfa";
  }

  return "Eyfa";
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
