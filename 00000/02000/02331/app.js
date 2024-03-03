const solution = (input) => {
  let [n, p] = input.split(" ").map(Number);
  const saveIdx = new Map();

  while (!saveIdx.has(n)) {
    saveIdx.set(n, saveIdx.size);
    n = nextGenerator(n, p);
  }

  return saveIdx.get(n);
};

const nextGenerator = (n, p) => {
  let next = 0;
  for (; n > 0; n = ~~(n / 10)) next += (n % 10) ** p;

  return next;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
