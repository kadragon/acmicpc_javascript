const solution = (input) => {
  const [, ...transactions] = input.split("\n");

  let jinjuCost = 0;
  let costs = [];

  for (const transaction of transactions) {
    const [place, cost] = transaction.split(" ");
    if (place === "jinju") {
      jinjuCost = Number(cost);
    }
    costs.push(Number(cost));
  }

  const overCostCount = costs.reduce(
    (count, curCost) => count + (curCost > jinjuCost ? 1 : 0),
    0
  );

  return `${jinjuCost}\n${overCostCount}`;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
