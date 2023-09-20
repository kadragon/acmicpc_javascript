const solution = (input) => {
  const [n, ...runners] = input.split("\n");

  const runnersMap = new Map();
  const startRunners = runners.slice(0, Number(n));
  const endRunners = runners.slice(Number(n));

  for (const runner of startRunners) {
    runnersMap.set(
      runner,
      runnersMap.has(runner) ? runnersMap.get(runner) + 1 : 1
    );
  }

  for (const runner of endRunners) {
    const count = runnersMap.get(runner);
    if (count === 1) runnersMap.delete(runner);
    else runnersMap.set(runner, count - 1);
  }

  return [...runnersMap.keys()][0];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
