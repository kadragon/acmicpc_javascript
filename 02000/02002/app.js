const solution = (input) => {
  let [n, ...cars] = input.split("\n");
  n = +n;
  const inOrder = cars.slice(0, n);
  let outOrder = cars.slice(-n);

  let overTake = 0;
  for (const inCar of inOrder) {
    const outIndex = outOrder.indexOf(inCar);
    if (outIndex == -1) continue;

    overTake += outIndex;
    outOrder = outOrder.slice(outIndex + 1);
  }

  return overTake;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
