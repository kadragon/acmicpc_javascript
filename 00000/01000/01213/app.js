const solution = (input) => {
  const charFreq = new Map();
  input.split("").forEach((char) => {
    charFreq.set(char, (charFreq.get(char) || 0) + 1);
  });

  let oddChar = "";
  const result = [];

  for (const [char, freq] of charFreq) {
    result.push(char.repeat(~~(freq / 2)));

    if (freq % 2 === 1) {
      if (oddChar !== "") return "I'm Sorry Hansoo";
      oddChar = char;
    }
  }

  result.sort();
  result.push(oddChar, ...result.slice().reverse());

  return result.join("");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
