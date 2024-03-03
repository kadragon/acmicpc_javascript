const solution = (input) => {
  const [...quests] = input.split("\n").map((v) => v.split(" ").map(Number));
  const result = [];
  let i = 1;

  const pushResultMsg = (n, len) => {
    len = isNaN(len) || len == 0 ? "Impossible." : `${n} = ${len.toFixed(3)}`;
    result.push(`Triangle #${i++}\n${len}\n`);
  };

  for (let [a, b, c] of quests) {
    if (c == 0) break;
    const [sa, sb, sc] = [a ** 2, b ** 2, c ** 2];

    if (a === -1) {
      const len = Math.sqrt(sc - sb);
      pushResultMsg("a", len);
    } else if (b === -1) {
      const len = Math.sqrt(sc - sa);
      pushResultMsg("b", len);
    } else {
      const len = Math.sqrt(sa + sb);
      pushResultMsg("c", len);
    }
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
