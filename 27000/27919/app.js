const solution = (input) => {
  const count = { U: 0, D: 0 };

  for (const char of input) {
    if (char === "U" || char === "C") {
      count.U++;
    } else {
      count.D++;
    }
  }

  let answer = "";

  if (count.U > Math.floor(count.D / 2) + (count.D % 2)) {
    answer = "U";
  }

  if (count.D > 0) {
    answer += "DP";
  }

  return answer;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
