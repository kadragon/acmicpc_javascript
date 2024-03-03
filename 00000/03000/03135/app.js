const solution = (input) => {
  const [start, target, , ...favorites] = input.split(/[ \n]/).map(Number);
  const minPushCount = Math.min(
    Math.abs(target - start),
    ...favorites.map((favorite) => Math.abs(target - favorite) + 1)
  );

  return minPushCount;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
