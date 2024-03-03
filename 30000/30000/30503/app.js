const solution = (input) => {
  const lines = input.split("\n");
  const flowers = [0, ...lines[1].split(" ").map(Number)];
  const orders = lines.slice(3).map((v) => v.split(" ").map(Number));

  const result = [];

  for (const order of orders) {
    const [type, start, end, target] = order;
    if (type === 1) {
      let count = 0;
      for (let i = start; i <= end; i++) {
        if (flowers[i] === target) count++;
      }
      result.push(count);
    } else {
      flowers.fill(0, start, end + 1);
    }
  }
  return result.join("\n");
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
