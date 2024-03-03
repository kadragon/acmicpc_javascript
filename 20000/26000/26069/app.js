const solution = (input) => {
  const [, ...meetings] = input.split("\n");
  const dansing = { ChongChong: true };

  for (const meeting of meetings) {
    const [a, b] = meeting.split(" ");
    if (dansing[a]) dansing[b] = true;
    else if (dansing[b]) dansing[a] = true;
  }

  return Object.keys(dansing).length;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
