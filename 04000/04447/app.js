const guess = (heroName) => {
  const msg = `${heroName} is `;
  let [g, b] = [0, 0];

  for (const c of heroName) {
    const converted = c.toUpperCase();
    if (converted === "G") g++;
    else if (converted === "B") b++;
  }

  if (g > b) {
    return `${msg}GOOD`;
  } else if (g == b) {
    return `${msg}NEUTRAL`;
  } else {
    return `${msg}A BADDY`;
  }
};

const solution = (input) => {
  const [, ...heroNames] = input.split("\n");
  return heroNames.map(guess).join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
