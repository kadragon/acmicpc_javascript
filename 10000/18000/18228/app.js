const solution = (input) => {
  const inputs = input.split("\n");
  const ices = inputs[1].split(" ").map(Number);

  let leftMin = Infinity;
  let rightMin = Infinity;
  let isMovingLeft = true;

  for (const ice of ices) {
    if (ice === -1) {
      isMovingLeft = !isMovingLeft;
      continue;
    }

    if (isMovingLeft) leftMin = Math.min(leftMin, ice);
    else rightMin = Math.min(rightMin, ice);
  }

  return leftMin + rightMin;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
