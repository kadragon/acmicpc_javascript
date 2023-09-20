const solution = (input) => {
  const [[n], hangers, clouths] = input
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  for (let i = 0; i < n; i++) {
    if (hangers[i] === 1) clouths[0]--, (hangers[i] = "U");
    else if (hangers[i] === 2) clouths[1]--, (hangers[i] = "D");

    if (clouths[0] < 0 || clouths[1] < 0) return "NO";
  }

  for (let i = 0; i < n; i++) {
    if (hangers[i] === 3) {
      if (clouths[0] > 0) clouths[0]--, (hangers[i] = "U");
      else if (clouths[1] > 0) clouths[1]--, (hangers[i] = "D");
    }
  }

  return `YES\n${hangers.join("")}`;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
