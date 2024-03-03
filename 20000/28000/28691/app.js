const solution = (input) => {
  const clubNameData = {
    M: "MatKor",
    W: "WiCys",
    C: "CyKor",
    A: "AlKor",
    $: "$clear",
  };

  return clubNameData[input];
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
