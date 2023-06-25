const solution = (input) => {
  const answer = {
    SONGDO: "HIGHSCHOOL",
    CODE: "MASTER",
    2023: "0611",
    ALGORITHM: "CONTEST",
  };

  return answer[input];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
