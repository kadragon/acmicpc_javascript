const solution = (input) => {
  const pixels = input.split(/[ \n]/);
  const cats = {
    w: "chunbae",
    b: "nabi",
    g: "yeongcheol",
  };

  for (const pixel of pixels) {
    if (cats[pixel]) {
      return cats[pixel];
    }
  }
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
