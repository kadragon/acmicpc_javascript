const calculateMiles = (input) => {
  const data = input.map((v) => v.split(" ").map(Number));
  let miles = 0;
  let prevHours = 0;

  for (const [speed, hours] of data) {
    miles += speed * (hours - prevHours);
    prevHours = hours;
  }

  return `${miles} miles`;
};

const solution = (input) => {
  const quests = input.split("\n");
  const result = [];

  for (;;) {
    const n = +quests.shift();
    if (n === -1) break;

    result.push(calculateMiles(quests.splice(0, n)));
  }

  return result.join("\n");
};

const inputPath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = require("fs").readFileSync(inputPath, "utf-8").toString().trim();

console.log(solution(input));
