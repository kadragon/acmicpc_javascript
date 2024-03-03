const solution = (input) => {
  const lines = input.split("\n");
  const n = Number(lines[0]);
  const k = Number(lines[1]);
  const picks = lines.slice(2).map((v) => v.split(" ").map(Number));

  const cakes = Array(n + 1).fill(false);

  let maxPicked = 0;
  let maxIdx = 0;
  let maxGuessPicked = 0;
  let maxGuessIdx = 0;

  for (let j = 0; j < k; j++) {
    const [a, b] = picks[j];

    if (b - a + 1 > maxGuessPicked) {
      maxGuessPicked = b - a + 1;
      maxGuessIdx = j + 1;
    }

    let picked = 0;
    for (let i = a; i <= b; i++) {
      if (!cakes[i]) {
        picked++;
        cakes[i] = true;
      }
    }

    if (picked > maxPicked) {
      maxPicked = picked;
      maxIdx = j + 1;
    }
  }

  return `${maxGuessIdx}\n${maxIdx}`;
};

if (process.platform === "linux") {
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();
  console.log(solution(input));
}

exports.solution = solution;
