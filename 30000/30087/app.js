const solution = (input) => {
  const placesInfo = {
    Algorithm: "204",
    DataAnalysis: "207",
    ArtificialIntelligence: "302",
    CyberSecurity: "B101",
    Network: "303",
    Startup: "501",
    TestStrategy: "105",
  };

  const [, ...articles] = input.split("\n");

  const result = [];

  for (const article of articles) {
    result.push(placesInfo[article]);
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
