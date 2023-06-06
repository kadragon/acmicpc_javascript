const solution = (input) => {
  const [, gameType, ...players] = input.split(/\s+/);
  const gamesName = {
    Y: 1,
    F: 2,
    O: 3,
  };
  const uniquePlayerCount = new Set(players).size;

  return parseInt(uniquePlayerCount / gamesName[gameType]);
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
