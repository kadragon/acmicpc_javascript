const solution = (input) => {
  const socks = input.split(`\n`).map(Number);
  const sockSet = new Set();

  for (const sock of socks) {
    if (sockSet.has(sock)) sockSet.delete(sock);
    else sockSet.add(sock);
  }

  return sockSet.values().next().value;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
