const solution = (input) => {
  const inputs = input.split("\n");
  const countMap = new Map();

  for (let i = 1; i < inputs.length; i++) {
    inputs[i].split(" ").forEach((v) => {
      countMap.set(v, (countMap.get(v) || 0) + 1);
    });
  }

  const mapArray = Array.from(countMap);

  mapArray.sort((a, b) => {
    if (a[1] === b[1]) return a[0].localeCompare(b[0]);
    else return b[1] - a[1];
  });

  return mapArray.map(([n, c]) => `${n} ${c - 1}`).join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
