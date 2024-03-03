const solution = (input) => {
  const [charList, bessie] = input.split("\n");

  const charIdxMap = new Map();
  charList.split("").map((v, i) => charIdxMap.set(v, i));

  let times = 1;
  let lastIdx = -1;

  bessie.split("").map((v) => {
    const charIdx = charIdxMap.get(v);
    if (charIdx <= lastIdx) times++;
    lastIdx = charIdx;
  });

  return times;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
