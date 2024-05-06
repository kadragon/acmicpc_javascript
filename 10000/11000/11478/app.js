const solution = (input) => {
  let set = Array.from({ length: input.length }, () => new Set());

  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      set[j - i].add(input.slice(i, j + 1));
    }
  }

  return set.reduce((sum, subset) => sum + subset.size, 0);
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
