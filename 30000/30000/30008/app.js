const solution = (input) => {
  const [n, , ...ranks] = input.split(/[ \n]/g).map(Number);

  const rankCut = [-1, 4, 11, 23, 40, 60, 77, 89, 96, 101];

  const getGrade = (rank) => {
    for (let i = 0; i < rankCut.length; i++)
      if (~~((rank * 100) / n) <= rankCut[i]) return i;
  };

  return ranks.map(getGrade).join(" ");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
