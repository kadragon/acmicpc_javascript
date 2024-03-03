const solution = (input) => {
  const data = input
    .split("\n")
    .slice(1)
    .map((v) => v.split(" ").map(Number));
  const meet = Array.from(Array(5), () =>
    Array.from(Array(10), () => new Array())
  );

  for (let k = 0; k < data.length; k++) {
    for (let i = 0; i < 5; i++) {
      meet[i][data[k][i]].push(k);
    }
  }

  const sorting = Array.from(Array(data.length), () => new Array());

  for (let i = 0; i < 5; i++)
    for (let j = 1; j < 10; j++)
      if (meet[i][j].length >= 2)
        for (const s of meet[i][j]) sorting[s].push(...meet[i][j]);

  let max = 0;
  for (let i = 0; i < data.length; i++) {
    sorting[i] = [...new Set(sorting[i])].length;
    if (sorting[max] < sorting[i]) max = i;
  }

  return max + 1;
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
