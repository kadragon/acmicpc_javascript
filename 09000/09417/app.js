const findGcd = (a, b) => (b ? findGcd(b, a % b) : a);

const solution = (input) => {
  const [, ...quests] = input.split("\n").map((v) => v.split(" "));
  const result = [];

  for (const quest of quests) {
    quest.sort((a, b) => b - a);
    const len = quest.length;

    let gcd = 0;
    for (let i = 0; i < len; i++) {
      if (gcd > quest[i]) break;

      for (let j = 0; j < len; j++) {
        if (i === j) continue;
        if (gcd > quest[j]) break;

        gcd = Math.max(gcd, findGcd(quest[i], quest[j]));
      }
    }

    result.push(gcd);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
