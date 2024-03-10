const solution = (input) => {
  const groupTimes = input
    .split("\n")
    .slice(1)
    .map((line) =>
      line
        .split(" ")
        .map(Number)
        .slice(1)
        .reduce((sum, current) => sum + current, 0)
    )
    .sort((a, b) => a - b);

  return groupTimes.reduce(
    (result, time, index, array) => result + time * (array.length - index),
    0
  );
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
