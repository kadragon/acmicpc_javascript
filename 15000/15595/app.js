const solution = (input) => {
  const [, ...submitInfos] = input.split("\n");
  const solver = new Map([["megalusion", [true, 0]]]);
  let countSolve = 0;
  let countAll = 0;

  submitInfos.forEach((submit) => {
    const [, id, result] = submit.split(" ");
    if (solver.has(id) && solver.get(id)[0]) return;

    if (result == 4) {
      solver.set(id, [true, solver.get(id) ? solver.get(id)[1] + 1 : 1]);
      countSolve++;
      countAll += solver.get(id)[1];
    } else solver.set(id, [false, solver.get(id) ? solver.get(id)[1] + 1 : 1]);
  });

  if (countSolve === 0) return 0;
  return ((countSolve / countAll) * 100).toFixed(10);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
