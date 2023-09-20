const solution = (input) => {
  let [k, myAnswer, friendAnswer] = input.split("\n");
  k = +k;

  const len = myAnswer.length;
  let diffAnswerCount = 0;
  let sameAnswerCount = 0;

  for (let i = 0; i < len; i++)
    myAnswer[i] === friendAnswer[i] ? sameAnswerCount++ : diffAnswerCount++;

  if (k <= sameAnswerCount) return k + diffAnswerCount;
  return sameAnswerCount + diffAnswerCount - (k - sameAnswerCount);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
